import React, { useState, useEffect } from "react";
import rectangle1 from './assets/Rectangle1.svg';
import axios from 'axios';

function LeadingBrands() {
    const [ImageUrls, setImageUrls] = useState([]);
    const baseUrl = '/assets/';

    useEffect(() => {
        axios.get('/api/assets/')
            .then(response => {
                setImageUrls(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []); // The empty array as the second argument makes this effect run only once

    return (
        <section>
            <div className='container'>
                <div className='subtitle'>
                    <span>
                        <img src={rectangle1} alt='Rectangle 1' className='subtitle-icon'></img>
                        <h4 className='subtitle-text'>You'll be in good company</h4>
                    </span>
                </div>
                {/* Render your images using the imageUrls state */}
                {ImageUrls.map((ImageUrl, index) => (
                    <img key={index} src={'${baseUrl}${ImageUrl}'} alt={`Brand ${index}`} />
                ))}
            </div>
        </section>
    );
}

export default LeadingBrands;
