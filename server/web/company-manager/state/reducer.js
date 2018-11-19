import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import common from '../../state/reducer';
import {
  GET_OFFICE_LIST, GET_EMPLOYEE_DATA, GET_COMPANY_DETAIL, GET_OFFICE_DETAIL,
} from './type';

const INITIAL_STATE = {
  getOffices: [],
  getEmployees: [],
  companyInfo: {},
  officeInfo: {},
};

function companyReducer(state = INITIAL_STATE, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_OFFICE_LIST: {
      return ({
        ...state,
        getOffices: payload,
      });
    }
    case GET_EMPLOYEE_DATA: {
      return ({
        ...state,
        getEmployees: payload,
      });
    }
    case GET_COMPANY_DETAIL: {
      return ({
        ...state,
        companyInfo: { ...payload },
      });
    }
    case GET_OFFICE_DETAIL: {
      return ({
        ...state,
        officeInfo: { ...payload },
      });
    }
    default: return state;
  }
}

const reducer = combineReducers({
  form: reduxFormReducer,
  company: companyReducer,
  common,
});
export default reducer;
