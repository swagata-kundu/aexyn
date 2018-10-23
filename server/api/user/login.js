import Joi from 'joi';
import Async from 'async';
import Boom from 'boom';
import Bcrypt from 'bcrypt';
import QueryHelper from '../../db/QueryHelper';

module.exports = function checkEmail(db) {
  return async (req, res, next) => {
    const queryHelper = new QueryHelper(db);

    Async.auto({
      validate: (cb) => {
        const validtaionSchema = {
          email: Joi.string().email().required().trim(),
          password: Joi.string().required().trim(),
        };
        Joi.validate(req.body, validtaionSchema, cb);
      },
      get: ['validate', (results, cb) => {
        const query = {
          text: 'SELECT * FROM user where email=?;',
          values: [results.validate.email],
        };
        queryHelper.query(query, cb);
      }],
      user: ['get', (results, cb) => {
        const { get } = results;
        if (get.length === 0) {
          return cb(Boom.badRequest('User is not registered..'));
        }
        const user_info = get[0];

        // if (!user_info.verified) {
        //   return cb(Boom.badRequest('User is not verified..'));
        // }
        return cb(null, user_info);
      }],
      match_password: ['user', (results, cb) => {
        Bcrypt.compare(results.validate.password, results.user.password, (err, match) => {
          if (err) {
            return cb(err);
          }
          if (!match) {
            return cb(Boom.badRequest('Incorrect Password..'));
          }
          return cb(null);
        });
      }],
    }, (err, results) => {
      if (err) {
        return next(err);
      }
      const user_id = results.user.id;
      req.session.user_id = user_id;
      return res.send('ok');
    });
  };
};
