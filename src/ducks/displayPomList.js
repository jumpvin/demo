const DISPLAY_POM_LIST = 'DISPLAY_POM_LIST';

const displayPomList = (display) => ({
  type: DISPLAY_POM_LIST,
  display
});

const togglePomList = (state = false, action) => {
  switch (action.type) {
    case DISPLAY_POM_LIST:
      return { ...state, display:  action.display ? false : true }
    default:
      return state;  
  }
};

export {
  displayPomList,
  togglePomList,
}