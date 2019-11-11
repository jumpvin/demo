const TRIGGER_DEFAULT_POM = 'TRIGGER_DEFAULT_POM';
const DEFAULT_POM_SUCCESS = 'DEFAULT_POM_SUCCESS';

const triggerDefaultPom = () => ({
  type: TRIGGER_DEFAULT_POM
});

const defaultPomSuccess = (defaultPom) => ({
  type: DEFAULT_POM_SUCCESS,
  defaultPom
});

const defaultPom = (state = {defaultPom: 1}, action) => {
  switch (action.type) {
    case DEFAULT_POM_SUCCESS:
      return { ...state, defaultPom: action.defaultPom }
    default:
      return state;  
  }
}

export {
  triggerDefaultPom,
  defaultPomSuccess,
  defaultPom,
}