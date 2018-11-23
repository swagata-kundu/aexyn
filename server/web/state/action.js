import { load_master_data, load_company_employees } from './type';
import { masterdata_service, load_all_employees_service } from '../service/masterdata';

export const masterData = () => async (dispatch) => {
  const result = await masterdata_service();
  return dispatch({
    type: load_master_data,
    payload: result,
  });
};

export const load_all_employees = company_id => async (dispatch) => {
  const result = await load_all_employees_service(company_id);
  return dispatch({
    type: load_company_employees,
    payload: result,
  });
};
