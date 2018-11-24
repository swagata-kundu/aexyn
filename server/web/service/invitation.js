import { axios } from '../util';
import { QUESTION_ANSWER } from '../endpoint';

export const load_invitation_answers_service = invitation_id => axios.get(`${QUESTION_ANSWER}${invitation_id}`);
export const load_invitation_answers = invitation_id => axios.get(`${QUESTION_ANSWER}${invitation_id}`);
