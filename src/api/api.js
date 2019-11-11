import axios from 'axios';

const getPoms = async () => {
  return await api('get', '/pomodoros');
};

const getPom = async (id) => {
  return await api('get', `/pomodoro/${id}`);
}

const getDefaultPom = async () => {
  return await api('get', `/pomodoros/default`);
}

const addPom = async (args) => {
  return await api('post', `/pomodoro`, args);
};

const updatePom = async (id, args) => {
  return await api('put', `/pomodoro/${id}`, args);
};

const removePom = async (id) => {
  return await api('delete', `/pomodoro/${id}`);
};

const getTasksByPom = async (id) => {
  return await api('get', `/pomodoro/${id}/tasks`);
};

const addTask = async (args) => {
  return await api('post', `/task`, args);
};

const updateTask = async (id, args) => {
  return await api('put', `/task/${id}`, args);
};

const removeTask = async (id) => {
  return await api('delete', `/task/${id}`);
};

const api = async (type, url, args) => {
  const res = await axios[type](`http://localhost:3005${url}`, args);
  return res.data;
};

export {
  getPoms,
  getPom,
  getDefaultPom,
  addPom,
  updatePom,
  removePom,
  getTasksByPom,
  addTask,
  updateTask,
  removeTask,
};