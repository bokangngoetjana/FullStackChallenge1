import React from "react";
import Slider from "react-slick";
import rectangle1 from './assets/Rectangle1.svg';
import olympian from '../Images/olympian.jpeg';
import dragon from '../Images/dragon.jpeg';
import skhokho from '../Images/skhokho.jpeg';
import './CaseStudy.css';

function CaseStudies(){
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
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
        <Slider {...settings}>
          <div className="caseStudyInner">
            <img src={olympian} alt="olympian image"></img>
          </div>
          <div className="caseStudyInner">
            <img src={dragon} alt="dragon image"></img>
          </div>
          <div className="caseStudyInner">
            <img src={skhokho} alt="skhokho image"></img>
          </div>
        </Slider>
      </div>
    </section>
  )
}
export default CaseStudies;