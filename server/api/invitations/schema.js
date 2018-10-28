import Joi from 'joi';

export const search_company_schema = {
  tags: Joi.array().items(Joi.string()).optional(),
  locations: Joi.array().items(Joi.string()).optional(),
  status: Joi.array().items(Joi.string()).optional(),
  workPerformed: Joi.array().items(Joi.string()).optional(),
  labours: Joi.array().items(Joi.string()).optional(),
  searchText: Joi.string().max(100).optional().trim(),
};
