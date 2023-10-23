import React from "react";
import './Footer.css';
import rectangle1 from './assets/Rectangle1.svg';

function Footer(){
 return(
   <footer>
    <section id="footer">
        <div className="container">
            <div className='subtitle'>
                <span>
                    <img src={rectangle1} alt='Rectangle 1' className='subtitle-icon'></img>
                    
                    <h5 className='subtitle-text'>Contact Us</h5>
                </span>
                    
                </div>
                <div className='footer-section'>
                <h2 className='footer-text'>Have a project in mind? Let's make it happen
                </h2>
                    <div className='footer-section-right'>
                        <p>
                                22 Street Name, Suburb, 8000,
                                Cape Town, South Africa
                            +27 21 431 0001
                        </p>
                        <p className="enquiries">
                            enquirie@website.co.za
                        </p>
                </div>
            </div>
            
        </div>
 
        <div className="footer-container">
        <div className="row">
            <div className="footer-col-1">
                <ul>
                    <li><a href="#">Terms of service</a></li>
                    <li><a href="#">Privacy policy</a></li>
                    <li><a href="#">Impressum</a></li>
                </ul>
            </div>
        </div>
        <div className="footer-col-1">
            <ul>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Instagram</a></li>
               <li><a href="#">Twitter</a></li>
            </ul>
           
        </div>
       <div className="footer-col-1">
       <ul>
                <li><a href="#">GitHub</a></li>
                <li><a href="#">LinkedIn</a></li>
               <li><a href="#">Teams</a></li>
            </ul>
       </div>
        <div className="footer-col-1">
            <ul>
                <li><a href="#">Youtube</a></li>
                <li><a href="#">Behance</a></li>
               <li><a href="#">Dribble</a></li>
            </ul>
        </div>
        <div className="footer-col">
            <ul>
                <li><a href="#">Explore open jobs</a></li>
                <li><a href="#"></a></li>
               <li><a href="#">&copy; 2000 - 2023 Company Name</a></li>
            </ul>
        </div>
        </div>
       
    </section>
   </footer>
 )
}
export default Footer;