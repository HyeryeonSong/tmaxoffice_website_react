import { findByLabelText } from "@testing-library/react";
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import "../../css/main.scss";
import img1 from '../../img/img_carousel1.png';

export default function Carousel() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots: any) => (
      <div>
        <ul>
          {dots}
        </ul>        
      </div>
    ),
    dotsClass: 'carousel--dots'
  };
  return (
    <Slider {...settings}>
      <div>
        <img className="carousel--img" src={img1} alt="TmaxOffice 사진" />
      </div>
      <div>
        <img className="carousel--img" src={img1} alt="TmaxOffice 사진" />
      </div>
      <div>
        <img className="carousel--img" src={img1} alt="TmaxOffice 사진" />
      </div>
    </Slider>
  );
}