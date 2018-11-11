import { GET_OFFICE_DETAILS, GET_EMPLOYEE_DATA } from './type';
import { axios } from '../../util';
import store from './store';
import { GET_OFFICES } from '../../endpoint';

export const getOffice = () => async (dispatch) => {
  const url = `${GET_OFFICES}`;

  try {
    const result = await axios.get(url);
    if (result) {
      store.dispatch({
        type: GET_OFFICE_DETAILS,
        payload: result.data,
      });
    }
  } catch (error) {
    return {};
  }
};

export const getEmployee = url => async (dispatch) => {
  const urls = `company${url}`;
  try {
    const result = await axios.get(urls);
    if (result) {
      store.dispatch({
        type: GET_EMPLOYEE_DATA,
        payload: result.data,
      });
    }
  } catch (error) {
    return {};
  }
};


export const addOffice = async (data, companyId) => {
  const urls = `company/${companyId}/offices`;

  const body = {
    address1: data.address1,
    address2: data.address2,
    city: data.city,
    zip: data.zip,
    country_id: Number(data.country_id),
    state_id: Number(data.state_id),
    phone_no: data.phone,
    fax_no: data.fax,
  };
  try {
    const result = await axios.post(urls, body);
    return result.data;
  } catch (error) {
    return {};
  }
};
