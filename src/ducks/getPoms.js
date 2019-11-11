const TRIGGER_GET_POMS = 'TRIGGER_GET_POMS';
const GET_POMS_SUCCESS = 'GET_POMS_SUCCESS';

const triggerGetPoms = () => ({
  type: TRIGGER_GET_POMS,
});

const getPomsSuccess = (pomodoros) => ({
  type: GET_POMS_SUCCESS,
  pomodoros
});

const defaultPom = 
{ 
  _id: 1,
  name: 'Default Pom', 
  work: 25, 
  short: 5, 
  long: 30, 
  length: 4, 
  auto: false, 
  default: false };

const allPoms = (state = {pomodoros: [defaultPom]}, action) => {
  switch(action.type) {
    case GET_POMS_SUCCESS:
      return { ...state, pomodoros: action.pomodoros };
    default: 
      return state;
  }
};

export {
  triggerGetPoms,
  getPomsSuccess,
  allPoms,
}

