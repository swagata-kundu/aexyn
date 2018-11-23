import Joi from 'joi';
import Async from 'async';
import passerror from 'passerror';
import _ from 'lodash';
import Query from '../../db/Query';
import {
  note,
} from './schema';
import {
  INVITATION_NOTES,
} from '../../db/tables';


const getNotes = db => (req, res, next) => {
  const qry = new Query(db);
  const query = {
    text: `SELECT 
    QE.*, USERS.first_name, USERS.last_name, USERS.pic
    FROM
    qualification_reviewers QE
        JOIN
    user USERS ON QE.user_id = USERS.id
    WHERE QE.invitation_id=?;`,
    values: [req.params.invitation_id],
  };
  qry.query(query, passerror(next, result => res.json(result)));
};

const addNotes = db => (req, res, next) => {
  const qry = new Query(db);
  Async.auto({
    validate: cb => Joi.validate(req.body, note, cb),
    add: ['validate', (results, cb) => {
      qry.insert({
        tableName: INVITATION_NOTES,
        values: results.validate,
      }, cb);
    }],
  }, passerror(next, () => res.send('ok')));
};

const deleteNote = db => (req, res, next) => {
  const qry = new Query(db);
  qry.delete({
    tableName: INVITATION_NOTES,
    id: req.params.note_id,
  }, passerror(next, () => res.send('ok')));
};

module.exports = {
  getNotes,
  addNotes,
  deleteNote,
};
