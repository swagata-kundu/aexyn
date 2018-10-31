import Joi from 'joi';

export const question = {
  question_type: Joi.number().required(),
  text: Joi.string().required(),
  isDefault: Joi.boolean().required(),
  isRequired: Joi.boolean().required(),
  isIncluded: Joi.boolean().optional(),
  isDisabled: Joi.boolean().optional(),
};

export const qset = {
  CP: Joi.array().items(question).required(),
  CL: Joi.array().items(question).required(),
  HS: Joi.array().items(question).required(),
  IS: Joi.array().items(question).required(),
  FIN: Joi.array().items(question).required(),
  WEX: Joi.array().items(question).required(),
  LGL: Joi.array().items(question).required(),
  SIG: Joi.array().items(question).required(),
  OTH: Joi.array().items(question).required(),
};

export const create_Question = {
  questions: Joi.object().keys(qset).required(),
  questionSet: Joi.number().required(),
  opening_statement: Joi.string().optional(),
};
