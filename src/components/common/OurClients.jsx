import React from "react";
import Slider from "react-slick";
import clientLogo1 from "../../assets/images/icons/client1.webp";
import clientLogo2 from "../../assets/images/icons/client2.webp";
import clientLogo3 from "../../assets/images/icons/client3.webp";
import clientLogo4 from "../../assets/images/icons/client4.webp";
import clientLogo5 from "../../assets/images/icons/client5.webp";

function OurClients() {
  var settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
        {
            breakpoint: 1401,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
            },
        },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className="container clientSliderContainer">
      <div className="sectionHeader">
        <h2>&nbsp;Our Clients</h2>
      </div>
      <div>
        <Slider {...settings} className="px-2 px-md-5">
          <div className="clientsSliderDiv">
            <img src={clientLogo1} alt="" />
          </div>
          <div className="clientsSliderDiv">
            <img src={clientLogo2} alt="" />
          </div>
          <div className="clientsSliderDiv">
            <img src={clientLogo3} alt="" />
          </div>
          <div className="clientsSliderDiv">
            <img src={clientLogo4} alt="" />
          </div>
          <div className="clientsSliderDiv">
            <img src={clientLogo5} alt="" />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default OurClients;
