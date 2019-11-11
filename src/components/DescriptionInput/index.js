import React from 'react';
import './descriptionInput.css';

const DescriptionInput = ({ description, showDesc, handleDescChange, handleDesc }) => (
  <textarea 
    value = { description } 
    className = {showDesc ? 'desc-text' : 'hide-desc'}
    onChange = { handleDescChange } 
    onBlur = { () => handleDesc(false) }
  ></textarea>
);

export default DescriptionInput;