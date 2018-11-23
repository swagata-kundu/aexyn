import { fromJS } from 'immutable';
import { load_master_data, load_company_employees } from './type';

const INITIAL_STATE = fromJS({
  masterData: {
    workPerformed: [],
  },
  employees: [],
  userInfo: window._user_ ? window._user_ : {},
});

export default function commonReducer(state = INITIAL_STATE, action) {
  const { type, payload } = action;
  switch (type) {
    case load_master_data: return state.set('masterData', fromJS(payload));
    case load_company_employees: return state.set('employees', fromJS(payload));
    default: return state;
  }
}
