import Joi from 'joi';

export const office_schema = {
  name: Joi.string().default('').optional(),
  address1: Joi.string().required(),
  address2: Joi.string().required(),
  city: Joi.string().required(),
  zip: Joi.string().required(),
  country_id: Joi.number().required(),
  state_id: Joi.number().required(),
  lat: Joi.optional(),
  lng: Joi.optional(),
  office_order: Joi.number().optional(),
  phone_no: Joi.string().optional(),
  fax_no: Joi.string().optional(),
};

export const company_info = {
  name: Joi.string().required(),
  labour_type: Joi.array().items(Joi.number()).default([]).optional(),
  business_type: Joi.array().items(Joi.number()).default([]).optional(),
  tagLine: Joi.string().default('').optional(),
  websiteUrl: Joi.string().default('').optional(),
  img: Joi.optional(),
};

export const company_schema = {
  company_info: Joi.object().keys(company_info),
  offices: Joi.array().items(office_schema).required(),
};
