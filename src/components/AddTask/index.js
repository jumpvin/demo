import React from 'react';
import './addTask.css'
import DescriptionInput from '../DescriptionInput';

const AddTask = ({ 
  title, description, 
  handleChange, 
  handleKeyPress, 
  handleDesc, 
  handleClick, 
  showDesc, 
  handleDescChange,
  handleOnFocus, 
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