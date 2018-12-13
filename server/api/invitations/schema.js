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

export const mfs_list = {
  status: Joi.string().optional().default('SENT'),
  sort_order: Joi.string().optional().default('ASC'),
};

export const jungle_list = {
  status: Joi.string().optional().default('SENT'),
  sort_order: Joi.string().optional().default('ASC'),
};

export const jungle_editor = {
  status: Joi.string().optional().default('NONE'),
  user_id: Joi.number().required(),
  invitation_id: Joi.number().required(),
};

export const reviewer = {
  status: Joi.string().optional().default('NONE'),
  user_id: Joi.number().required(),
  invitation_id: Joi.number().optional().default(null),
  email_invitation_id: Joi.number().optional().default(null),
};


export const note = {
  user_id: Joi.number().required(),
  invitation_id: Joi.number().optional().default(null),
  email_invitation_id: Joi.number().optional().default(null),
  note: Joi.string().required(),
};


export const file = {
  user_id: Joi.number().required(),
  invitation_id: Joi.number().optional().default(null),
  email_invitation_id: Joi.number().optional().default(null),
  file_name: Joi.string().required(),
  url: Joi.string().required(),
};

export const status = {
  status: Joi.string().optional().default('SENT'),
  expiry_date: Joi.date(),
  total_limit: Joi.number(),
  project_limit: Joi.number(),
  summary: Joi.string(),
  invitation_id: Joi.number().required(),
};

export const review_status = {
  invitation_id: Joi.number().required(),
  user_id: Joi.number().required(),
  status: Joi.string().required(),
};

export const invitation_status_save = {
  invitation_id: Joi.number().required(),
  invited_company_id: Joi.number().required(),
  status: Joi.string(),
  expiry_date: Joi.date(),
  total_limit: Joi.number(),
  project_limit: Joi.number(),
  summary: Joi.string(),
  files: Joi.array(),
  tags: Joi.array(),
};

export const invitation_status = {
  invitation_id: Joi.number().required(),
  status: Joi.string(),
};
