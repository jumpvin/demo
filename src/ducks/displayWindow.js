const DISPLAY_WINDOW = 'DISPLAY_WINDOW';

const displayWindow = (display) => ({
  type: DISPLAY_WINDOW,
  display,
});

const toggleWindow = ( state = true, action ) => {
  switch (action.type) {
    case DISPLAY_WINDOW :
      return { ...state, display:  action.display };
    default: 
      return state;  
  }
};

export {
  displayWindow,
  toggleWindow,
}