import {
  PREV_STEP, NEXT_STEP, LOAD_COMPANY, MERGE,
} from './types';
import { search_company_service } from '../../service/company';
import signUp from '../../service/signup';

export function next() {
  return {
    type: NEXT_STEP,
  };
}

export function prev() {
  return {
    type: PREV_STEP,
  };
}

export function mergeKeys(o) {
  return {
    type: MERGE,
    payload: o,
  };
}

export function load_company({ searchText }) {
  return async (dispatch) => {
    if (!searchText) {
      return dispatch({ type: LOAD_COMPANY, payload: { data: [] } });
    }
    try {
      const { data } = await search_company_service({ searchText });
      return dispatch({ type: LOAD_COMPANY, payload: { data, searchText } });
    } catch (error) {
      return dispatch({ type: LOAD_COMPANY, payload: [] });
    }
  };
}

export function sign_up() {
  return async (dispatch, getState) => {
    const { account, form } = getState();
    const { signup, company, office } = form;
    try {
      await signUp({
        account: account.toJS(), signup, company, office,
      });
      location.assign('/qualification-manager');
    } catch (error) {
      console.log(error);
    }
  };
}
