import React from 'react';
import './header.css'

const Header = ( { handleBurger, sideBar } ) => (
    <header>
      <div 
        className= { sideBar ? 'toggle-menu opened-menu' : 'toggle-menu closed-menu' } 
        onClick = { () => handleBurger(sideBar ? false: true) } >
        <div className='menu-line'></div>
        <div className='menu-line'></div>
        <div className='menu-line'></div>
      </div>
      <h2>
        Doropomo
      </h2>
    </header>
  );


export default Header;