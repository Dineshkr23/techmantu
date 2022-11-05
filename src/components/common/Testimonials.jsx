import React, { Component } from "react";
import Slider from "react-slick";
import ceoImg from "../../assets/images/Layer 36.webp";
import { SubHeading } from ".././styledComponents/Heading";

export default class Testimonials extends Component {
  render() {
    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1201,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
      ],
    };
    return (
      <div className="container testimonialContainer">
        <div className="sectionHeader">
          <h2>From Our Happy Clients</h2>
        </div>
        <Slider {...settings}>
          <div className="testimonialDiv">
            <img src={ceoImg} alt="img here" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad
            </p>
            <SubHeading>Allen Duckeat</SubHeading>
            <SubHeading primary>Company</SubHeading>
          </div>
          <div className="testimonialDiv">
            <img src={ceoImg} alt="img here" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad
            </p>
            <SubHeading>Allen Duckeat</SubHeading>
            <SubHeading primary>Company</SubHeading>
          </div>
          <div className="testimonialDiv">
            <img src={ceoImg} alt="img here" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad
            </p>
            <SubHeading>Allen Duckeat</SubHeading>
            <SubHeading primary>Company</SubHeading>
          </div>
          <div className="testimonialDiv">
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
