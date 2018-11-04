import Joi from 'joi';

export const search_company_schema = {
  tags: Joi.array().items(Joi.string()).optional().default([]),
  locations: Joi.array().items(Joi.string()).optional().default([]),
  status: Joi.array().items(Joi.string()).optional().default([]),
  workPerformed: Joi.array().items(Joi.number()).optional().default([]),
  labours: Joi.array().items(Joi.number()).optional().default([]),
  searchText: Joi.string().max(100).default('').trim(),
};

export const send_invite = {
  emails: Joi.array().items(Joi.string().email()).required(),
};
