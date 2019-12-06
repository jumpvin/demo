import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { triggerGetPomTasks, getPomTasksSuccess } from '../../ducks/getPomTasks';
import Task from '../../components/Task';
import './taskList.css';
import AddTask from '../../components/AddTask';



const TaskList = () => {
  const dispatch = useDispatch();
  const [ title, setTitle ] = useState('');
  const [ description, setDescription ] = useState('');
  const [ showTask, setShowTask ] = useState('active');
  const [ showDesc, setShowDesc ] = useState(false);
  const pomodoro = useSelector ( state => state.defaultPom.defaultPom );
  const tasks = useSelector ( state => state.getPomTasks.tasks );
  const newTask = useSelector ( state => state.createTask.task );
  
  useEffect( () => {
    dispatch(triggerGetPomTasks(pomodoro));
  }, [ pomodoro ]);

  const handleChange = (event) => {
    setTitle(event.target.value);
  }; 

  const handleDescChange = (event) => {
    setDescription(event.target.value);
  }; 

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') handleClick();
  };

      if(Object.keys(newTask).length) {
      const allTasks = tasks.concat(newTask);
      dispatch(getPomTasksSuccess(allTasks));
    }

  const handleClick = async () => {
    if(title) {
      const _id = tasks.length+1;
      const newTask = { title, description, pomodoro, _id };
      const allTasks = tasks.concat(newTask);
      dispatch(getPomTasksSuccess(allTasks));
      setTitle('');
      setDescription('');
      setShowDesc(false);
    }
  }

const chooseTask = (complete) => {
  if(showTask === 'active' && complete) return 'hide-task'; 
  if(showTask === 'complete' && !complete) return 'hide-task'; 
  return '';
};
console.log(tasks)
  return (
    <div className = 'task-list'>
      < AddTask
       title = { title } 
       description = { description }
       handleChange = { handleChange } 
       handleKeyPress = { handleKeyPress } 
       handleDesc = { (display) => setShowDesc(display) } 
       handleClick = {handleClick}
       showDesc = { showDesc }
       handleDescChange = { handleDescChange }
      />
      <div className = 'toggle-tasks' >
        <div 
          className = {showTask === 'active' ? 'to-do selected' : 'to-do'} 
          onClick = {() => setShowTask('active') }
        >
          To Do
        </div>
        <div 
          className = {showTask === 'complete' ? 'completed selected' : 'completed'} 
          onClick = {() => setShowTask('complete') }
        >
          Complete
        </div>
      </div>
      {
        tasks.map( task =>
          <Task 
            key= { task._id } 
            task = { task } 
            showTask = { chooseTask(task.complete) } 
          />
          )
      }
    </div>
  )
};

export default TaskList;