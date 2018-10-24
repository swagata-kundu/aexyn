import Async from 'async';
import Boom from 'boom';
import passerror from 'passerror';
import QryHelper from '../../db/Query';

module.exports = db => (req, res, next) => {
  const { userInfo } = res.locals;
  const qry = new QryHelper(db);
  Async.auto({
    questionSet: (cb) => {
      qry.query({
        text: `SELECT 
                *
            FROM
                question_set
            WHERE
                company_id = ? AND isDeleted = FALSE
            ORDER BY created DESC
            LIMIT 1;`,
        values: [userInfo.company_id],
      }, passerror(cb, (results) => {
        if (!results.length) {
          return cb(Boom.internal('Questionier not found'));
        }
        const { id } = results[0];
        return cb(null, id);
      }));
    },
    questions: ['questionSet', (results, cb) => {
      const { questionSet } = results;
      qry.query({
        text: `SELECT Q.*,QT.type FROM questions Q JOIN question_types QT ON Q.question_type=QT.id 
          WHERE Q.isDeleted=false AND Q.question_set_id=?
          ORDER BY Q.section ASC,Q.id ASC;`,
        values: [questionSet],
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
