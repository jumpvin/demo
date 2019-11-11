const TRIGGER_REMOVE_TASK = 'TRIGGER_REMOVE_TASK';
const REMOVE_TASK_SUCCESS = 'REMOVE_TASK_SUCCESS';

const triggerRemoveTask = (id) => ({
  type: TRIGGER_REMOVE_TASK,
  id,
});

const removeTaskSuccess = (deleted) => ({
  type: REMOVE_TASK_SUCCESS,
  deleted
});

const deleteTask = ( state = { deleted: false}, action ) => {
  switch (action.type) {
    case REMOVE_TASK_SUCCESS:
      return { ...state, deleted: action.deleted };
    default:
      return state;
  }
};

export {
  triggerRemoveTask,
  removeTaskSuccess,
  deleteTask,
}