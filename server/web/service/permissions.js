import { axios } from '../util';
import { QUALIFICATION_PERMISSION } from '../endpoint';

export const load_company_permission_service = () => axios.get(QUALIFICATION_PERMISSION);
export const add_supplier_permission_service = values => axios.post(`${QUALIFICATION_PERMISSION}suppliers`, values);
export const add_jungle_permission_service = values => axios.post(`${QUALIFICATION_PERMISSION}jungle`, values);
export const change_company_permission_service = values => axios.put(`${QUALIFICATION_PERMISSION}`, values);
export const change_supplier_permission_service = values => axios.put(`${QUALIFICATION_PERMISSION}suppliers`, values);
export const delete_supplier_permission_service = id => axios.delete(`${QUALIFICATION_PERMISSION}suppliers/${id}`);
export const delete_jungle_permission_service = id => axios.delete(`${QUALIFICATION_PERMISSION}jungle/${id}`);
