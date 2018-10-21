import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import { fromJS } from 'immutable';
import { NEXT_STEP, LOAD_COMPANY, MERGE } from './types';
import common from '../../state/reducer';

const INITIAL_STATE = fromJS({
  step: 'USER_INFO',
  companies: [],
  searchText: '',
  company_id: null,
  office_id: null,
  showOfficeForm: false,
});

function createaccount(state = INITIAL_STATE, action) {
  switch (action.type) {
    case NEXT_STEP:
      return state.set('step', state.get('step') + 1);
    case LOAD_COMPANY: {
      const { data, searchText } = action.payload;
      return state
        .set('companies', fromJS(data))
        .set('searchText', searchText)
        .merge();
    }
    case MERGE: {
      const o = fromJS(action.payload);
      return state.merge(o);
    }
    default:
      return state;
  }
}

const reducer = combineReducers({
  form: reduxFormReducer,
  account: createaccount,
  common,
});
export default reducer;
