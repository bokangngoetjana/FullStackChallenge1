// Navbar.js (React Component)
import React from 'react';
import logo from './assets/logo.svg';

//Functional Component
function Navbar() {

  //Component Return: specifies the structure and content of the component that
 // will be rendered on the user interface 
  return (

    <header>
       <div className="navbar">
            <div className="logo">
                     <img src={logo}></img>
            </div>
            <div className="navbar-menu">
                    <a className='new-btn-primary' href='#WhatWeDo'>Services</a>
                    <a className="new-btn-primary" href='#'>Industries</a>
                    <a className="new-btn-primary" href='#CaseStudies'>Cases</a>
                    <a className="new-btn-primary" href='#'>Contact</a>
            </div>
            <div className="new-button-primary">
                   <a className='action-btn' href='#'>Let's talk</a>
            </div>
       </div>
    </header>
   
  );
}
//The component is exported as 'NavBar', making it available for use in other parts
//of the application
export default Navbar;
