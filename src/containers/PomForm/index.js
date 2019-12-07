import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { displayForm } from '../../ducks/displayForm'
import { getPomsSuccess } from '../../ducks/getPoms';
import { updateArray } from '../../api/helpers';
import './pomForm.css';

const PomForm = () => {
  const [ formData, setFormData ] = 
    useState({ 
      name: '', 
      work: 25, 
      short: 5, 
      long: 30, 
      length: 4, 
      auto: false, 
      default: false }
    );

  const dispatch = useDispatch();
  const { formState, update, pomodoros } = 
    useSelector( (state) => ({
      formState: state.toggleForm.display,
      update: state.toggleForm.update,
      pomodoros: state.allPoms.pomodoros,
      defaultPom: state.defaultPom.defaultPom,
    })
  );

  useEffect( () => {
    if( update ) {
      const { name, work, short, long, length, auto } = update;
      setFormData({ ...formData, name, work, short, long, length, auto, default: update.default })
    }
  }, []);

  const handleName = (event, key) => {
    setFormData({ ...formData, [key]: event.target.value });
  };

  const handleCheck = (event, key) => {
    setFormData({ ...formData, [key]: event.target.checked });
  };

  const handleSubmit = async (id) => {
    const newId = pomodoros.length+1;
    const newData = { ...formData, _id: id? id : newId };
    update ? handleAdd(newData, id) : handleAdd(newData);
    dispatch(displayForm(formState, false))
  };

  const handleAdd = async (newPom, id = 0) => {
    const allPoms = pomodoros.concat(newPom);
    dispatch(getPomsSuccess(!id ? allPoms : updateArray(id, pomodoros, newPom)));
  };

  return (
    <div className='pom-form'>
      <div className = 'close-pom-form' onClick = { () => dispatch(displayForm(formState, false)) }> X </div>
      <label className = 'name-label' >Pomodoro Name</label>
      <input 
        type = 'text' 
        value = { formData.name } 
        onChange = { (event) => handleName(event, 'name') } 
      />
      <div className = 'half' >
        <div className = 'form-inputs' >
          <label>Pomodoro</label>
          <input 
            type = 'text' 
            value = { formData.work } 
            onChange = { (event) => handleName(event, 'work') } 
          />
        </div>
        <div className = 'form-inputs' >
          <label>Short Break</label>
          <input 
            type = 'text' 
            value = { formData.short } 
            onChange = { (event) => handleName(event, 'short') } 
          />
        </div>
      </div>
      <div className = 'half'>
        <div className = 'form-inputs' >
          <label>Long Break</label>
          <input 
            type = 'text' 
            value = { formData.long } 
            onChange = { (event) => handleName(event, 'long') }  
          />
        </div>
        <div className = 'form-inputs' >
          <label>Interval</label>
          <input 
            type = 'text' 
            value = { formData.length } 
            onChange = { (event) => handleName(event, 'length') }  
          />
        </div>
      </div>
      <div className = 'check'>
        <input 
          type = 'checkbox' 
          id = 'auto' 
          onChange = { (event) => handleCheck(event, 'auto') }
          defaultChecked = {displayForm ? displayForm.auto ? 'checked': '' : formData.auto ? 'checked': ''} 
        />
        <label htmlFor = 'auto' >Auto start next Sprint</label>
      </div>
      <div className = 'check'>
        <input 
          type = 'checkbox' 
          id = 'default' 
          onChange = { (event) => handleCheck(event, 'default') } 
          defaultChecked = { displayForm ? displayForm.default ? 'checked': '' : formData.default ? 'checked': ''}
        />
        <label htmlFor = 'auto' >Default Pomodoro</label>
      </div>
      <button onClick = {() => handleSubmit(update._id) } > Pomodoro </button>
    </div>
  );
};

export default PomForm;