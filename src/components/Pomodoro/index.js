import React from 'react';
import './pomodoro.css'
import PomOptions from '../PomOptions';

const Pomodoro = ({ pomodoro, isDefault, handleSelect }) => (
<div className = {`pomodoro ${ isDefault }`} >
  <h3 onClick = { () => handleSelect( pomodoro._id ) } >
    { pomodoro.name }
  </h3>
  <PomOptions pomodoro = { pomodoro } />
</div>
);

export default Pomodoro;