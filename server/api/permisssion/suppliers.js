import Joi from 'joi';
import Async from 'async';
import passerror from 'passerror';
import boom from 'boom';
import _ from 'lodash';

import Query from '../../db/Query';
import Permission from '../../models/permission';
import { add_supplier_permission } from './schema';
import { MFS_PERMISSION } from '../../common/constants';
import { tables } from '../../db';

const getPermissions = db => (req, res, next) => {
  const qry = new Query(db);
  const permission = new Permission(qry);
  const { company_id } = res.locals.userInfo;
  Async.auto({
    permissions: (cb) => {
      const permissions = [];
      _.forEach(MFS_PERMISSION, (v, k) => {
        permissions.push({ id: k, name: v });
      });
      return cb(null, permissions);
    },
    permissionData: (cb) => {
      permission.getUserPermission(company_id, cb);
    },
    suppliers: ['permissionData', (results, cb) => {
      const { permissionData } = results;
      const employees = permissionData.filter(u => !u.supplier_permissionId);
      const permitted_employees = permissionData.filter(u => !!u.supplier_permissionId);
      return cb(null, { employees, permitted_employees });
    }],
    jungles: ['permissionData', (results, cb) => {
      const { permissionData } = results;
      const employees = permissionData.filter(u => !u.jungle_permissionId);
      const permitted_employees = permissionData.filter(u => !!u.jungle_permissionId);
      return cb(null, { employees, permitted_employees });
    }],
    companyPermission: cb => permission.getCompanyPermission(company_id, cb),
  }, passerror(next, (results) => {
    const mod = { ...results };
    delete mod.permissionData;
    return res.json(mod);
  }));
};

const addSupplierPermission = db => (req, res, next) => {
  const qry = new Query(db);

  Async.series([
    cb => Joi.validate(req.body, add_supplier_permission, cb),
    (cb) => {
      qry.query({
        text: 'SELECT * FROM aexyn.user_mfs_permission where user_id=?;',
        values: [req.body.user_id],
      }, passerror(cb, (r) => {
        if (!r.length) {
          return cb(null);
        }
        return cb(boom.forbidden('Permission already set for the user'));
      }));
    },
    (cb) => {
      qry.insert({ tableName: tables.USER_SUPPLIERS_PERMISSION, values: req.body }, cb);
    },
  ], passerror(next, () => res.send('ok')));
};

const deleteSupplierPermission = db => (req, res, next) => {
  const qry = new Query(db);
  Async.series([
    cb => Joi.validate(req.params, { id: Joi.number() }, cb),
    (cb) => {
      qry.delete({ tableName: tables.USER_SUPPLIERS_PERMISSION, id: req.params.id }, cb);
    },
  ], passerror(next, () => res.send('ok')));
};

module.exports = {
  getPermissions,
  addSupplierPermission,
  deleteSupplierPermission,
};
