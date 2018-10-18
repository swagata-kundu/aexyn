import {
 PREV_STEP, NEXT_STEP, LOAD_COMPANY, MERGE 
} from './types';
import { getCompany } from '../../service/company';

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
      const { data } = await getCompany({ searchText });
      return dispatch({ type: LOAD_COMPANY, payload: { data, searchText } });
    } catch (error) {
      return dispatch({ type: LOAD_COMPANY, payload: [] });
    }
  };
}
