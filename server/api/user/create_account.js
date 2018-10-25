import Async from 'async';
import Joi from 'joi';
import Boom from 'boom';
import Config from 'config';
import Bcrypt from 'bcrypt';
import _ from 'lodash';
import Company from '../../models/company';
import Transaction from '../../db/Transaction';
import Query from '../../db/Query';
import { tables } from '../../db';
import { user_account } from './schema';
import { constants } from '../../common';
import User from '../../models/user';

const nop = () => {};

module.exports = function createAccount(db) {
  return async (req, res, next) => {
    const {
      error, value,
    } = Joi.validate(req.body, user_account);
    if (error) {
      return next(error);
    }

    const tx = new Transaction(db);
    const cp = new Company(tx);
    const {
      user_info, company, office, office_id,
    } = value;
    let new_user_id;

    return Async.waterfall([
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
        new_user_id = user_id;
        const { company_id } = value;
        if (company_id) {
          return cb(null, { user_id, company_id, office_id });
        }
        const { company_info, company_office } = company;
        if (!company_id && company_info) {
          return cp.createCompany({ company_info, offices: [company_office] }, (err, result) => {
            if (err) {
              return cb(err);
            }
            return cb(null, { user_id, company_id: result.company, office_id: result.office[0].office });
          });
        }
        return cb(Boom.badRequest('Company info not sent'));
      },
      ({ user_id, company_id, office_id }, cb) => {
        if (office_id) {
          return cb(null, { user_id, company_id, office_id });
        }
        if (!office_id && office) {
          return cp.createCompanyOffice({ ...office, company_id }, (err, result) => {
            if (err) {
              return cb(err);
            }
            return cb(null, { user_id, company_id, office_id: result.office });
          });
        }
        return cb(Boom.badRequest('Office info not sent'));
      },
      ({ user_id, office_id }, cb) => {
        const defaults = { job_title: '', work_phone: '', work_performed: [] };
        const insertData = Object.assign(defaults, _.get(company, 'office_profile', {}));

        tx.insert({
          tableName: tables.USER_OFFICE_PROFILE,
          values: { ...insertData, user_id, office_id },
        }, cb);
      },
    ], (err) => {
      if (err) {
        tx.rollbackTransaction(() => next(err));
      } else {
        tx.commitTransaction((commiterror) => {
          if (commiterror) {
            return next(commiterror);
          }
          const usr = new User(new Query(db));
          usr.sendAccountVerificationEmail({ user_id: new_user_id, email: user_info.email }, nop);
          return res.send('ok');
        });
      }
    });
  };
};
