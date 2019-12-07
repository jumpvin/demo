import React from 'react';
import './addTask.css'

const AddTask = ({ 
  title, 
  handleChange, 
  handleKeyPress, 
  handleDesc, 
  handleClick, 
}) => (
  <div className = 'add-task' >
  <div className = 'add-task-always'>
    <input 
      type = 'text' 
      className = 'input' 
      value = { title } 
      onChange = { handleChange } 
      onKeyPress = { handleKeyPress }
      onFocus = { () => handleDesc(true) }
    />
    <button onClick = {handleClick} > Add </button>
  </div>
</div>
);

export default AddTask;