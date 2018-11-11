import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import common from '../../state/reducer';
import { LOAD_USER_PROFILE, LOAD_ALL_COMPANIES, CHANGE_PREFERENCE } from './type';

const INITIAL_STATE = {
  user_info: {},
  office_profile: {},
  allLinkedOffices: [],
  user_preferences: {},
  notification_preferences: {
    blocked: [],
    allowed: [],
  },
  companies: [],
};

function profileReducer(state = INITIAL_STATE, action) {
  const { type, payload } = action;
  switch (type) {
    case LOAD_USER_PROFILE: {
      return { ...state, ...payload };
    }
    case CHANGE_PREFERENCE: {
      return {
        ...state,
        user_preferences: {
          ...payload,
        },
      };
    }
    case LOAD_ALL_COMPANIES: {
      return {
        ...state,
        companies: [...payload],
      };
    }
    default: return state;
  }
}

const reducer = combineReducers({
  form: reduxFormReducer,
  profile: profileReducer,
  common,
});
export default reducer;
