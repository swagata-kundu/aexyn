import Joi from 'joi';
import Async from 'async';
import passerror from 'passerror';
import boom from 'boom';
import Query from '../../db/Query';
import {
  reviewer, review_status,
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
    checkDuplicate: ['validate', (results, cb) => {
      const query = {
        text: `SELECT 
        *
        FROM
        qualification_reviewers QE
        WHERE QE.invitation_id=?
        AND QE.user_id=?;`,
        values: [req.body.invitation_id, req.body.user_id],
      };
      qry.query(query, passerror(cb, (r) => {
        if (r.length) {
          return cb(boom.badRequest('Reviewer Already added'));
        }
        return cb();
      }));
    }],
    add: ['checkDuplicate', (results, cb) => {
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

const setReviewStatus = db => (req, res, next) => {
  Async.series([
    (cb) => {
      Joi.validate(req.body, review_status, cb);
    },
    (cb) => {
      const qry = new Query(db);
      const { status, user_id, invitation_id } = req.body;
      qry.query({
        text: 'update qualification_reviewers set status=? where invitation_id=? AND user_id=?;',
        values: [status, user_id, invitation_id],
      }, cb);
    },
  ], passerror(next, () => res.send('ok')));
};

module.exports = {
  getReviewers,
  addReviewers,
  deleteReviewer,
  setReviewStatus,
};
