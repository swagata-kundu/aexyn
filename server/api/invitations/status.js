import Joi from 'joi';
import Async from 'async';
import passerror from 'passerror';
import _ from 'lodash';

import { status } from './schema';
import Query from '../../db/Query';
import { QUALIFICATION_INVITES } from '../../db/tables';


module.exports = db => (req, res, next) => {
  Async.auto({
    validate: (cb) => {
      Joi.validate(req.body, status, cb);
    },
    update: ['validate', (results, cb) => {
      const { validate } = results;
      delete validate.invitation_id;
      const qry = new Query(db);
      qry.update({
        tableName: QUALIFICATION_INVITES,
        values: [validate, 'id', req.body.invitation_id],
      }, cb);
    }],
  }, passerror(next, () => res.send('ok')));
};
