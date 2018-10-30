import Async from 'async';
import Joi from 'joi';
import _ from 'lodash';
import passerror from 'passerror';
import Company from '../../models/company';
import Transaction from '../../db/Transaction';
import Query from '../../db/Query';
import { update_office } from './schema';

const getCompanyOffices = db => (req, res, next) => {
  const { userInfo } = res.locals;
  const { company_id } = userInfo;
  const qry = new Query(db);
  const company = new Company(qry);
  return company.getCompanyOffices({ company_id }, passerror(next, result => res.json(result)));
};
const getOfficeEmployees = db => (req, res, next) => {
  const qry = new Query(db);
  const company = new Company(qry);
  const { office_id } = req.params;
  return company.getOfficeEmployees({ office_id }, passerror(next, result => res.json(result)));
};

const getOfficeInfo = db => (req, res, next) => {
  const qry = new Query(db);
  const company = new Company(qry);
  const { office_id } = req.params;
  return company.getOfficeInfo({ office_id }, passerror(next, result => res.json(result)));
};

const updateOffice = db => (req, res, next) => {
  const qry = new Query(db);
  const company = new Company(qry);
  Async.auto({
    validate: cb => Joi.validate(req.body, update_office, cb),
    update: ['validate', (results, cb) => company.updateOffice({ office_id: results.validate.office_id, data: results.validate.office }, cb)],
  }, passerror(next, () => res.send('ok')));
};

module.exports = {
  getCompanyOffices,
  getOfficeEmployees,
  getOfficeInfo,
  updateOffice,
};
