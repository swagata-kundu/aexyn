import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import common from '../../state/reducer';
import { LOAD_USER_PROFILE } from './type';

const INITIAL_STATE = {
  user_info: {},
  office_profile: {},
  allLinkedOffices: [],
  user_preferences: {},
  notification_preferences: {
    blocked: [],
    allowed: [],
  },
};

function profileReducer(state = INITIAL_STATE, action) {
  const { type, payload } = action;
  switch (type) {
    case LOAD_USER_PROFILE: {
      return { ...payload };
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
