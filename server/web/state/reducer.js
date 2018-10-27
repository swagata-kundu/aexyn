import { fromJS } from 'immutable';
import { load_master_data } from './type';

const INITIAL_STATE = fromJS({
  masterData: {},
  userInfo: window._user_ ? window._user_ : {},
});

export default function commonReducer(state = INITIAL_STATE, action) {
  const { type, payload } = action;
  switch (type) {
    case load_master_data: return state.set('masterData', fromJS(payload));
    default: return state;
  }
}
