import Async from 'async';
import Joi from 'joi';
import _ from 'lodash';
import Boom from 'boom';
import TxHelper from '../../db/TxHelper';
import { tables } from '../../db';
import { user_account } from './schema';
import { createCompany } from '../company/create_company';

module.exports = function createAccount(db) {
  return async (req, res, next) => {
    const {
      error, value,
    } = Joi.validate(req.body, user_account);
    if (error) {
      return next(error);
    }

    const tx = new TxHelper(db);
    const {
      user_info, company_info, office, office_profile, company_id, office_id,
    } = value;
    Async.waterfall([
      (cb) => {
        tx.beginTransaction(cb);
      },
      (cb) => {
        const query = {
          text: 'SELECT count(id) AS userCount FROM user where email=?;',
          values: [user_info.email],
        };
        tx.query(query, (err, r) => {
          if (err) {
            return cb(err);
          }
          if (r[0].userCount) {
            return cb(Boom.badRequest('Email already in use..'));
          }
          return cb(null);
        });
      },
      (cb) => {
        tx.insert({ tableName: tables.USER, values: user_info }, cb);
      },
      (userId, cb) => {
        if (company_id) {
          return cb(null, { userId, company_id, office_id });
        }

        if (!company_id && company_info) {
          return createCompany({ company_info, offices: [office] }, (err, result) => {
            if (err) {
              return cb(err);
            }
          });
        }

        return cb(Boom.badRequest('Company info not sent'));
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

    // const queryHelper = new QueryHelper(db);
    // const query = {
    //   text: 'SELECT count(id) AS userCount FROM user where email=?;',
    //   values: ['la'],
    // };
    // try {
    //   const result = await queryHelper.query(query);
    //   return res.json({ exists: !!result[0].userCount });
    // } catch (dberror) {
    //   return next(dberror);
    // }
  };
};
