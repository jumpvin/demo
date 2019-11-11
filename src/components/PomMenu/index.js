import React from 'react';
import './pomMenu.css';

const PomMenu = ({ handleDisplayForm, handleRemove }) => (
  <div className = 'pom-menu' >
    <div onClick = { handleRemove } >Delete Pomodoro</div>
    <div onClick = { handleDisplayForm }> Update Pomodoro</div>
  </div>
);

export default PomMenu;