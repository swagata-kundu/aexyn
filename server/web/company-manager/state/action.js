import { GET_OFFICE_DETAILS, GET_EMPLOYEE_DATA, GET_COMPANY_DETAIL } from './type';
import { axios } from '../../util';
import { GET_OFFICES, COMPANY } from '../../endpoint';
import { get_company_info_service } from '../../service/company';

export const getOffice = () => async (dispatch) => {
  const url = `${GET_OFFICES}`;
  try {
    const result = await axios.get(url);
    if (result) {
      dispatch({
        type: GET_OFFICE_DETAILS,
        payload: result.data,
      });
    }
  } catch (error) {
    return {};
  }
};

export const getEmployee = office_id => async (dispatch) => {
  const urls = `${COMPANY}offices/${office_id}/employees`;
  try {
    const result = await axios.get(urls);
    if (result) {
      dispatch({
        type: GET_EMPLOYEE_DATA,
        payload: result.data,
      });
    }
  } catch (error) {
    console.log(error);
  }
};


export const addOffice = async (data, company_id) => {
  const url = `company/${company_id}/offices`;
  try {
    await axios.post(url, data);
  } catch (error) {
    console.log(error);
  }
};


export const get_company_info = company_id => (dispatch) => {
  get_company_info_service(company_id).then((response) => {
    dispatch({
      type: GET_COMPANY_DETAIL,
      payload: response.data,
    });
  }).catch((error) => {
    console.log(error);
  });
};
