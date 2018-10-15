import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import { Map } from 'immutable';

import { NEXT_STEP } from './types';

const INITIAL_STATE = Map({ step: 2 });

function createaccount(state = INITIAL_STATE, action) {
  switch (action.type) {
    case NEXT_STEP:
      return state.set('step', state.get('step') + 1);
    default: return state;
  }
}

const reducer = combineReducers({ form: reduxFormReducer, account: createaccount });
export default reducer;
