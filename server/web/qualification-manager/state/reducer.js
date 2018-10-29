import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import { LOAD_INITIAL_QUESTIONS } from './type';
import common from '../../state/reducer';

const INITIAL_STATE = {
  questions: {
  },
  questionTypes: [],
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
    default: return state;
  }
}

const reducer = combineReducers({
  form: reduxFormReducer,
  qualification: qualificationReducer,
  common,
});
export default reducer;
