import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateArray, getFromArray } from '../../api/helpers';
import { getPomTasksSuccess } from '../../ducks/getPomTasks';
import { useState } from 'react';
import './task.css'
import DescriptionInput from '../DescriptionInput';

const Task = ({ task, showTask, handleDesc }) => {
  const dispatch = useDispatch();
  const tasks = useSelector( state => state.getPomTasks.tasks);
  const [ showDesc, setShowDesc ] = useState(false);

  const handleDisplayDesc = () => {
    setShowDesc(showDesc ? false : true );
  };

  const handleCheck = async (event, id) => {
    const changedTask = { ...getFromArray(id, tasks), complete: event.target.checked }
    dispatch(getPomTasksSuccess(updateArray(id, tasks, changedTask)))
  };
  
  const handleRemove = async (id) => {
    dispatch(getPomTasksSuccess(updateArray(id, tasks)));
  }

  return (
  <div className = {`task ${showTask}`} >
      <div className = 'task-row' >
        <div className='task-info'>
          <input 
            type = 'checkbox' 
            onChange = { (event) => handleCheck(event, task._id) } 
            defaultChecked = {task.complete ? 'checked': ''} 
            />
          <div>
          {task.title}
          </div>
        </div>
        <div className = 'task-options'>
          <div className = 'task-remove' onClick = { () => handleRemove(task._id) } > - </div>
        </div>
      </div>
  </div>
)};

export default Task;