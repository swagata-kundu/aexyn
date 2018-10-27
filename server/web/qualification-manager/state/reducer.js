import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import { fromJS } from 'immutable';
import common from '../../state/reducer';

const reducer = combineReducers({
  form: reduxFormReducer,
  common,
});
export default reducer;
