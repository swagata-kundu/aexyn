import Joi from 'joi';
import Async from 'async';
import passerror from 'passerror';
import Query from '../../db/Query';
import {
  invitation_status_save, invitation_status,
} from './schema';
import QA from '../../models/qualification_activity';
import {

  QUALIFICATION_INVITES,
} from '../../db/tables';

const setInvitationStatus = db => (req, res, next) => {
  const qry = new Query(db);
  const { userInfo } = res.locals;
  const qa = new QA(qry);


  Async.auto({
    validate: cb => Joi.validate(req.body, invitation_status, cb),
    update: ['validate', (results, cb) => {
      qa.add({
        invitation_id: results.validate.invitation_id,
        user_id: userInfo.id,
        activity_type: 'INVITATION',
        activity_status: results.validate.status,
      }, () => {});
      const values = { ...results.validate };

      delete values.invitation_id;

      return qry.update({
        tableName: QUALIFICATION_INVITES,
        values: [values, 'id', results.validate.invitation_id],
      }, cb);
    }],
  }, passerror(next, () => res.send('ok')));
};

const saveInvitationStatus = db => (req, res, next) => {
  const qry = new Query(db);
  const { userInfo } = res.locals;
  const qa = new QA(qry);


  Async.auto({
    validate: cb => Joi.validate(req.body, invitation_status_save, cb),
    update: ['validate', (results, cb) => {
      qa.add({
        invitation_id: results.validate.invitation_id,
        user_id: userInfo.id,
        activity_type: 'INVITATION',
        activity_status: results.validate.status,
      }, () => {});
      const values = { ...results.validate };

      delete values.tags;
      delete values.invitation_id;

      return qry.update({
        tableName: QUALIFICATION_INVITES,
        values: [values, 'id', results.validate.invitation_id],
      }, cb);
    }],
  }, passerror(next, () => res.send('ok')));
};

module.exports = {
  setInvitationStatus,
  saveInvitationStatus,
};
