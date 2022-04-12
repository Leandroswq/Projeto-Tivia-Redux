const INITIAL_STATE = {
  questions: '',
};

const questions = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'QUESTION_ACTION':

    return { ...state, questions: action.value };
  case 'CLEAR_QUESTION':
    return { ...state, questions: '' };
  default:
    return state;
  }
};

export default questions;
