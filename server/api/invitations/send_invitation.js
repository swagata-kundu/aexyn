
import Async from 'async';
import Joi from 'joi';
import passerror from 'passerror';
import Questions from '../../models/question';
import QryHelper from '../../db/Query';
import { send_invite } from './schema';
import { INVITE_USER_QUALIFICATION } from '../../db/sp';
import mailNotifier from '../../common/mailnotifier';


const sendInvitation = db => (req, res, next) => {
  const { userInfo } = res.locals;
  const qry = new QryHelper(db);
  const quest = new Questions(qry);

  Async.auto({
    validate: cb => Joi.validate(req.body, send_invite, cb),

    questionSet: ['validate', (results, cb) => quest.getQuestionSet(userInfo.company_id, cb)],

    addInvite: ['questionSet', (results, cb) => {
      const { emails = [] } = results.validate;
      const { questionSet } = results;
      Async.eachSeries(emails, (email, cb2) => {
        const query = {
          text: 'CALL ?? (?,?,?,?);',
          values: [INVITE_USER_QUALIFICATION, userInfo.company_id, questionSet.id, userInfo.id, email],
        };
        qry.query(query, cb2);
      }, cb);
    }],
    sendmail: ['addInvite', (results, cb) => {
      const { questionSet } = results;
      const { emails = [] } = results.validate;
      const link = quest.createQuestionSetShareLink(questionSet.hash);
      Async.eachLimit(emails, 2, (email, cb2) => {
        mailNotifier.sendQualificationInviteEmail({ to: email, link }, () => cb2());
      });
      return cb();
    }],
  }, passerror(next, () => res.send('ok')));
};

const getInvitationLink = db => (req, res, next) => {
  const { userInfo } = res.locals;
  const qry = new QryHelper(db);
  const quest = new Questions(qry);
  return quest.getInvitaionShareLink(userInfo.company_id, passerror(next, link => res.json({ link })));
};

module.exports = {
  sendInvitation,
  getInvitationLink,
};
