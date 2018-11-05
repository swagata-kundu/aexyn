import Joi from 'joi';
import Async from 'async';
import passerror from 'passerror';
import boom from 'boom';
import _ from 'lodash';

import Query from '../../db/Query';
import Permission from '../../models/permission';
import { add_jungle_permission } from './schema';
import { tables } from '../../db';

const addJunglePermission = db => (req, res, next) => {
  const qry = new Query(db);

  Async.series([
    cb => Joi.validate(req.body, add_jungle_permission, cb),
    (cb) => {
      qry.query({
        text: 'SELECT * FROM user_jungle_permission where user_id=?;',
        values: [req.body.user_id],
      }, passerror(cb, (r) => {
        if (!r.length) {
          return cb(null);
        }
        return cb(boom.forbidden('Permission already set for the user'));
      }));
    },
    (cb) => {
      qry.insert({ tableName: tables.USER_JUNGLE_PERMISSION, values: req.body }, cb);
    },
  ], passerror(next, () => res.send('ok')));
};

const deleteJunglePermission = db => (req, res, next) => {
  const qry = new Query(db);
  Async.series([
    cb => Joi.validate(req.params, { id: Joi.number() }, cb),
    (cb) => {
      qry.delete({ tableName: tables.USER_JUNGLE_PERMISSION, id: req.params.id }, cb);
    },
  ], passerror(next, () => res.send('ok')));
};

module.exports = {
  addJunglePermission,
  deleteJunglePermission,
};
