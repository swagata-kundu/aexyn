import { axios } from '../util';
import {
  QUALIFICATION_PERMISSION, MFS_REVIEWERS, MFS_NOTES, MFS_FILES,
} from '../endpoint';

export const load_company_permission_service = () => axios.get(QUALIFICATION_PERMISSION);
export const add_supplier_permission_service = values => axios.post(`${QUALIFICATION_PERMISSION}suppliers`, values);
export const add_jungle_permission_service = values => axios.post(`${QUALIFICATION_PERMISSION}jungle`, values);
export const change_company_permission_service = values => axios.put(`${QUALIFICATION_PERMISSION}`, values);
export const change_supplier_permission_service = values => axios.put(`${QUALIFICATION_PERMISSION}suppliers`, values);
export const delete_supplier_permission_service = id => axios.delete(`${QUALIFICATION_PERMISSION}suppliers/${id}`);
export const delete_jungle_permission_service = id => axios.delete(`${QUALIFICATION_PERMISSION}jungle/${id}`);

export const load_invitation_reviewers_service = invitation_id => axios.get(`${MFS_REVIEWERS}${invitation_id}`);
export const add_invitation_reviewers_service = values => axios.post(`${MFS_REVIEWERS}`, values);
export const delete_invitation_reviewers_service = id => axios.delete(`${MFS_REVIEWERS}${id}`);

export const load_invitation_notes_service = invitation_id => axios.get(`${MFS_NOTES}${invitation_id}`);
export const add_invitation_notes_service = values => axios.post(`${MFS_NOTES}`, values);
export const delete_invitation_notes_service = id => axios.delete(`${MFS_NOTES}${id}`);

export const load_invitation_files_service = invitation_id => axios.get(`${MFS_FILES}${invitation_id}`);
export const add_invitation_files_service = values => axios.post(`${MFS_FILES}`, values);
export const delete_invitation_files_service = id => axios.delete(`${MFS_FILES}${id}`);
