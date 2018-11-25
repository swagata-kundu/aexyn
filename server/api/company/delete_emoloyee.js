import Async from 'async';
import Joi from 'joi';
import passerror from 'passerror';
import Boom from 'boom';
import Query from '../../db/Query';
import { USER } from '../../db/tables';


export default function handler(db) {
  return (req, res, next) => {
    const qry = new Query(db);
    const {
      userInfo,
    } = res.locals;
    Async.auto({
      validate: cb => Joi.validate(req.body,
        {
          user_id: Joi.number().required(),
          office_id: Joi.number().required(),
        }, cb),

      count_user: ['validate', (results, cb) => {
        const query = {
          text: 'SELECT count(*) as user_count FROM user_office_profile WHERE user_id=?;',
          values: [req.body.user_id],
        };
        qry.query(query, cb);
      }],
      delete_from_office: ['count_user', (results, cb) => {
        const { user_id, office_id } = req.body;
        const query = {
          text: 'delete from user_office_profile where user_id=? AND office_id=?;',
          values: [user_id, office_id],
        };
        qry.query(query, cb);
      }],
      delete_user: ['delete_from_office', (results, cb) => {
        const { count_user } = results;
        const count = count_user[0].user_count;
        if (count > 1) {
          return cb();
        }
        const { user_id } = req.body;
        if (user_id === userInfo.id) {
          return cb(Boom.badRequest('You can not delete yur self'));
        }
        return qry.delete({
          tableName: USER,
          id: user_id,
        }, cb);
      }],
    }, passerror(next, () => res.send('ok')));
  };
}
