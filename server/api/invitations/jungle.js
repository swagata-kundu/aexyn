import Joi from 'joi';
import Async from 'async';
import passerror from 'passerror';
import _ from 'lodash';
import Query from '../../db/Query';
import { GET_INVITES_FROM_JUNGLE } from '../../db/sp';
import { INVITATION_EDITORS } from '../../db/tables';

import { jungle_list, jungle_editor } from './schema';


const getInvitesFromJungle = db => (req, res, next) => {
  const qry = new Query(db);

  Async.auto({
    validate: cb => Joi.validate(req.query, jungle_list, cb),
    fetchList: ['validate', (results, cb) => {
      const { userInfo } = res.locals;
      const { validate } = results;
      const query = {
        text: 'CALL ?? (?,?,?);',
        values: [GET_INVITES_FROM_JUNGLE, userInfo.company_id, validate.status, validate.sort_order,
        ],
      };
      qry.query(query, cb);
    }],
  }, passerror(next, ({ fetchList }) => {
    const invites = fetchList[0];
    return res.json(invites);
  }));
};

const getEditorsList = db => (req, res, next) => {
  const qry = new Query(db);
  const query = {
    text: `SELECT 
    QE.*, USERS.first_name, USERS.last_name, USERS.pic
    FROM
    qualification_editors QE
        JOIN
    user USERS ON QE.user_id = USERS.id
    WHERE QE.invitation_id=?;`,
    values: [req.params.invitation_id],
  };
  qry.query(query, passerror(next, result => res.json(result)));
};

const addEditor = db => (req, res, next) => {
  const qry = new Query(db);
  Async.auto({
    validate: cb => Joi.validate(req.body, jungle_editor, cb),
    add: ['validate', (results, cb) => {
      qry.insert({
        tableName: INVITATION_EDITORS,
        values: results.validate,
      }, cb);
    }],
  }, passerror(next, () => res.send('ok')));
};

const deleteEditor = db => (req, res, next) => {
  const qry = new Query(db);
  qry.delete({
    tableName: INVITATION_EDITORS,
    id: req.params.editor_id,
  }, passerror(next, () => res.send('ok')));
};

module.exports = {
  getInvitesFromJungle, getEditorsList, addEditor, deleteEditor,
};
