import React from 'react';
import heroImage from './assets/confidence.jpeg';

function HeroSection(){
    return(
        <div id='hero' className='hero'>
            <img src={heroImage} alt='Hero Image' style={{width: '1440px', height: '600px'}} />
            <div className='hero-text'>
                <h1>Live with Confidence</h1>
                <p> José Mourinho brings confidence to pan-African Sanlam
                campaign.
                </p> </div>
                <a className='btn-primary' href='#'>View Project</a>
           
        </div>
    )
}
export default HeroSection;