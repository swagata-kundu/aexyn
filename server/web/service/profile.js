import { axios } from '../util';
import { USER } from '../endpoint';

export const load_user_profile_service = user_id => axios.get(`${USER}${user_id}`);
