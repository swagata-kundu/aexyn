import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import {
  LOAD_INITIAL_QUESTIONS, SEARCH_COMPANIES, GET_COMPANIES_DETAIL, FILTER_COMPANY_DATA,
} from './type';
import common from '../../state/reducer';

const INITIAL_STATE = {
  questions: {
  },
  questionTypes: [],
  questionSet: {},
  companies: {},
  getCompanies: [],
  filterCompanies: {},
};

function qualificationReducer(state = INITIAL_STATE, action) {
  const { type, payload } = action;
  switch (type) {
    case LOAD_INITIAL_QUESTIONS: {
      return ({
        ...state,
        ...payload,
      });
    }
    case SEARCH_COMPANIES: {
      return ({
        ...state,
        companies: action.payload,
      });
    }
    case GET_COMPANIES_DETAIL: {
      return ({
        ...state,
        getCompanies: action.payload,
      });
    }
    case FILTER_COMPANY_DATA: {
      return ({
        ...state,
        filterCompanies: action.payload,
      });
    }
    default: return state;
  }
}

const reducer = combineReducers({
  form: reduxFormReducer,
  qualification: qualificationReducer,
  common,
});
export default reducer;
