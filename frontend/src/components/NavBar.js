// Navbar.js (React Component)
import React from 'react';
import logo from './assets/logo.svg';

function Navbar() {
  return (

    <header>
       <div className="navbar">
      <div className="logo">
        <img src={logo}></img>
      </div>
      <div className="navbar-menu">
        <div className="new-btn-primary">Services</div>
        <div className="new-btn-primary">Industries</div>
        <div className="new-btn-primary">Cases</div>
        <div className="new-btn-primary">Contact</div>
      </div>
      <div className="new-button-primary">
       <a className='action-btn' href='#'>Let's talk</a>
      </div>
    </div>
    </header>
   
  );
}

export default Navbar;
