import { GET_OFFICE_DETAILS, GET_EMPLOYEE_DATA } from './type';
import { axios } from '../../util';
import { GET_OFFICES, COMPANY } from '../../endpoint';

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
