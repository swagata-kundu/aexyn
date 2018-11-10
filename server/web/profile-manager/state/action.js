import { LOAD_USER_PROFILE } from './type';
import { load_user_profile_service, change_user_preference_service } from '../../service/profile';


export const load_user_profile = user_id => (dispatch) => {
  load_user_profile_service(user_id).then(result => dispatch({
    type: LOAD_USER_PROFILE,
    payload: result.data,
  })).catch((error) => {
    console.log(error);
  });
};


export const change_user_preference = ({ params, user_id }) => (dispatch) => {
  change_user_preference_service(params).then(() => {
    dispatch(load_user_profile(user_id));
  }).catch((error) => {
    console.log(error);
  });
};
