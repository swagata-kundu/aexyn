import Async from 'async';
import Joi from 'joi';
import _ from 'lodash';
import Boom from 'boom';
import passerror from 'passerror';
import { v1 } from 'uuid';

import Company from '../../models/company';
import Query from '../../db/Query';
import { USER_OFFICE_PROFILE, COMPANY_JOIN } from '../../db/tables';
import mailNotifier from '../../common/mailnotifier';


export default function handler(db) {
  return (req, res, next) => {
    const { userInfo } = res.locals;
    const qry = new Query(db);

    Async.auto({
      validate: cb => Joi.validate(req.body, {
        email: Joi.string().email(),
        office_id: Joi.number().required(),
      }, cb),
      checkExistingUser: ['validate', (result, cb) => {
        const query = {
          text: `SELECT 
            UOP.*
        FROM
            user_office_profile UOP
                JOIN
            user U ON UOP.user_id = U.id
                JOIN
            company_office CO ON UOP.office_id = CO.id
        WHERE CO.company_id=?
           AND U.email = ?;`,
          values: [userInfo.company_id, req.body.email],
        };
        qry.query(query, passerror(cb, (users) => {
          if (!users.length) {
            return cb(null, { userExists: false });
          }
          const user = _.find(users, u => u.office_id === req.body.office_id);
          if (_.isEmpty(user)) {
            return cb(null, { userExists: true, user_info: _.get(users, '[0]') });
          }
          return cb(Boom.badRequest('User Already belong to the same office'));
        }));
      }],
      sendInvite: ['checkExistingUser', (results, cb) => {
        const { checkExistingUser } = results;
        const { userExists, user_info } = checkExistingUser;
        if (!userExists) {
          return cb(null, userExists);
        }
        delete user_info.id;
        const values = {
          ...user_info,
          technical_lead: false,
          isPrimaryOffice: false,
          office_id: req.body.office_id,
        };
        return qry.insert({
          tableName: USER_OFFICE_PROFILE,
          values,
        }, passerror(cb, () => cb(null, userExists)));
      }],
      sendMail: ['sendInvite', (results, cb) => {
        const { sendInvite } = results;
        if (sendInvite) {
          mailNotifier.sendJoinOfficeEmail({ to: req.body.email, link: 'You have benn invited to join' }, () => {});
          return cb();
        }
        const hash = v1();
        qry.insert({
          tableName: COMPANY_JOIN,
          values: { hash, company_id: userInfo.company_id, office_id: req.body.office_id },
        }, passerror(cb, () => {
          const c = new Company(qry);
          mailNotifier.sendJoinOfficeEmail({ to: req.body.email, link: c.createJoinCompanyLink(hash) }, () => {});
          return cb();
        }));
      }],
    }, passerror(next, () => res.send('ok')));
  };
}
