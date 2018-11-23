import { LOAD_INVITATION_REVIEWERS } from './type';

const INITIAL_STATE = {
  reviewers: [],
};


const reducer = (state = INITIAL_STATE, { type, payload = {} }) => {
  switch (type) {
    case LOAD_INVITATION_REVIEWERS: return {
      ...state,
      reviewers: [...payload],
    };
    default: return state;
  }
};

export default reducer;
