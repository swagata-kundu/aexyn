import Joi from 'joi';
import Async from 'async';
import passerror from 'passerror';
import _ from 'lodash';
import Query from '../../db/Query';
import { GET_INVITES_FROM_JUNGLE } from '../../db/sp';
import { jungle_list } from './schema';


const getInvitesFromJungle = db => (req, res, next) => {
  const qry = new Query(db);

  Async.auto({
    validate: cb => Joi.validate(req.params, jungle_list, cb),
    fetchList: ['validate', (results, cb) => {
      const { userInfo } = res.locals;
      const { validate } = results;
      const query = {
        text: 'CALL ?? (?,?,?);',
        values: [GET_INVITES_FROM_JUNGLE, userInfo.company_id, validate.status, validate.sort_order,
        ],
      };
      qry.query(query, cb);
    }],
  }, passerror(next, ({ fetchList }) => res.json(fetchList)));
};

module.exports = { getInvitesFromJungle };
