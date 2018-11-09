import Bcrypt from 'bcrypt';
import config from 'config';
import Async from 'async';
import passerror from 'passerror';
import Boom from 'boom';
import { tables } from '../db';
import mailNotifier from '../common/mailnotifier';

export default class User {
  constructor(con) {
    this.con = con;
  }

  sendAccountVerificationEmail=({ user_id, email }, done) => {
    Async.auto({
      link: (cb) => {
        const text = `${user_id}-${email}-${Date.now()}`;
        Bcrypt.hash(text, config.get('saltRound'), (err, hash) => {
          if (err) {
            return cb(err);
          }
          const link = `${config.get('host')}api/user/verify-account/${hash}`;
          return cb(null, { link, hash });
        });
      },
      addInDb: ['link', (results, cb) => {
        const values = {
          user_id,
          email,
          hash: results.link.hash,
        };
        this.con.insert({ tableName: tables.USER_VERIFY_EMAIL, values }, cb);
      }],
      sendMail: ['addInDb', (results, cb) => {
        mailNotifier.sendVerificationMail({
          to: email,
          text: results.link.link,
        }, cb);
      }],
    }, done);
  }

  getUserInfo=(user_id, done) => {
    const text = `SELECT 
    U.*,
    PACKAGE.package_id,
    C.id AS company_id
    FROM
    user U
    LEFT JOIN user_office_profile OP ON U.id = OP.user_id
    JOIN office_package PACKAGE ON PACKAGE.office_id=OP.office_id
    JOIN company_office CO ON CO.id = OP.office_id
    JOIN company C ON CO.company_id= C.id
    WHERE OP.isPrimaryOffice=true
    AND U.id=?`;
    return this.con.query({ text, values: [user_id] }, done);
  }

  setUserCookie=(user_id, request, response, next) => {
    this.getUserInfo(user_id, passerror(next, (results) => {
      if (results.length === 0) {
        return next(Boom.unauthorized('User not found'));
      }
      request.session.user_id = user_id;
      return response.send('ok');
    }));
  }
}
