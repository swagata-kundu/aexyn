import Async from 'async';
import Joi from 'joi';
import _ from 'lodash';
import boom from 'boom';
import passerror from 'passerror';
import Company from '../../models/company';
import Query from '../../db/Query';
import {
  office_schema,
  company_info,
} from './schema';

const getCompanyOffices = db => (req, res, next) => {
  const {
    userInfo,
  } = res.locals;
  const {
    company_id,
  } = userInfo;
  const qry = new Query(db);
  const company = new Company(qry);
  return company.getCompanyOffices({
    company_id,
  }, passerror(next, result => res.json(result)));
};
const getOfficeEmployees = db => (req, res, next) => {
  const qry = new Query(db);
  const company = new Company(qry);
  const {
    office_id,
  } = req.params;
  return company.getOfficeEmployees({
    office_id,
  }, passerror(next, result => res.json(result)));
};

const getOfficeInfo = db => (req, res, next) => {
  const qry = new Query(db);
  const company = new Company(qry);
  const {
    office_id,
  } = req.params;
  return company.getOfficeInfo({
    office_id,
  }, passerror(next, result => res.json(result)));
};

const updateOffice = db => (req, res, next) => {
  const qry = new Query(db);
  const company = new Company(qry);
  Async.auto({
    validate: cb => Joi.validate(req.body, office_schema, cb),
    update: ['validate', (results, cb) => company.updateOffice({
      office_id: req.params.office_id,
      data: results.validate,
    }, cb)],
  }, passerror(next, () => res.send('ok')));
};

const createOffice = db => (req, res, next) => {
  const qry = new Query(db);
  const company = new Company(qry);
  Async.auto({
    validate: cb => Joi.validate(req.body, office_schema, cb),
    insert: ['validate', (results, cb) => company.createCompanyOffice({
      company_id: req.params.company_id,
      ...results.validate,
    }, cb)],
  }, passerror(next, () => res.send('ok')));
};

const updateCompany = db => (req, res, next) => {
  const qry = new Query(db);
  const company = new Company(qry);
  Async.auto({
    validate: cb => Joi.validate(req.body, company_info, cb),
    update: ['validate', (results, cb) => company.updateOffice({
      company_id: req.params.company_id,
      data: results.validate,
    }, cb)],
  }, passerror(next, () => res.send('ok')));
};

const getAllCompany = db => (req, res, next) => {
  const {
    userInfo,
  } = res.locals;
  const queryHelper = new Query(db);
  queryHelper.query({
    text: `SELECT 
          id, name
      FROM
          company
      WHERE ??<>?
      ORDER BY name ASC;`,
    values: ['id', userInfo.company_id],
  }, passerror(next, result => res.json(result)));
};

const getCompanyInfo = db => (req, res, next) => {
  const qry = new Query(db);
  const company = new Company(qry);
  Async.auto({
    validate: cb => Joi.validate(req.params, {
      company_id: Joi.number().required(),
    }, cb),
    get: ['validate', (results, cb) => company.getCompanyInfo(req.params.company_id, cb)],
  }, passerror(next, (results) => {
    const info = _.get(results, ['get', '0']);
    if (!info) {
      return next(boom.notFound());
    }
    return res.json(info);
  }));
};


module.exports = {
  getCompanyInfo,
  getCompanyOffices,
  getOfficeEmployees,
  getOfficeInfo,
  updateOffice,
  createOffice,
  updateCompany,
  getAllCompany,
};
