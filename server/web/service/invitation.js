import { axios } from '../util';
import { QUESTION_ANSWER, MFS_REVIEWERS, MFS_INVITATION } from '../endpoint';

export const load_invitation_answers_service = invitation_id => axios.get(`${QUESTION_ANSWER}${invitation_id}`);
export const submit_invitation_review_service = data => axios.post(`${MFS_REVIEWERS}status`, data);
export const save_invitation_status_service = data => axios.post(`${MFS_INVITATION}`, data);
export const change_invitation_status_service = data => axios.post(`${MFS_INVITATION}status`, data);
export const load_invitation_history_service = invitation_id => axios.get(`${MFS_INVITATION}history/${invitation_id}`);
