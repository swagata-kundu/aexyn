import Joi from 'joi';
import Async from 'async';
import passerror from 'passerror';
import _ from 'lodash';
import Query from '../../db/Query';
import {
  file,
} from './schema';
import {
  INVITATION_FILES,
} from '../../db/tables';


const getFiles = db => (req, res, next) => {
  const qry = new Query(db);
  const query = {
    text: `SELECT 
    QE.*, USERS.first_name, USERS.last_name, USERS.pic
    FROM
    qualification_files QE
        JOIN
    user USERS ON QE.user_id = USERS.id
    WHERE QE.invitation_id=?;`,
    values: [req.params.invitation_id],
  };
  qry.query(query, passerror(next, result => res.json(result)));
};

const addFiles = db => (req, res, next) => {
  const qry = new Query(db);
  Async.auto({
    validate: cb => Joi.validate(req.body, file, cb),
    add: ['validate', (results, cb) => {
      qry.insert({
        tableName: INVITATION_FILES,
        values: results.validate,
      }, cb);
    }],
  }, passerror(next, () => res.send('ok')));
};

const deleteFiles = db => (req, res, next) => {
  const qry = new Query(db);
  qry.delete({
    tableName: INVITATION_FILES,
    id: req.params.note_id,
  }, passerror(next, () => res.send('ok')));
};

module.exports = {
  getFiles,
  addFiles,
  deleteFiles,
};
