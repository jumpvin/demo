import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { displayPomList } from '../../ducks/displayPomList';
import { displayWindow } from '../../ducks/displayWindow';
import './App.css';

import Header from '../../components/Header';
import TaskList from '../TaskList';
import Timer from '../Timer';
import PomList from '../PomList';
import Footer from '../../components/Footer/Footer';

const App = () => {
  const dispatch = useDispatch();
  const {displaySideBar, window, defaultPom } = 
    useSelector( state => ({ 
      displaySideBar: state.togglePomList.display,
      window: state.toggleWindow.display,
      defaultPom: state.defaultPom.defaultPom,
    })
  );
  
  const handleWindow = (view) => {
  dispatch(displayWindow(view))
  };

  return (
    <div className="app">
      <Header handleBurger = { () => dispatch(displayPomList(displaySideBar)) } sideBar = { displaySideBar } />
      <PomList />
      <div className='body'>
        <Timer id={defaultPom} showClass = { !window ? '': 'hide-window'} />
        { 
          window ? <TaskList /> : ''
        }
      </div>
      <Footer handleWindow = { handleWindow } />
    </div>
  );
}

export default App;
