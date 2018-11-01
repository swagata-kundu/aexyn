import passerror from 'passerror';
import Async from 'async';
import boom from 'boom';
import _ from 'lodash';
import { tables } from '../db';

export default class Question {
  constructor(con) {
    this.con = con;
  }

    deleteQuestionSet=(id, done) => {
      this.con.query({
        text: 'UPDATE ?? SET ? WHERE ??=?;',
        values: [tables.QUESTION_SET, { isDeleted: true }, 'id', id],
      }, passerror(done, (results) => {
        if (results.affectedRows === 0) {
          return done(boom.notFound('Old question set not found'));
        }
        return done();
      }));
    }

    addQuestionSet=(info, done) => this.con.insert({ tableName: tables.QUESTION_SET, values: { ...info } }, done)

    addQuestions=({ questions, question_set_id }, done) => {
      const values = [];
      _.forEach(questions, (q, section) => {
        q.forEach((q1) => {
          values.push({ ...q1, section, question_set_id });
        });
      });
      this.con.bulkInsert({ tableName: tables.QUESTION, values }, done);
    }

    getQuestionSet=(company_id, done) => {
      this.con.query({
        text: `SELECT 
                *
            FROM
                question_set
            WHERE
                company_id = ? AND isDeleted = FALSE
            ORDER BY created DESC
            LIMIT 1;`,
        values: [company_id],
      }, passerror(done, (results) => {
        if (!results.length) {
          return done(boom.internal('Questionier not found'));
        }
        return done(null, results[0]);
      }));
    }
}
