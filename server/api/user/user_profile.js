import Async from 'async';
import Joi from 'joi';
import passerror from 'passerror';
import Bcrypt from 'bcrypt';
import _ from 'lodash';
import Boom from 'boom';
import Config from 'config';


import { update_profile } from './schema';
import QueryHelper from '../../db/Query';
import { tables } from '../../db';

const getUserDetail = db => (req, res, next) => {
  const qry = new QueryHelper(db);

  Async.auto({
    validate: cb => Joi.validate(req.params, Joi.object({
      user_id: Joi.number().required(),
    }), cb),
    userInfo: ['validate', (results, cb) => {
      qry.query({ text: 'SELECT first_name,last_name,email,pic FROM user where id=?', values: [req.params.user_id] }, cb);
    }],
    officeProfile: ['validate', (results, cb) => {
      qry.query({
        text: `SELECT 
            UOP.*, CO.city
        FROM
            user_office_profile UOP
                JOIN
            company_office CO ON CO.id = UOP.office_id
        WHERE
            user_id = ? ORDER BY UOP.isPrimaryOffice DESC;`,
        values: [req.params.user_id],
      }, cb);
    }],
    user_preferences: ['validate', (results, cb) => {
      qry.query({
        text: `SELECT 
          *
          FROM
          user_preference
          WHERE
          user_id = ?;`,
        values: [req.params.user_id],
      }, cb);
    }],
    notification_preferences: ['validate', (results, cb) => {
      qry.query({
        text: `SELECT 
        *
    FROM
        user_company_notification_link
    WHERE
        user_id = ?;`,
        values: [req.params.user_id],
      }, passerror(cb, r => cb(null, {
        blocked: r.filter(c => c.status === 'BLOCKED').map(({ company_id }) => company_id),
        allowed: r.filter(c => c.status === 'ALLOWED').map(({ company_id }) => company_id),
      })));
    }],
    results: ['userInfo', 'officeProfile', 'user_preferences', 'notification_preferences', (results, cb) => {
      const {
        userInfo, officeProfile, user_preferences, notification_preferences,
      } = results;
      return cb(null, {
        user_info: _.get(userInfo, '0', {}),
        office_profile: _.get(officeProfile, '0', {}),
        allLinkedOffices: officeProfile,
        user_preferences: _.get(user_preferences, '0', {}),
        notification_preferences,
      });
    }],
  }, passerror(next, ({ results }) => res.json(results)));
};

const updateUserDetail = db => (req, res, next) => {
  const qry = new QueryHelper(db);

  Async.auto({
    validate: cb => Joi.validate({ ...req.body, ...req.params }, update_profile, cb),

    update_userInfo: ['validate', (results, cb) => {
      const { user_info } = results.validate;
      qry.update({
        tableName: tables.USER,
        values: [user_info, 'id', req.params.user_id],
      }, cb);
    }],

    update_user_profile: ['validate', (results, cb) => {
      const { office_profile } = results.validate;
      office_profile.work_performed = JSON.stringify(office_profile.work_performed);
      qry.update({
        tableName: tables.USER_OFFICE_PROFILE,
        values: [office_profile, 'user_id', req.params.user_id],
      }, cb);
    }],
  }, passerror(next, () => res.send('ok')));
};

const changePassword = db => (req, res, next) => {
  const qry = new QueryHelper(db);
  const { userInfo } = res.locals;

  Async.auto({
    validate: (cb) => {
      const validtaionSchema = {
        password: Joi.string().required().trim(),
        newPassword: Joi.string().required().trim(),
      };
      Joi.validate(req.body, validtaionSchema, cb);
    },

    get: ['validate', (results, cb) => {
      const query = {
        text: 'SELECT * FROM user where id=?;',
        values: [userInfo.id],
      };
      qry.query(query, cb);
    }],

    user: ['get', (results, cb) => {
      const { get } = results;
      if (get.length === 0) {
        return cb(Boom.badRequest('User is not registered..'));
      }
      const user_info = get[0];
      return cb(null, user_info);
    }],

    match_password: ['user', (results, cb) => {
      Bcrypt.compare(results.validate.password, results.user.password, passerror(cb, (match) => {
        if (!match) {
          return cb(Boom.badRequest('Incorrect Password..'));
        }
        return cb();
      }));
    }],

    newPassword: ['match_password', (results, cb) => Bcrypt.hash(results.validate.newPassword, Config.get('saltRound'), cb)],

    update_password: ['newPassword', (results, cb) => {
      qry.update({
        tableName: tables.USER,
        values: [{
          password: results.newPassword,
        }, 'id', userInfo.id],
      }, cb);
    }],
  }, passerror(next, () => res.send('ok')));
};

const changePreference = db => (req, res, next) => {
  const qry = new QueryHelper(db);
  const { userInfo } = res.locals;

  Async.auto({
    validate: (cb) => {
      const validtaionSchema = {
        notification_preference: Joi.string().optional().valid(['ALL', 'BLOCKED', 'ALLOWED']),
        start_page: Joi.string().optional().valid(['OM', 'QM', 'PM']),
        tz: Joi.string().optional().trim(),
      };
      Joi.validate(req.body, validtaionSchema, cb);
    },

    update_preference: ['validate', (results, cb) => {
      qry.update({
        tableName: tables.USER_PREFERENCE,
        values: [results.validate, 'user_id', userInfo.id],
      }, cb);
    }],
  }, passerror(next, () => res.send('ok')));
};


const changeNotificationPreference = db => (req, res, next) => {
  const qry = new QueryHelper(db);
  const { userInfo } = res.locals;

  Async.auto({
    validate: (cb) => {
      const validtaionSchema = {
        blocked: Joi.array().items(Joi.number()).optional().default([]),
        allowed: Joi.array().items(Joi.number()).optional().default([]),
      };
      Joi.validate(req.body, validtaionSchema, cb);
    },

    delete_old_preferennce: ['validate', (results, cb) => {
      qry.query({
        text: 'DELETE FROM user_company_notification_link where ??=?',
        values: ['user_id', userInfo.id],
      }, cb);
    }],

    add_new_preferennce: ['delete_old_preferennce', (results, cb) => {
      const { validate } = results;
      const values = [];
      _.forEach(validate.blocked, (v) => {
        values.push({
          company_id: v,
          user_id: userInfo.id,
          status: 'BLOCKED',
        });
      });
      _.forEach(validate.allowed, (v) => {
        values.push({
          company_id: v,
          user_id: userInfo.id,
          status: 'ALLOWED',
        });
      });
      qry.bulkInsert({
        tableName: 'user_company_notification_link',
        values,
      }, cb);
    }],
  }, passerror(next, () => res.send('ok')));
};

const changePrimaryOffice = db => (req, res, next) => {
  const qry = new QueryHelper(db);
  const { userInfo } = res.locals;

  Async.auto({
    remove: (cb) => {
      const query = {
        text: 'UPDATE user_office_profile set isPrimaryOffice=false WHERE user_id=?',
        values: [userInfo.id],
      };
      qry.query(query, cb);
    },
    add: ['remove', (results, cb) => {
      const query = {
        text: 'UPDATE user_office_profile set isPrimaryOffice=true WHERE user_id=? AND office_id=?',
        values: [userInfo.id, req.body.office_id],
      };
      qry.query(query, cb);
    }],
  }, passerror(next, () => res.send('ok')));
};

module.exports = {
  getUserDetail,
  updateUserDetail,
  changePassword,
  changePreference,
  changeNotificationPreference,
  changePrimaryOffice,
};
