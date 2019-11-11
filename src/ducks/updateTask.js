const TRIGGER_UPDATE_TASK = 'TRIGGER_UPDATE_TASK';
const UPDATE_TASK_SUCCESS = 'UPDATE_TASK_SUCCESS';

const triggerUpdateTask = (id, args) => ({
  type: TRIGGER_UPDATE_TASK,
  id,
  args,
});

const updateTaskSuccess = (task) => ({
  type: UPDATE_TASK_SUCCESS,
  task
});

const updatedTask = (state = {task: {}}, action) => {
  switch(action.type) {
    case UPDATE_TASK_SUCCESS:
      return { ...state, task: action.task };
    default: 
      return state;
  }
};

export {
  triggerUpdateTask,
  updateTaskSuccess,
  updatedTask,
}