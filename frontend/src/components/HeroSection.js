//Import statements: Dependencies are imported where necessary. 
//Here, it imports the React library and an image file using the import statement
import React from 'react';
import heroImage from './assets/confidence.jpeg';

//defines a functional React component called 'HeroSection' to create reusable 
//ui elements in React
function HeroSection(){

//The return statement specifies the structure and content of the component that
//will be rendered on the user interface.
    return(
        <div id='hero' className='hero'>
            <img src={heroImage} alt='Hero Image' style={{width: '1440px', height: '600px'}} />
            <div className='hero-text'>
                <h1>Live with Confidence</h1>
                <p> José Mourinho brings confidence to pan-African Sanlam
                         campaign.
                </p>
            </div>
                <a className='btn-primary' href='#'>View Project</a>
        </div>
    )
}

//Component export : exported at the end, making it available for use in 
//other parts of the application
export default HeroSection;