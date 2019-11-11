const DISPLAY_FORM = 'DISPLAY_FORM';

const displayForm = (display, update) => ({
  type: DISPLAY_FORM,
  display,
  update,
});

const toggleForm = (state = {display: false, update: false}, action) => {
  switch (action.type) {
    case DISPLAY_FORM:
      return { ...state, display:  action.display ? false : true, update: action.update }
    default:
      return state;  
  }
};

export {
  displayForm,
  toggleForm,
}