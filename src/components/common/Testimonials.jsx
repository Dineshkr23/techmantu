import React, { Component } from "react";
import Slider from "react-slick";
import ceoImg from "../../assets/images/Layer 36.png";
import { SubHeading } from ".././styledComponents/Heading";

export default class Testimonials extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 1000,
      arrows: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
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
    return (
      <div>
        <Slider {...settings}>
          <div className="testimonialDiv w-75">
            <img src={ceoImg} alt="img here" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad
            </p>
            <SubHeading>Allen Duckeat</SubHeading>
            <SubHeading primary>Company</SubHeading>
          </div>
          <div className="testimonialDiv w-75">
            <img src={ceoImg} alt="img here" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad
            </p>
            <SubHeading>Allen Duckeat</SubHeading>
            <SubHeading primary>Company</SubHeading>
          </div>
          <div className="testimonialDiv w-75">
            <img src={ceoImg} alt="img here" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad
            </p>
            <SubHeading>Allen Duckeat</SubHeading>
            <SubHeading primary>Company</SubHeading>
          </div>
        </Slider>
      </div>
    );
  }
}
