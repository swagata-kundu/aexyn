import Joi from 'joi';
import Async from 'async';
import passerror from 'passerror';
import _ from 'lodash';
import Query from '../../db/Query';
import {
  SUPPLIER_INVITES,
  GET_INVITE_INFO,
} from '../../db/sp';
import {
  mfs_list,
} from './schema';

const fetchInviteInformations = (invite, qry, done) => {
  qry.query({
    text: 'CALL ?? (?,?,?);',
    values: [GET_INVITE_INFO, invite.id, invite.qset_id, invite.invited_company_id],
  }, passerror(done, r => done(null, {
    ...invite,
    sentTo: r[0],
    reviewers: r[1],
    isCompanyLinked: true,
  })));
};

const getSupplierInvites = db => (req, res, next) => {
  const qry = new Query(db);

  Async.auto({
    validate: cb => Joi.validate(req.query, mfs_list, cb),
    fetchList: ['validate', (results, cb) => {
      const {
        userInfo,
      } = res.locals;
      const {
        validate,
      } = results;
      const query = {
        text: 'CALL ?? (?,?,?);',
        values: [SUPPLIER_INVITES, userInfo.company_id, validate.status, validate.sort_order],
      };
      qry.query(query, cb);
    }],
    fetchInfo: ['fetchList', (results, cb) => {
      const {
        fetchList,
      } = results;
      const invites = fetchList[0];
      Async.mapLimit(invites, 2, (i, cb2) => fetchInviteInformations(i, qry, cb2), cb);
    }],
  }, passerror(next, ({
    fetchInfo,
    fetchList,
  }) => {
    const notLinkedInvites = fetchList[1] ? fetchList[1] : [];
    return res.json([...fetchInfo]);
  }));
};


module.exports = {
  getSupplierInvites,
};
