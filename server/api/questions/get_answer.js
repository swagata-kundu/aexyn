import Async from 'async';
import passerror from 'passerror';
import _ from 'lodash';
import QryHelper from '../../db/Query';


module.exports = db => (req, res, next) => {
  const qry = new QryHelper(db);
  Async.auto({
    invitation: (cb) => {
      const query = {
        text: 'CALL sp_invitaion_status_mfs(?);',
        values: [req.params.invitation_id],
      };
      qry.query(query, cb);
    },

    questions: ['invitation', (results, cb) => {
      const query = {
        text: `SELECT 
        Q.*,
        QT.name AS type_name,
        QT.type,
        QA.answer,
        QA.id AS answerId
        FROM
            questions Q
                JOIN
            qualification_invites QI ON Q.question_set_id = QI.qset_id
                JOIN
            question_types QT ON Q.question_type = QT.id
                LEFT JOIN
            qualification_answers QA ON QA.question_id = Q.id
        WHERE
            QI.id = ?
            AND Q.isIncluded=true
        ORDER BY Q.section ASC , Q.id ASC;`,
        values: [req.params.invitation_id],
      };
      qry.query(query, cb);
    }],


  }, passerror(next, (results) => {
    const { questions, invitation } = results;
    const grouped_questions = {};
    questions.forEach((q) => {
      const { section } = q;
      if (!grouped_questions[section]) {
        grouped_questions[section] = [];
      }
      grouped_questions[section].push(q);
    });
    return res.json({
      detail: _.get(invitation, '[0][0]', {}),
      questions: grouped_questions,
      invitee: _.get(invitation, '[1]', []),
    });
  }));
};
