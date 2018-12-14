import {
  LOAD_INVITATION_DETAIL,
} from './type';
import {
  load_invitation_answers_service,
  save_invitation_status_service,
  change_invitation_status_service,
} from '../../service/invitation';

export const load_invitation_answers = invitation_id => (dispatch) => {
  load_invitation_answers_service(invitation_id)
    .then(result => dispatch({
      type: LOAD_INVITATION_DETAIL,
      payload: result.data,
    })).catch((error) => {
      console.log(error);
    });
};

export const save_invitation_status = (invitation_id, data) => (dispatch) => {
  save_invitation_status_service(data)
    .then(result => dispatch(load_invitation_answers(invitation_id))).catch((error) => {
      console.log(error);
    });
};

export const change_invitation_status = (invitation_id, data) => (dispatch) => {
  change_invitation_status_service(data)
    .then(result => dispatch(load_invitation_answers(invitation_id))).catch((error) => {
      console.log(error);
    });
};
