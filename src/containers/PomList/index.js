import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getPomsSuccess } from '../../ducks/getPoms';
import { defaultPomSuccess } from '../../ducks/getDefaultPom';
import { displayPomList } from '../../ducks/displayPomList';
import { displayForm } from '../../ducks/displayForm';

import { updateArray } from '../../api/helpers';

import './pomList.css';
import Pomodoro from '../../components/Pomodoro';
import PomForm from '../PomForm';


const PomList = () => {
  const dispatch = useDispatch();
  const { displaySideBar, formState, defaultPom, pomodoros } = 
    useSelector( (state) => ({
      displaySideBar: state.togglePomList.display,
      formState: state.toggleForm.display,
      defaultPom: state.defaultPom.defaultPom,
      pomodoros: state.allPoms.pomodoros,
    })
  );

  useEffect( () => {
    //dispatch(getPomsSuccess())
  }, [])

  const handleSelect = (id) => {
    dispatch(defaultPomSuccess(id));
    dispatch(displayPomList(displaySideBar));
  } 

  const handleRemove = async (id) => {
    dispatch(getPomsSuccess(updateArray(id, pomodoros)))
  }; 
console.log(pomodoros);
  return (
    <div className={ displaySideBar ? `pom-list opened`: `pom-list closed` }>
      <div className='side-bar-header'>
        <h2> Pomdoros </h2>
        <div className='side-bar-add' onClick = { () => dispatch(displayForm(formState, false))  } > + </div>
      </div>
      { 
        pomodoros.map( pom => 
          <Pomodoro 
            key = { pom._id } 
            pomodoro = { pom }
            isDefault = { pom._id === defaultPom ? 'default-pom' : '' }
            handleSelect = { handleSelect }
            handleRemove = { handleRemove }
            handleChangeForm = { () => dispatch(displayForm(formState, pom)) }
          />
        )
      }
      {
        formState ? < PomForm /> : ''
      }
  </div>
  )
};

export default PomList;