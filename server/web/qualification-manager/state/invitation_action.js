import { LOAD_INVITATION_DETAIL } from './type';
import { load_invitation_answers_service } from '../../service/invitation';

export const load_invitation_answers = invitation_id => (dispatch) => {
  load_invitation_answers_service(invitation_id)
    .then(result => dispatch({
      type: LOAD_INVITATION_DETAIL,
      payload: result.data,
    })).catch((error) => {
      console.log(error);
    });
};
