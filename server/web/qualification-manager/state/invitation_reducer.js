import {
  LOAD_INVITATION_REVIEWERS, LOAD_INVITATION_NOTES,
  LOAD_INVITATION_DETAIL,
} from './type';

const INITIAL_STATE = {
  reviewers: [],
  notes: [],
  invitation: {
    detail: {},
    questions: [],
  },
};


const reducer = (state = INITIAL_STATE, { type, payload = {} }) => {
  switch (type) {
    case LOAD_INVITATION_REVIEWERS: return {
      ...state,
      reviewers: [...payload],
    };

    case LOAD_INVITATION_NOTES: return {
      ...state,
      notes: [...payload],
    };
    case LOAD_INVITATION_DETAIL: return {
      ...state,
      invitation: { ...payload },
    };
    default: return state;
  }
};

export default reducer;
