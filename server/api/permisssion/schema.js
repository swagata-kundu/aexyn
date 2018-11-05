import Joi from 'joi';

export const add_supplier_permission = {
  user_id: Joi.number().required(),
  autoAdd: Joi.bool().required(),
  permission: Joi.string().valid('NO', 'VIEW', 'LIMITED', 'ADMIN'),
};

export const add_jungle_permission = {
  user_id: Joi.number().required(),
};

