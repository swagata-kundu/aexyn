import Async from 'async';
import Joi from 'joi';
import _ from 'lodash';
import TxHelper from '../../db/TxHelper';
import { tables } from '../../db';
import { company_schema } from './schema';
import { aws, constants, util } from '../../common';

function createCompanyBucket({ company_id, company_name }) {
}

/**
 * @param  {} data
 * @param  {} queryHelper
 * @param  {} done
 */
export function createCompanyOffice(data, queryHelper, done) {
  Async.auto({
    office: cb => queryHelper.insert({ tableName: tables.OFFICE, values: data }, cb),
    package: ['office', (results, cb) => {
      const values = {
        office_id: results.office,
        package_id: constants.PACKAGE.FREE,
        start_date: util.getDateString(),
      };
      return queryHelper.insert({ tableName: tables.OFFICE_PACKAGE, values }, cb);
    }],
  }, done);
}
/**
 * @param  {} data
 * @param  {} queryHelper
 * @param  {} done
 */
export function createCompany({ company_info, offices }, queryHelper, done) {
  Async.auto({
    company: (cb) => {
      queryHelper.insert({ tableName: tables.COMPANY, values: company_info }, cb);
    },
    office: ['company', (results, cb) => {
      const { company } = results;

      Async.mapSeries(offices, (office, cb2) => {
        const o = { ...office, company_id: company };
        return createCompanyOffice(o, queryHelper, cb2);
      }, (err, loc_results) => {
        if (err) {
          return cb(err);
        }
        return cb(null, _.flatten(loc_results));
      });
    }],
  }, done);
}
/**
 * @param  {} db
 */
export default function handler(db) {
  return (req, res, next) => {
    const tx = new TxHelper(db);
    Async.series([
      (cb) => {
        Joi.validate(req.body, company_schema, cb);
      },
      (cb) => {
        tx.beginTransaction(cb);
      },
      (cb) => {
        createCompany(req.body, tx, cb);
      },
    ], (err, results) => {
      if (err) {
        tx.rollbackTransaction(() => next(err));
      } else {
        tx.commitTransaction((commiterror) => {
          if (commiterror) {
            return next(commiterror);
          }
          return res.json(_.last(results));
        });
      }
    });
  };
}
