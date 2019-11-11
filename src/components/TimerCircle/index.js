import React, { useState } from 'react';
import './timerCircle.css';

const TimerCircle = () => {
  // const [ circle, setCircle ] = useState(130);
  // const [ val, setVal ] = useState(35);

  //  const timeCircle = () => {
  //   let circum = Math.PI*(circle*2);
  //   setVal(val > 100? 100 : val < 1? 1 : val)


  // };

  return ( 
    <div className='timer-display' id='cont' data-pct=''>
      <svg id='svg' width='300' height='300' viewport='0 0 100 100' version='1.2'>
        <circle r='130' cx='150' cy='150' fill='transparent' strokeDasharray='816.38' strokeDashoffset='0'></circle>
        <circle id='bar' r='130' cx='50' cy='150' fill='transparent' strokeDasharray='816.38' strokeDashoffset='0' style={{ strokeDashoffset : '816.38px' }} transform='rotate(-90 100 100)'></circle>
      </svg>
      <div className='percent-text' id='percent-text'></div>
    </div>
  )
};

export default TimerCircle;