import React from 'react';
import './sprints.css';

const Sprints = ({ sprint, updateSprint }) => {

  const defaultSprint = (currentSprint) => {
    return sprint === currentSprint ? 'default-sprint' : '';
  };

  return (
  <div className = 'sprints' >
    <div 
      className= {`sprint ${defaultSprint('work')}`}
      onClick = { () => updateSprint('work') }
    > 
      Pomodoro
    </div>
    <div 
      className= {`sprint ${defaultSprint('short')}`}
      onClick = { () => updateSprint('short') }
    > 
      Short Break 
    </div>
    <div 
      className= {`sprint ${defaultSprint('long')}`}
      onClick = { () => updateSprint('long') }
    > 
      Long Break 
    </div>
  </div>
)};

export default Sprints;