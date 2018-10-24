import Async from 'async';
import Joi from 'joi';
import Txn from '../../db/Transaction';
import Question from '../../models/question';

module.exports = db => (req, res, next) => {
  const tx = new Txn(db);
  const q = new Question(tx);
  const { userInfo } = res.locals;
  Async.auto({
    validate: cb => Joi.validate(req.body, require('./schema').create_Question, cb),
    beginTx: ['validate', (results, cb) => tx.beginTransaction(cb)],
    removeQset: ['beginTx', (results, cb) => q.deleteQuestionSet(req.body.questionSet, cb)],
    addNewQset: ['removeQset', (results, cb) => q.addQuestionSet(userInfo.company_id, cb)],
    addQuestions: ['addNewQset', (results, cb) => q.addQuestions({ questions: req.body.questions, question_set_id: results.addNewQset }, cb)],
  }, (err) => {
    if (err) {
      tx.rollbackTransaction(() => next(err));
    } else {
      tx.commitTransaction((commiterror) => {
        if (commiterror) {
          return next(commiterror);
        }
        return res.send('ok');
      });
    }
  });
};
