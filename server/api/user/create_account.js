import Async from 'async';
import Joi from 'joi';
import Boom from 'boom';
import Config from 'config';
import Bcrypt from 'bcrypt';
import Company from '../company/company';
import TxHelper from '../../db/TxHelper';
import { tables } from '../../db';
import { user_account } from './schema';
import { constants } from '../../common';

module.exports = function createAccount(db) {
  return async (req, res, next) => {
    const {
      error, value,
    } = Joi.validate(req.body, user_account);
    if (error) {
      return next(error);
    }

    const tx = new TxHelper(db);
    const _company =new Company(tx);
    const {
      user_info, company_info, office, company_id, office_id, office_profile,
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
      cb => Bcrypt.hash(user_info.password, Config.get('saltRound'), cb),
      (password, cb) => tx.insert({ tableName: tables.USER, values: { ...user_info, password, user_role_id: constants.ROLE.CUSTOMER } }, cb),
      (user_id, cb) => {
        if (company_id) {
          return cb(null, { user_id, company_id, office_id });
        }

        if (!company_id && company_info) {
          _company.createCompany({ company_info, offices: [office] }, (err, result) => {
            if (err) {
              return cb(err);
            }
            const { company } = result;
            return cb(null, { user_id, company_id: company, office_id: result.office[0].office });
          });
        }
        return cb(Boom.badRequest('Company info not sent'));
      },
      ({ user_id, company_id, office_id }, cb) => {
        if (office_id) {
          return cb(null, { user_id, company_id, office_id });
        }
        if (!office_id && office) {
          return _company.createCompanyOffice({ ...office, company_id }, (err, result) => {
            if (err) {
              return cb(err);
            }
            return cb(null, { user_id, company_id, office_id: result.office });
          });
        }
        return cb(Boom.badRequest('Office info not sent'));
      },
      ({ user_id, office_id }, cb) => tx.insert({
        tableName: tables.USER_OFFICE_PROFILE,
        values: { ...office_profile, user_id, office_id },
      }, cb),
    ], (err) => {
      if (err) {
        tx.rollbackTransaction(() => next(err));
      } else {
        tx.commitTransaction((commiterror) => {
          if (commiterror) {
            return next(commiterror);
          }
          return res.send('ok');
        });
      }
    });
  };
};
