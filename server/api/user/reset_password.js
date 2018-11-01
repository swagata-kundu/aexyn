import Joi from 'joi';
import Async from 'async';
import Boom from 'boom';
import config from 'config';
import passerror from 'passerror';
import Bcrypt from 'bcrypt';
import { v1 } from 'uuid';
import Query from '../../db/Query';
import { tables } from '../../db';
import mailNotifier from '../../common/mailnotifier';


const createResetLink = db => (req, res) => {
  const validtaionSchema = {
    email: Joi.string().email().required().trim(),
  };
  const uid = v1();
  const qry = new Query(db);
  Async.auto({
    validate: (cb) => {
      Joi.validate(req.body, validtaionSchema, cb);
    },
    check: ['validate', (results, cb) => {
      qry.query({
        text: 'SELECT * FROM user where email=?;',
        values: [results.validate.email],
      }, cb);
    }],
    verify: ['check', (results, cb) => {
      const { check } = results;
      if (check.length === 0) {
        return cb(Boom.notFound('User not found'));
      }
      return cb(null);
    }],
    deleteOldLink: ['verify', (results, cb) => {
      qry.query({
        text: 'DELETE FROM user_reset_password where ??=?',
        values: ['email', results.validate.email],
      }, cb);
    }],
    add: ['deleteOldLink', (results, cb) => {
      qry.insert({
        tableName: tables.USER_RESET_PASSWORD,
        values: {
          email: results.validate.email,
          hash: uid,
        },
      }, cb);
    }],
    mail: ['add', (results, cb) => {
      const { email } = results.validate;
      const link = `${config.get('host')}reset-password/${email}/${uid}`;
      mailNotifier.sendResetPassword({
        to: email,
        link,
      }, () => {});
      return cb();
    }],
  }, () => {
    res.send('ok');
  });
};

const resetPassword = db => (req, res, next) => {
  const validtaionSchema = {
    hash: Joi.string().required().trim(),
    newPassword: Joi.string().required().trim(),
  };

  let verification_row;

  const qry = new Query(db);
  Async.auto({
    validate: (cb) => {
      Joi.validate(req.body, validtaionSchema, cb);
    },
    check: ['validate', (results, cb) => {
      qry.query({
        text: 'SELECT * FROM user_reset_password where hash=?;',
        values: [results.validate.hash],
      }, cb);
    }],
    password: ['check', (results, cb) => Bcrypt.hash(results.validate.newPassword, config.get('saltRound'), cb)],
    verify: ['password', (results, cb) => {
      const { check } = results;
      if (check.length === 0) {
        return cb(Boom.unauthorized('Invalid Link'));
      }
      const { id, email } = check[0];
      verification_row = id;
      qry.query({
        text: 'UPDATE ?? SET ? WHERE ??=?;',
        values: [tables.USER, { password: results.password }, 'email', email],
      }, cb);
    }],
    deleteLink: ['verify', (results, cb) => {
      qry.query({
        text: 'DELETE FROM user_reset_password where ??=?',
        values: ['id', verification_row],
      }, cb);
    }],
  }, passerror(next, () => {
    res.send('ok');
  }));
};


module.exports = {
  createResetLink,
  resetPassword,
};
