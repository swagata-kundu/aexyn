import {
  LOAD_INITIAL_QUESTIONS, SEARCH_COMPANY, GET_COMPANIES_DETAIL, FILTER_COMPANY_DATA,
  COMPANY_POPUP, LOAD_PERMISSION, CHANGE_COMPANY_PERMISSION, LOAD_INVITATION_REVIEWERS,
  LOAD_INVITATION_NOTES, LOAD_INVITATION_FILES,
} from './type';
import {
  load_company_permission_service,
  add_supplier_permission_service,
  change_company_permission_service,
  change_supplier_permission_service,
  delete_jungle_permission_service,
  delete_supplier_permission_service,
  add_jungle_permission_service,
  load_invitation_reviewers_service,
  add_invitation_reviewers_service,
  delete_invitation_reviewers_service,
  load_invitation_notes_service,
  add_invitation_notes_service,
  delete_invitation_notes_service,
  load_invitation_files_service,
  add_invitation_files_service,
  delete_invitation_files_service,

} from '../../service/permissions';

export const load_questions = data => ({ type: LOAD_INITIAL_QUESTIONS, payload: data });

export const searchCompany = data => ({ type: SEARCH_COMPANY, payload: data });

export const filterCompanyData = data => ({ type: FILTER_COMPANY_DATA, payload: data });

export const companyPopup = data => ({ type: COMPANY_POPUP, payload: data });


export const load_company_permission = () => (dispatch) => {
  load_company_permission_service().then(result => dispatch({
    type: LOAD_PERMISSION,
    payload: result.data,
  })).catch(error => dispatch({
    type: LOAD_PERMISSION,
    payload: {},
  }));
};

export const add_supplier_permission = values => (dispatch) => {
  add_supplier_permission_service(values)
    .then(() => dispatch(load_company_permission()))
    .catch((error) => {
    });
};

export const change_company_permission = values => (dispatch) => {
  dispatch({ type: CHANGE_COMPANY_PERMISSION, payload: values });
  change_company_permission_service(values)
    .then(() => dispatch(load_company_permission()))
    .catch((error) => {
    });
};

export const change_supplier_permission = values => (dispatch) => {
  change_supplier_permission_service(values)
    .then(() => dispatch(load_company_permission()))
    .catch((error) => {
    });
};

export const delete_jungle_permission = id => (dispatch) => {
  delete_jungle_permission_service(id)
    .then(() => dispatch(load_company_permission()))
    .catch((error) => {
    });
};

export const delete_supplier_permission = id => (dispatch) => {
  delete_supplier_permission_service(id)
    .then(() => dispatch(load_company_permission()))
    .catch((error) => {
    });
};


export const add_jungle_permission = values => (dispatch) => {
  add_jungle_permission_service(values)
    .then(() => dispatch(load_company_permission()))
    .catch((error) => {
    });
};

export const load_invitation_reviewers = invitation_id => (dispatch) => {
  load_invitation_reviewers_service(invitation_id)
    .then(result => dispatch({
      type: LOAD_INVITATION_REVIEWERS,
      payload: result.data,
    })).catch(error => dispatch({
      type: LOAD_INVITATION_REVIEWERS,
      payload: [],
    }));
};

export const add_invitation_reviewers = (invitation_id, data) => (dispatch) => {
  add_invitation_reviewers_service(data)
    .then(() => dispatch(load_invitation_reviewers(invitation_id))).catch((error) => {
      console.log(error);
    });
};

export const delete_invitation_reviewers = (id, invitation_id) => (dispatch) => {
  delete_invitation_reviewers_service(id)
    .then(() => dispatch(load_invitation_reviewers(invitation_id)))
    .catch((error) => {
      console.log(error);
    });
};


export const load_invitation_notes = invitation_id => (dispatch) => {
  load_invitation_notes_service(invitation_id)
    .then(result => dispatch({
      type: LOAD_INVITATION_NOTES,
      payload: result.data,
    })).catch(error => dispatch({
      type: LOAD_INVITATION_NOTES,
      payload: [],
    }));
};

export const add_invitation_notes = (invitation_id, data) => (dispatch) => {
  add_invitation_notes_service(data)
    .then(() => dispatch(load_invitation_notes(invitation_id))).catch((error) => {
      console.log(error);
    });
};

export const delete_invitation_notes = (id, invitation_id) => (dispatch) => {
  delete_invitation_notes_service(id)
    .then(() => dispatch(load_invitation_notes(invitation_id)))
    .catch((error) => {
      console.log(error);
    });
};


// files

export const load_invitation_files = invitation_id => (dispatch) => {
  load_invitation_files_service(invitation_id)
    .then(result => dispatch({
      type: LOAD_INVITATION_FILES,
      payload: result.data,
    })).catch(error => dispatch({
      type: LOAD_INVITATION_FILES,
      payload: [],
    }));
};

export const add_invitation_files = (invitation_id, data) => (dispatch) => {
  add_invitation_files_service(data)
    .then(() => dispatch(load_invitation_files(invitation_id))).catch((error) => {
      console.log(error);
    });
};

export const delete_invitation_files = (id, invitation_id) => (dispatch) => {
  delete_invitation_files_service(id)
    .then(() => dispatch(load_invitation_files(invitation_id)))
    .catch((error) => {
      console.log(error);
    });
};
