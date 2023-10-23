import React from "react";
import rectangle1 from './assets/Rectangle1.svg';

function LeadingBrands(){
    return(
        <section>
            <div className='container'>
            
                <div className='subtitle'>
                <span>
                    <img src={rectangle1} alt='Rectangle 1' className='subtitle-icon'></img>
                    
                    <h4 className='subtitle-text'>You'll be in good company</h4>
                </span>
            </div>
            </div>
        </section>
    );
}
export default LeadingBrands;