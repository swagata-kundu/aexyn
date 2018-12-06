import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import { fromJS } from 'immutable';
import {
  LOAD_INITIAL_QUESTIONS, SEARCH_COMPANY, FILTER_COMPANY_DATA, FILTER_DATA_LOCATION,
  COMPANY_POPUP, LOAD_PERMISSION,
  CHANGE_COMPANY_PERMISSION,
} from './type';
import common from '../../state/reducer';
import invites from './invitation_reducer';

const INITIAL_STATE_MFS = {
  questions: {
  },
  questionTypes: [],
  questionSet: {},
  companies: [],
  getCompanies: [],
  filterCompanies: {},
  filterValues: {},
  showCompanypopup: false,
};

function qualificationReducer(state = INITIAL_STATE_MFS, action) {
  const { type, payload } = action;
  switch (type) {
    case LOAD_INITIAL_QUESTIONS: {
      return ({
        ...state,
        ...payload,
      });
    }
    case SEARCH_COMPANY: {
      return ({
        ...state,
        companies: action.payload,
      });
    }

    case FILTER_COMPANY_DATA: {
      return ({
        ...state,
        filterCompanies: action.payload,
      });
    }
    case FILTER_DATA_LOCATION: {
      return ({
        ...state,
        filterValues: action.payload,
      });
    }
    case COMPANY_POPUP: {
      return ({
        ...state,
        showCompanypopup: action.payload,
      });
    }
    default: return state;
  }
}

const INITIAL_STATE_PERMISSION = fromJS({
  permissions: [],
  suppliers: {
    employees: [],
    permitted_employees: [],
  },
  jungles: {
    employees: [],
    permitted_employees: [],
  },
  companyPermission: {},
});

function permissionReducer(state = INITIAL_STATE_PERMISSION, { type, payload }) {
  switch (type) {
    case LOAD_PERMISSION: return fromJS(payload);
    case CHANGE_COMPANY_PERMISSION: {
      return state.mergeIn(['companyPermission'], fromJS(payload));
    }
    default: return state;
  }
}

const reducer = combineReducers({
  form: reduxFormReducer,
  qualification: qualificationReducer,
  common,
  permission: permissionReducer,
  invites,
});
export default reducer;
