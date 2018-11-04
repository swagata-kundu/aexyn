import Async from 'async';
import Joi from 'joi';
import Boom from 'boom';
import Config from 'config';
import Bcrypt from 'bcrypt';
import _ from 'lodash';
import passerror from 'passerror';
import Company from '../../models/company';
import Transaction from '../../db/Transaction';
import Query from '../../db/Query';
import { tables } from '../../db';
import { user_account } from './schema';
import { constants } from '../../common';
import User from '../../models/user';

const nop = () => {};

module.exports = function createAccount(db) {
  return (req, res, next) => {
    const {
      error, value,
    } = Joi.validate(req.body, user_account);
    if (error) {
      return next(error);
    }

    const tx = new Transaction(db);
    const cp = new Company(tx);
    const {
      user_info, company,
    } = value;

    return Async.auto({
      beginTransaction: (cb) => {
        tx.beginTransaction(cb);
      },
      checkDuplicate: ['beginTransaction', (results, cb) => {
        const query = {
          text: 'SELECT count(id) AS userCount FROM user where email=?;',
          values: [user_info.email],
        };
        tx.query(query, passerror(cb, (r) => {
          if (r[0].userCount) {
            return cb(Boom.badRequest('Email already in use..'));
          }
          return cb(null);
        }));
      }],
      password: ['checkDuplicate', (results, cb) => Bcrypt.hash(user_info.password, Config.get('saltRound'), cb)],
      user: ['password', (results, cb) => tx.insert({ tableName: tables.USER, values: { ...user_info, password: results.password, user_role_id: constants.ROLE.CUSTOMER } }, cb)],
      company: ['user', (results, cb) => {
        const { company_id, office_id } = value;
        if (company_id) {
          return cb(null, { company_id, office_id });
        }
        const { company_info, company_office } = company;

        if (!company_id && company_info) {
          return cp.createCompany({ company_info, offices: [company_office] },
            passerror(cb, result => cb(null,
              { company_id: result.company, office_id: result.office[0].office, isNewCompany: true })));
        }
        return cb(Boom.badRequest('Company info not sent'));
      }],
      office: ['company', (results, cb) => {
        const { company_id, office_id } = results.company;
        if (office_id) {
          return cb(null, { company_id, office_id: results.company.office_id });
        }
        if (!value.office_id && value.office) {
          return cp.createCompanyOffice({ ...value.office, company_id },
            passerror(cb, result => cb(null, { company_id, office_id: result.office })));
        }
        return cb(Boom.badRequest('Office info not sent'));
      }],
      officeProfile: ['office', (results, cb) => {
        const defaults = { job_title: '', work_phone: '', work_performed: [] };
        const insertData = Object.assign(defaults, _.get(company, 'office_profile', {}));

        tx.insert({
          tableName: tables.USER_OFFICE_PROFILE,
          values: { ...insertData, user_id: results.user, office_id: results.office.office_id },
        }, cb);
      }],
      grantPermission: ['officeProfile', (results, cb) => {
        const { isNewCompany } = results.company;
        if (!isNewCompany) {
          return cb();
        }
        const mfs_permission = {
          user_id: results.user,
          autoAdd: true,
          permission: constants.MFS_PERMISSION.ADMIN,
        };
        const jungle_permission = {
          user_id: results.user,
        };
        Async.series([
          cb2 => tx.insert({ tableName: tables.USER_SUPPLIERS_PERMISSION, values: mfs_permission }, cb2),
          cb2 => tx.insert({ tableName: tables.USER_JUNGLE_PERMISSION, values: jungle_permission }, cb2),
        ], cb);
      }],
    }, (err, results) => {
      if (err) {
        tx.rollbackTransaction(() => next(err));
      } else {
        tx.commitTransaction((commiterror) => {
          if (commiterror) {
            return next(commiterror);
          }
          const usr = new User(new Query(db));
          usr.sendAccountVerificationEmail(
            { user_id: results.user, email: user_info.email }, nop,
          );
          // req.session.user_id = new_user_id;
          res.cookie('user_id', results.user, { httpOnly: false });
          return res.send('ok');
        });
      }
    });
  };
};
