import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import common from '../../state/reducer';

const INITIAL_STATE = {
};

function profileReducer(state = INITIAL_STATE, action) {
  const { type, payload } = action;
  switch (type) {
    default: return state;
  }
}

const reducer = combineReducers({
  form: reduxFormReducer,
  profile: profileReducer,
  common,
});
export default reducer;
