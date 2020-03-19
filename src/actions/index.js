import * as types from '../constants/ActionTypes';

export const openTaskForm = () => {
  return {
    type: types.OPEN_TASK_FORM
  }
}

export const closeTaskForm = () => {
  return {
    type: types.CLOSE_TASK_FORM
  }
}
