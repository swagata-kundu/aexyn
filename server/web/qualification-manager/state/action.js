import {
  LOAD_INITIAL_QUESTIONS, SEARCH_COMPANY, GET_COMPANIES_DETAIL, FILTER_COMPANY_DATA,
  COMPANY_POPUP, LOAD_PERMISSION, CHANGE_COMPANY_PERMISSION,
} from './type';
import {
  load_company_permission_service,
  add_supplier_permission_service,
  change_company_permission_service,
  change_supplier_permission_service,
  delete_jungle_permission_service,
  delete_supplier_permission_service,
  add_jungle_permission_service,
} from '../../service/permissions';

export const load_questions = data => ({ type: LOAD_INITIAL_QUESTIONS, payload: data });

export const searchCompany = data => ({ type: SEARCH_COMPANY, payload: data });

export const getCompanyDetail = data => ({ type: GET_COMPANIES_DETAIL, payload: data });

export const filterCompanyData = data => ({ type: FILTER_COMPANY_DATA, payload: data });

export const companyPopup = data => ({ type: COMPANY_POPUP, payload: data });


export const load_company_permission = () => (dispatch) => {
  load_company_permission_service().then(result => dispatch({
    type: LOAD_PERMISSION,
    payload: result.data,
  })).catch(error => dispatch({
    type: LOAD_PERMISSION,
    payload: {},
  }));
};

export const add_supplier_permission = values => (dispatch) => {
  add_supplier_permission_service(values)
    .then(() => dispatch(load_company_permission()))
    .catch((error) => {
    });
};

export const change_company_permission = values => (dispatch) => {
  dispatch({ type: CHANGE_COMPANY_PERMISSION, payload: values });
  change_company_permission_service(values)
    .then(() => dispatch(load_company_permission()))
    .catch((error) => {
    });
};

export const change_supplier_permission = values => (dispatch) => {
  change_supplier_permission_service(values)
    .then(() => dispatch(load_company_permission()))
    .catch((error) => {
    });
};

export const delete_jungle_permission = id => (dispatch) => {
  delete_jungle_permission_service(id)
    .then(() => dispatch(load_company_permission()))
    .catch((error) => {
    });
};

export const delete_supplier_permission = id => (dispatch) => {
  delete_supplier_permission_service(id)
    .then(() => dispatch(load_company_permission()))
    .catch((error) => {
    });
};


export const add_jungle_permission = values => (dispatch) => {
  add_jungle_permission_service(values)
    .then(() => dispatch(load_company_permission()))
    .catch((error) => {
    });
};
