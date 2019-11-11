const TRIGGER_GET_POM_TASKS = 'TRIGGER_GET_POM_TASKS';
const GET_POM_TASKS_SUCCESS = 'GET_POM_TASKS_SUCCESS';

const triggerGetPomTasks = (id) => ({
  type: TRIGGER_GET_POM_TASKS,
  id,
});

const getPomTasksSuccess = (tasks) => ({
  type: GET_POM_TASKS_SUCCESS,
  tasks,
});

const getPomTasks = (state = {tasks: []}, action) => {
  switch (action.type) {
    case GET_POM_TASKS_SUCCESS:
      return { ...state, tasks: action.tasks };
    default:
      return state;
  }
};

export {
  triggerGetPomTasks,
  getPomTasksSuccess,
  getPomTasks,
}