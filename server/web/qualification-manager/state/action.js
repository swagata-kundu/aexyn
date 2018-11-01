import { LOAD_INITIAL_QUESTIONS, SEARCH_COMPANIES, GET_COMPANIES_DETAIL, FILTER_COMPANY_DATA } from './type';

export const load_questions = data => ({ type: LOAD_INITIAL_QUESTIONS, payload: data });

export const searchCompany = data => ({ type: SEARCH_COMPANIES, payload: data });

export const getCompanyDetail = data => ({ type: GET_COMPANIES_DETAIL, payload: data });

export const filterCompanyData = data => ({ type: FILTER_COMPANY_DATA, payload: data });
