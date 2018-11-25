import {
  GET_OFFICE_LIST, GET_EMPLOYEE_DATA, GET_COMPANY_DETAIL, GET_OFFICE_DETAIL,
} from './type';
import { axios } from '../../util';
import { GET_OFFICES, COMPANY } from '../../endpoint';
import {
  get_company_info_service, get_office_info_service,
  update_office_info_service,
  update_company_info_service,
  delete_employee_service,
  invite_employee_Service,
  changeTL_Service,
} from '../../service/company';

export const getOffice = () => async (dispatch) => {
  const url = `${GET_OFFICES}`;
  try {
    const result = await axios.get(url);
    if (result) {
      dispatch({
        type: GET_OFFICE_LIST,
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

export const get_office_info = office_id => (dispatch) => {
  get_office_info_service(office_id).then((response) => {
    dispatch({
      type: GET_OFFICE_DETAIL,
      payload: response.data,
    });
  }).catch((error) => {
    console.log(error);
  });
};

export const update_office_info = ({ office_id, data }) => (dispatch) => {
  update_office_info_service({ office_id, data }).then(() => {
    dispatch(getOffice());
  }).catch((error) => {
    console.log(error);
  });
};

export const update_company_info = ({ company_id, data }) => (dispatch) => {
  update_company_info_service({ company_id, data }).then(() => {
    dispatch(get_company_info(company_id));
  }).catch((error) => {
    console.log(error);
  });
};


export const delete_employee = ({ user_id, office_id }) => (dispatch) => {
  debugger;
  delete_employee_service({ user_id, office_id }).then(() => {
    dispatch(getEmployee(office_id));
  }).catch((error) => {
    console.log(error);
  });
};

export const invite_employee = ({ email, office_id }) => (dispatch) => {
  invite_employee_Service({ email, office_id }).then(() => {
    dispatch(getEmployee(office_id));
  }).catch((error) => {
    console.log(error);
  });
};

export const changeTL = ({ id, office_id, technical_lead }) => (dispatch) => {
  changeTL_Service({ id, office_id, technical_lead }).then(() => {
    dispatch(getEmployee(office_id));
  }).catch((error) => {
    console.log(error);
  });
};
