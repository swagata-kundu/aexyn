import Async from 'async';
import Joi from 'joi';
import Boom from 'boom';
import passerror from 'passerror';

import Query from '../../db/Query';
import { USER_OFFICE_PROFILE } from '../../db/tables';


export default function handler(db) {
  return (req, res, next) => {
    const qry = new Query(db);

    Async.auto({
      validate: cb => Joi.validate(req.body, {
        id: Joi.number().required(),
        office_id: Joi.number().required(),
        technical_lead: Joi.bool().required(),
      }, cb),

      check_current_leads: ['validate', (results, cb) => {
        const query = {
          text: `SELECT 
            COUNT(*) AS tl
        FROM
            user_office_profile
        WHERE
            technical_lead = TRUE AND office_id = ?;`,
          values: [req.body.office_id],
        };
        qry.query(query, cb);
      }],
      change_tl: ['check_current_leads', (results, cb) => {
        const { check_current_leads } = results;
        const tl_count = check_current_leads[0].tl;
        const { technical_lead } = req.body;
        if (!technical_lead && tl_count === 1) {
          return cb(Boom.badRequest('Atleast one team lead is necessary'));
        }
        return qry.update({
          tableName: USER_OFFICE_PROFILE,
          values: [{
            technical_lead,
          }, 'id', req.body.id],
        }, cb);
      }],
    }, passerror(next, () => res.send('ok')));
  };
}
