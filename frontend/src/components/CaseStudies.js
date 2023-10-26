import React from "react";
import Slider from "react-slick";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import rectangle1 from './assets/Rectangle1.svg';
import olympian from '../Images/olympian.jpeg';
import dragon from '../Images/dragon.jpeg';
import skhokho from '../Images/skhokho.jpeg';
import './CaseStudy.css';

function CaseStudies(){
  const responsive = {
    superLargeDesktop: {
      breakpoint: {max: 4000, min: 3000},
      items: 5
    },
    desktop:{
      breakpoint: {max: 3000, min: 1440},
      items: 3
    },
    tablet: {
      breakpoint: {max: 1440, min: 464},
      items: 3
    },
    mobile: {
      breakpoint: {max: 464, min: 0},
      items: 3
    }
  };
  return(
    <section id="CaseStudies">
      <div className="container">
        <div className="subtitle">
          <span>
            <img src={rectangle1} alt="Subtitle icon" className="subtitle-icon"></img>
            <h4 className="subtitle-text">Case Studies</h4>
          </span>
        </div>
      </div>
      <div className="caseStudy">
       <Carousel responsive={responsive}>
            <div className="card">
                      <img className="card-square" src={olympian}></img>
                      <h3 className="card-title">The Olympian</h3>
                      <p>
                        The only athlete in the world to do her Olympic routine in 2020.
                      </p>
            </div>
            <div className="card">
                      <img className="card-square" src={dragon}></img>
                      <h3 className="card-title">The Savings Jar</h3>
                      <p>
                        Grow your savings treasure and grow your dragon.
                      </p>
            </div>
            <div className="card">
                      <img className="card-square" src={skhokho}></img>
                      <h3 className="card-title">Skhokho seMali</h3>
                      <p>
                        Helping South Africans become #CashCleva with skhokho and TymeBank.
                      </p>
            </div>
       </Carousel>
      </div>
    </section>
  )
}
export default CaseStudies;