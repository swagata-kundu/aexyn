import Async from 'async';
import passerror from 'passerror';
import QryHelper from '../../db/Query';
import Questions from '../../models/question';

const knex = require('knex')({ client: 'mysql' });

module.exports = db => (req, res, next) => {
  const { userInfo } = res.locals;
  const qry = new QryHelper(db);
  const quest = new Questions(qry);
  Async.auto({
    questionSet: cb => quest.getQuestionSet(userInfo.company_id, cb),

    questions: ['questionSet', (results, cb) => {
      const { questionSet } = results;
      const where = {
        'questions.isDeleted': false,
        'questions.question_set_id': questionSet.id,
      };
      if (req.query.include) {
        where['questions.isIncluded'] = true;
      }
      const q = knex('questions').select('questions.*', 'question_types.name AS type_name', 'question_types.type')
        .innerJoin('question_types', 'questions.question_type', 'question_types.id')
        .where(where)
        .orderBy('questions.section', 'ASC')
        .orderBy('questions.id', 'ASC');
      qry.query({
        text: q.toQuery(),
      }, cb);
    }],

    questionTypes: cb => qry.query({ text: 'SELECT * FROM question_types;' }, cb),


  }, passerror(next, (results) => {
    const { questions, questionSet, questionTypes } = results;
    const grouped_questions = {};
    questions.forEach((q) => {
      const { section } = q;
      if (!grouped_questions[section]) {
        grouped_questions[section] = [];
      }
      grouped_questions[section].push(q);
    });
    return res.json({ questionSet, questions: grouped_questions, questionTypes });
  }));
};
