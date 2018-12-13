import Async from 'async';
import passerror from 'passerror';
import _ from 'lodash';
import Joi from 'joi';
import {
  answers_schema,
} from './schema';
import QryHelper from '../../db/Query';
import {
  INVITATION_ANSWERS,
  QUALIFICATION_INVITES,
} from '../../db/tables';
import QA from '../../models/qualification_activity';


module.exports = db => (req, res, next) => {
  const qry = new QryHelper(db);
  const { userInfo } = res.locals;
  const qa = new QA(qry);

  Async.auto({
    validate: (cb) => {
      Joi.validate(req.body, answers_schema, cb);
    },
    save: ['validate', (results, cb) => {
      const {
        answers,
        invitation_id,
      } = results.validate;
      const inserts = [];
      _.forEach(answers, (a) => {
        if (!a.answerId) {
          let answer = null;
          try {
            answer = a.answer ? JSON.stringify(a.answer) : null;
          } catch (error) {
            answer = null;
          }
          inserts.push({
            invitation_id,
            question_id: a.question_id,
            answer,
          });
        }
      });
      if (!inserts.length) {
        return cb();
      }
      return qry.bulkInsert({
        tableName: INVITATION_ANSWERS,
        values: inserts,
      }, cb);
    }],
    update: ['save', (results, cb) => {
      const {
        answers,
      } = results.validate;
      const updates = _.filter(answers, a => !!a.answerId);
      if (!updates.length) {
        return cb();
      }
      return Async.forEachLimit(updates, 3, (u, cb2) => {
        let answer = null;
        try {
          answer = u.answer ? JSON.stringify(u.answer) : null;
        } catch (error) {
          answer = null;
        }
        return qry.update({
          tableName: INVITATION_ANSWERS,
          values: [{
            answer,
          }, 'id', u.answerId],
        }, cb2);
      }, cb);
    }],
    update_qset: ['validate', (results, cb) => {
      let values = {};
      if (req.body.isSubmit) {
        values = {
          status: 'SUBMITTED',
          isDraft: false,
          date_submitted: new Date(),
          submitted_by: userInfo.id,
        };
      } else {
        values = {
          status: 'IN_PROGRESS',
          isDraft: true,
          date_edited: new Date(),
          edited_by: userInfo.id,
        };
      }
      qa.add({
        invitation_id: results.validate.invitation_id,
        user_id: userInfo.id,
        activity_type: 'ANSWER',
        activity_status: req.body.isSubmit ? 'SUBMITTED' : 'IN_PROGRESS',
      }, () => {});

      return qry.update({
        tableName: QUALIFICATION_INVITES,
        values: [values, 'id', results.validate.invitation_id],
      }, cb);
    }],
  }, passerror(next, () => res.send('ok')));
};
