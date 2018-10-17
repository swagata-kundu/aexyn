import Joi from 'joi';
import { company_info, office_schema } from '../company/schema';

const user_schema = {
  first_name: Joi.string().required(),
  last_name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
};

const office_profile = {
  job_title: Joi.string(),
  work_phone: Joi.string(),
  work_performed: Joi.array().items(Joi.number()),
};

export const user_account = {
  user_info: Joi.object().keys(user_schema).required(),
  company_info: Joi.object().keys(company_info).optional(),
  office: Joi.object().keys(office_schema).optional(),
  office_profile: Joi.object().keys(office_profile),
  office_id:Joi.number().optional(),
  company_id:Joi.number().optional()
};
