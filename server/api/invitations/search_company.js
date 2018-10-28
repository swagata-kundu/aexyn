import Joi from 'joi';
import Async from 'async';
import passerror from 'passerror';
import { search_company_schema } from './schema';

module.exports = db => (req, res, next) => {
  Async.auto({
    validate: cb => Joi.validate(req.body, search_company_schema, cb),
    cpmpanies: ['validate', (results, cb) => {

    }],
  }, passerror(next, (results) => {

  }));
};
