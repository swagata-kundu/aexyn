import Joi from 'joi';
import Async from 'async';
import passerror from 'passerror';
import _ from 'lodash';
import Query from '../../db/Query';
import {
  reviewer,
} from './schema';
import {
  INVITATION_REVIEWERS,
} from '../../db/tables';


const getReviewers = db => (req, res, next) => {
  const qry = new Query(db);
  const query = {
    text: `SELECT 
    QE.*, USERS.first_name, USERS.last_name, USERS.pic
    FROM
    qualification_reviewers QE
        JOIN
    user USERS ON QE.user_id = USERS.id
    WHERE QE.invitation_id=?;`,
    values: [req.params.invitation_id],
  };
  qry.query(query, passerror(next, result => res.json(result)));
};

const addReviewers = db => (req, res, next) => {
  const qry = new Query(db);
  Async.auto({
    validate: cb => Joi.validate(req.body, reviewer, cb),
    add: ['validate', (results, cb) => {
      qry.insert({
        tableName: INVITATION_REVIEWERS,
        values: results.validate,
      }, cb);
    }],
  }, passerror(next, () => res.send('ok')));
};

const deleteReviewer = db => (req, res, next) => {
  const qry = new Query(db);
  qry.delete({
    tableName: INVITATION_REVIEWERS,
    id: req.params.reviewer_id,
  }, passerror(next, () => res.send('ok')));
};

module.exports = {
  getReviewers,
  addReviewers,
  deleteReviewer,
};
