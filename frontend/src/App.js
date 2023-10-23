import React from 'react';
import Slider from 'react-slick';
import './App.css';
import './components/Site.css';
import './components/WhatWeDo.css';
import './components/Footer.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import LandingPage from './components/LandingPage';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import WhatWeDo  from './components/WhatWeDo';
import CaseStudies from './components/CaseStudies';
import Footer from './components/Footer';
import LeadingBrands from './components/LeadingBrands';

function App(){
  return (
    <div className='App'>
      <NavBar/>
      <HeroSection/>
      <WhatWeDo/>
      <CaseStudies/>
      <LeadingBrands/>
      <Footer/>
    </div>
  );
}
export default App;