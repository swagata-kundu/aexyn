import Joi from 'joi';

export const add_supplier_permission = {
  user_id: Joi.number().required(),
  autoAdd: Joi.bool().required(),
  permission: Joi.string().valid('NO', 'VIEW', 'LIMITED', 'ADMIN'),
};

export const add_jungle_permission = {
  user_id: Joi.number().required(),
};

export const update_company_permission = {
  jungle_permission: Joi.string().valid('ALL', 'DESIGNATED').optional(),
  supplier_permission: Joi.string().valid('NO', 'VIEW', 'LIMITED', 'ADMIN').optional(),
};

export const update_supplier_permission = {
  supplier_permissionId: Joi.number().required(),
  autoAdd: Joi.bool().required().optional(),
  permission: Joi.string().valid('NO', 'VIEW', 'LIMITED', 'ADMIN').optional(),
};
