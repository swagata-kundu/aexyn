import Async from 'async';
import passerror from 'passerror';
import QryHelper from '../../db/Query';
import Questions from '../../models/question';

module.exports = db => (req, res, next) => {
  const { userInfo } = res.locals;
  const qry = new QryHelper(db);
  const quest = new Questions(qry);
  Async.auto({
    questionSet: cb => quest.getQuestionSet(userInfo.company_id, cb),

    questions: ['questionSet', (results, cb) => {
      const { questionSet } = results;
      qry.query({
        text: `SELECT Q.*,QT.type,QT.name AS type_name FROM questions Q JOIN question_types QT ON Q.question_type=QT.id 
          WHERE Q.isDeleted=false AND Q.question_set_id=?
          ORDER BY Q.section ASC,Q.id ASC;`,
        values: [questionSet.id],
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
