import { LOAD_INITIAL_QUESTIONS, SEARCH_COMPANY, GET_COMPANIES_DETAIL, FILTER_COMPANY_DATA,
COMPANY_POPUP } from './type';

export const load_questions = data => ({ type: LOAD_INITIAL_QUESTIONS, payload: data });

export const searchCompany = data => ({ type: SEARCH_COMPANY, payload: data });

export const getCompanyDetail = data => ({ type: GET_COMPANIES_DETAIL, payload: data });

export const filterCompanyData = data => ({ type: FILTER_COMPANY_DATA, payload: data });

export const companyPopup = data => ({ type: COMPANY_POPUP, payload: data });
