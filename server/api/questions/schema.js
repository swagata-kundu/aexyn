import Joi from 'joi';

export const question = {
  question_type: Joi.number().required(),
  text: Joi.string().required(),
  isDefault: Joi.boolean().default(false),
  isRequired: Joi.boolean().required(),
  isIncluded: Joi.boolean().optional().default(false),
  isDisabled: Joi.boolean().optional().default(false),
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
  opening_statement: Joi.string().optional().default(''),
};

export const answers_schema = {
  invitation_id: Joi.number().required(),
  answers: Joi.array().items(Joi.object({
    answerId: Joi.number().optional().default(0),
    answer: Joi.any().default(null),
    question_id: Joi.number().required(),
  })),
};
