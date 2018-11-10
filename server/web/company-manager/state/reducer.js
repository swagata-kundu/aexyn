import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import common from '../../state/reducer';
import { GET_OFFICE_DETAILS, GET_EMPLOYEE_DATA } from './type';

const INITIAL_STATE = {
  getOffices: [],
  getEmployees: [],
};

function companyReducer(state = INITIAL_STATE, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_OFFICE_DETAILS: {
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
    default: return state;
  }
}

const reducer = combineReducers({
  form: reduxFormReducer,
  company: companyReducer,
  common,
});
export default reducer;
