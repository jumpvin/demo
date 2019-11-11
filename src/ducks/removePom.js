const TRIGGER_REMOVE_POM = 'TRIGGER_REMOVE_POM';
const REMOVE_POM_SUCCESS = 'REMOVE_POM_SUCCESS';

const triggerRemovePom = (id) => ({
  type: TRIGGER_REMOVE_POM,
  id,
});

const removePomSuccess = (deleted) => ({
  type: REMOVE_POM_SUCCESS,
  deleted
});

const deletePom = ( state = { deleted: false}, action ) => {
  switch (action.type) {
    case REMOVE_POM_SUCCESS:
      return { ...state, deleted: action.deleted };
    default:
      return state;
  }
};

export {
  triggerRemovePom,
  removePomSuccess,
  deletePom,
}