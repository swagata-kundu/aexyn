import { axios } from '../util';
import { USER } from '../endpoint';

export const load_user_profile_service = user_id => axios.get(`${USER}${user_id}`);
export const change_user_preference_service = values => axios.put(`${USER}preference`, values);
export const change_user_password_service = values => axios.put(`${USER}change-password`, values);
export const change_user_info_service = ({ user_id, values }) => axios.put(`${USER}${user_id}`, values);
export const change_user_notification_preference_service = values => axios.put(`${USER}notification-preference`, values);
