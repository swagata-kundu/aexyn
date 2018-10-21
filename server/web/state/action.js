import { load_master_data } from './type';
import { getMasterData } from '../service/masterdata';

export const masterData = () => async (dispatch) => {
  const result = await getMasterData();
  return dispatch({
    type: load_master_data,
    payload: result,
  });
};