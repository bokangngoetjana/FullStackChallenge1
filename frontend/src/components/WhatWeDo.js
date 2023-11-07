import React from 'react'; 
import rectangle1 from './assets/Rectangle1.svg';
import WebDevIcon from './assets/WebDevIcon.svg';
import AppDevIcon from './assets/AppDevIcon.svg';
import UXIcon from './assets/UXIcon.svg';
import icon from './assets/icon.svg';

function WhatWeDo(){
    return(
       <section id='WhatWeDo'>
               <div className='WhatWeDo-layout editContent'></div>
               <div className='container'>
                  
                   <div className='subtitle'>
                         <span>
                            <img src={rectangle1} alt='Rectangle 1' className='subtitle-icon'></img>
                           <h4 className='subtitle-text'>What we do</h4>
                        </span>
                  </div>

                 <div className='header-section'>
                        <h1 className='header-text'>We offer a complete range of bespoke design and development
                           services to help turn your ideas into digital masterpieces
                        </h1>
                  </div>

                  <div className='call-grids'>
                        <div className='grids-1 grids-effect-2'>
                              <img className='icon' alt='Web Development Icon' src={WebDevIcon}></img>
                              <div>
                                    <h4 className='heading4'>Web development</h4>
                                    <p className='paragraph'>We use cutting-edge web
                                       development technologies to help our clients fulfill
                                       their business goals through functional, reliable solutions.
                                    </p>
                              </div>
                        </div>
                        <div className='grids-1 grids-effect-2'>
                              <img className='icon'  alt='UI Icon' src={UXIcon}></img>
                              <h4 className='heading4'>User experience & design</h4>
                              <p className='paragraph'>Our complete web design services will bring
                                 your ideas to life and provide you with a sleek, high-performing
                                 product that elevates your business.
                              </p>
                        </div>
                        <div className='grids-1 grids-effect-2'>
                              <img className='icon'  alt='Mobile App Icon' src={AppDevIcon}></img>
                              <h4 className='heading4'>Mobile app development</h4>
                              <p className='paragraph'>Our extensive mobile development experience
                                 allows us to create custom native and cross-platform iOS and Android mobile
                                 solutions for our clients.
                              </p>
                        </div>
                        <div className='grids-1 grids-effect-2'>
                              <img className='icon'  alt='Blockchain solutions Icon' src={icon}></img>
                              <h4 className='heading4'>Blockchain solutions</h4>
                              <p className='paragraph'>We conduct market research to determine the optimal
                                 blockchain-based solutions to help you grow your company and achieve your
                                 business goals.
                              </p>
                        </div>
                   </div>

               </div>
       </section>
    );
}
export default WhatWeDo;