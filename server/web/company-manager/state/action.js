import { GET_OFFICE_DETAILS, GET_EMPLOYEE_DATA } from './type';

export const getOffice = data => ({ type: GET_OFFICE_DETAILS, payload: data });

export const getEmployee = data => ({ type: GET_EMPLOYEE_DATA, payload: data });
