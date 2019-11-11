import React from 'react';
import './footer.css';

const Footer = ({ handleWindow}) => (
  <footer>
    <div onClick = { () => handleWindow(false) } >
      <img src = '/assets/clock-icon.png' alt='clock' />
    </div>
    <div onClick = { () => handleWindow(true) } >
      <img src = '/assets/task-icon.png' alt='task' />
    </div>
  </footer>
);

export default Footer;