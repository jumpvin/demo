import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { displayForm } from '../../ducks/displayForm';
import { getPomsSuccess } from '../../ducks/getPoms';
import { updateArray } from '../../api/helpers';
import './pomOptions.css';
import PomMenu from '../PomMenu';

const PomOptions = ({ pomodoro }) => {
  const dispatch = useDispatch();
  const [ menu, setMenu ] = useState(false);
  const { formState, pomodoros } = 
    useSelector( (state) => ({
      formState: state.toggleForm.display,
      pomodoros: state.allPoms.pomodoros,
    })
  );
  const handleRemove = async () => {
    dispatch(getPomsSuccess(updateArray(pomodoro._id, pomodoros)))
  }; 

  return (
  <div className = 'pom-options' onClick = {() => setMenu( menu ? false : true )}>
    <div></div>
    <div></div>
    <div></div>
    { menu ? 
      <PomMenu 
        handleDisplayForm = { () => dispatch(displayForm(formState, pomodoro))}
        handleRemove = { handleRemove }
      /> : ''}
  </div>
)};

export default PomOptions;