import { combineReducers } from 'redux';
import { togglePomList } from './displayPomList';
import { toggleWindow } from './displayWindow';
import { toggleForm } from './displayForm';
import { defaultPom } from './getDefaultPom';
import { allPoms } from './getPoms';
import { getPomTasks } from './getPomTasks';
import { deletePom } from './removePom';
import { createTask } from './createTask';
import { updatedTask } from './updateTask';
import { deleteTask } from './removeTask';

const reducers = combineReducers({
  togglePomList,
  toggleWindow,
  toggleForm,
  defaultPom,
  allPoms,
  getPomTasks,
  deletePom,
  createTask,
  updatedTask,
  deleteTask,
});

export default reducers;