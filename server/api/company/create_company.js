import Async from 'async';
import Joi from 'joi';
import _ from 'lodash';
import Company from './company';
import TxHelper from '../../db/TxHelper';
import { company_schema } from './schema';


/**
 * @param  {} db
 */
export default function handler(db) {
  return (req, res, next) => {
    const tx = new TxHelper(db);
    const company = new Company(tx);
    Async.series([
      (cb) => {
        Joi.validate(req.body, company_schema, cb);
      },
      (cb) => {
        tx.beginTransaction(cb);
      },
      (cb) => {
        company.createCompany(req.body, cb);
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
