import Joi from 'joi';
import Async from 'async';
import Boom from 'boom';
import Query from '../../db/Query';
import { tables } from '../../db';

module.exports = function checkEmail(db) {
  return async (req, res, next) => {
    const validtaionSchema = {
      hash: Joi.string().required().trim(),
    };

    let verification_row;

    const qry = new Query(db);
    Async.auto({
      validate: (cb) => {
        Joi.validate(req.params, validtaionSchema, cb);
      },
      check: ['validate', (results, cb) => {
        qry.query({
          text: 'SELECT * FROM user_verify_email where hash=?;',
          values: [results.validate.hash],
        }, cb);
      }],
      verify: ['check', (results, cb) => {
        const { check } = results;
        if (check.length === 0) {
          return cb(Boom.unauthorized('Invalid Link'));
        }
        const { id, user_id } = check[0];
        verification_row = id;
        qry.query({
          text: 'UPDATE ?? SET ? WHERE ??=?;',
          values: [tables.USER, { verified: true }, 'id', user_id],
        }, cb);
      }],
      deleteLink: ['verify', (results, cb) => {
        qry.query({
          text: 'DELETE FROM user_verify_email where ??=?',
          values: ['id', verification_row],
        }, cb);
      }],
    }, (err) => {
      if (err) {
        return res.send('Invalid Link....');
      }
      return res.render('accout-verified');
    });
  };
};
