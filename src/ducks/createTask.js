const TRIGGER_CREATE_TASK = 'TRIGGER_CREATE_TASK';
const CREATE_TASK_SUCCESS = 'CREATE_TASK_SUCCESS';

const triggerCreateTask = (args) => ({
  type: TRIGGER_CREATE_TASK,
  args,
});

const createTaskSuccess = (task) => ({
  type: CREATE_TASK_SUCCESS,
  task
});

const createTask = (state = {task: {}}, action) => {
  switch(action.type) {
    case CREATE_TASK_SUCCESS:
      return { ...state, task: action.task };
    default: 
      return state;
  }
};

export {
  triggerCreateTask,
  createTaskSuccess,
  createTask,
}