import Joi from 'joi';

export const office_schema = {
  address1: Joi.string().required(),
  address2: Joi.string().required(),
  city: Joi.string().required(),
  zip: Joi.string().required(),
  country_id: Joi.number().optional(),
  state_id: Joi.number().required(),
  lat: Joi.optional(),
  lng: Joi.optional(),
  office_order: Joi.optional(),
};

export const company_info = {
  name: Joi.string().required(),
  labour_type: Joi.array().items(Joi.number()).required(),
  img: Joi.optional(),
};

export const company_schema = {
  company_info: Joi.object().keys(company_info),
  offices: Joi.array().items(office_schema).required(),
};
