import Joi from 'joi';
import Async from 'async';
import passerror from 'passerror';
import _ from 'lodash';

import { search_company_schema } from './schema';
import Query from '../../db/Query';
import { SEARCH_COMPANY_INVITATION } from '../../db/sp';

module.exports = db => (req, res, next) => {
  Async.auto({
    validate: cb => Joi.validate(req.body, search_company_schema, cb),
    cpmpanies: ['validate', (results, cb) => {
      const qry = new Query(db);
      const { userInfo } = res.locals;
      const {
        tags = [], locations = [], status = [], workPerformed = [], labours = [], searchText = '',
      } = results.validate;
      const query = {
        text: 'CALL ?? (?,?,?,?,?,?,?);',
        values: [SEARCH_COMPANY_INVITATION, userInfo.company_id, searchText, locations.toString(),
          workPerformed.toString(), tags.toString(), labours.toString(), status.toString(),
        ],
      };
      qry.query(query, passerror(cb, (result) => {
        const matches = result[0];
        const suggestions = _.isEmpty(req.body) ? [] : result[1];
        return cb(null, { matches, suggestions });
      }));
    }],
  }, passerror(next, results => res.json(results.cpmpanies)));
};
