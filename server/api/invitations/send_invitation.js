
import Async from 'async';
import Joi from 'joi';
import passerror from 'passerror';
import _ from 'lodash';
import Questions from '../../models/question';
import QryHelper from '../../db/Query';
import { send_invite } from './schema';
import { INVITE_USER_QUALIFICATION } from '../../db/sp';

module.exports = db => (req, res, next) => {
  const { userInfo } = res.locals;
  const qry = new QryHelper(db);
  const quest = new Questions(qry);

  Async.auto({
    validate: cb => Joi.validate(req.body, send_invite, cb),

    questionSet: ['validate', cb => quest.getQuestionSet(userInfo.company_id, cb)],

    sendInvite: ['questionSet', (results, cb) => {
      const { emails = [] } = results.validate;
      const {questionSet}=results;
      Async.eachSeries(emails, (email, cb2) => {
        const query = {
          text: 'CALL ?? (?,?,?,?,?,?,?);',
          values: []
 };
      });
    }],
  }, passerror(next, () => res.send('ok')));
};
