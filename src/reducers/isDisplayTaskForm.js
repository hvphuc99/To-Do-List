import * as types from '../constants/ActionTypes';

const initializeState = false;

const myReducer = (state = initializeState, action) => {
  switch (action.type) {
    case types.OPEN_TASK_FORM:
      state = true;
      break;
    case types.CLOSE_TASK_FORM:
      state = false;
      break;
  };
  return state;
};

export default myReducer;
