import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateClock, numToMin, getFromArray } from '../../api/helpers';
import './timer.css';
import Sprints from '../../components/Sprints';
import Round from '../../components/Round';

const Timer = () => {
  const dispatch = useDispatch();
  const id = useSelector( state => state.defaultPom.defaultPom);
  const pomodoros = useSelector ( state => state.allPoms.pomodoros)
  const showClass = useSelector( state => state.toggleWindow.display);
  
  const [ pomodoro, setPomodoro] = useState({});
  const [ time, setTime ] = useState({ timer: '00:00' });
  const [ sprint, setSprint ] = useState({ last: 'work' });
  const [ length, setLength ] = useState({ round: 1 });
  const [ timeId, setTimeId ] = useState(0);

  useEffect( () => {
    if(id){
      const pomodoro = getFromArray(id, pomodoros);
      setTime({ ...time,  timer: numToMin(pomodoro.work) });
      updateSprint('work', pomodoro.work );
      setLength({ ...length,  round: 1 });
      setPomodoro(pomodoro);
    }
  }, [ id ])

const startTimer = (currentTime, sprint, round, e) => {

  const newTimeId = setTimeout( () => {
    const updatedTime = updateTime(currentTime, sprint, round);
      startTimer(updatedTime.currentTime, updatedTime.sprint, updatedTime.round);
  }, 1000);
  setTimeId(newTimeId);
  if(!pomodoro.auto && currentTime === numToMin(pomodoro[sprint]) && !(e && e.target)) {
    endTimer(newTimeId);
  };

};

const updateTime = (currentTime, sprint, round) => {
   if(currentTime === '00:00'){
      if(sprint === 'short' || sprint === 'long') {
        updateSprint('work');
        if(sprint === 'short') {
          const newRound = round+1;
          setLength({ ...length,  round: newRound })
        };
        currentTime = numToMin(pomodoro.work);
        sprint = 'work';
      }
      else if ( sprint === 'work' && round < pomodoro.length) {
        updateSprint('short');
        currentTime = numToMin(pomodoro.short);
        sprint = 'short';
        round = round+1;
      }
      else {
        updateSprint('long');
        setLength({ ...length,  round: 1 });
        currentTime = numToMin(pomodoro.long);
        sprint = 'long';
        round = 0;
      }
    } else {
     setTime({...time,  timer: updateClock(currentTime) });
     currentTime = updateClock(currentTime);
    }
  return { currentTime, sprint, round };
}
  const endTimer = (argId = null) => {
    let chosenId = typeof argId === 'number' ? argId : timeId;
    clearTimeout(chosenId);
    setTimeId(0);
  };

  const updateSprint = (sprint, time = false ) => {
    setTime({ ...time,  timer: numToMin(time ? time : pomodoro[sprint]) });
    setSprint({...sprint, last: sprint});
  };
  
  const displayRounds = () => {
    const lengthArray = new Array(length.round).fill(true);
    return lengthArray.map( (el, i) => <Round key = {i} />);
  }

  return (
    <div className= { !showClass ? 'timer' : ' timer hide-window' }>
      <div className = 'display-default-pom'>
        { pomodoro.name }
      </div>
      <Sprints sprint = { sprint.last } updateSprint =  { updateSprint } />
      <div className= 'timer-display'>
      { time.timer ? time.timer: '' } 
      </div>
      <div className = 'rounds'>
        { displayRounds() }
      </div>
      {
        timeId ?
        <div className='button red' onClick={endTimer}>End</div> 
        :
        <div className='button blue' onClick={(e) => time.timer? startTimer(time.timer, sprint.last, length.round, e): ''}>Start</div> 
      }
    </div>
  )
};

export default Timer;