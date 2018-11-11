import { LOAD_USER_PROFILE, LOAD_ALL_COMPANIES, CHANGE_PREFERENCE } from './type';
import {
  load_user_profile_service, change_user_preference_service,
  change_user_notification_preference_service,
} from '../../service/profile';
import { get_all_company_service } from '../../service/company';

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

export const change_user_preference_state_only = values => ({
  type: CHANGE_PREFERENCE,
  payload: values,
});


export const get_all_company = () => (dispatch) => {
  get_all_company_service().then(result => dispatch({
    type: LOAD_ALL_COMPANIES,
    payload: result.data,
  })).catch((error) => {
    console.log(error);
  });
};

export const change_notification_preference = (user_id, user, notification) => (dispatch) => {
  change_user_preference_service(user).then(() => {
    change_user_notification_preference_service(notification).then(() => {
      dispatch(load_user_profile(user_id));
    });
  }).catch((error) => {
    console.log(error);
  });
};
