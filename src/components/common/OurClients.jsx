import React from "react";
import Slider from "react-slick";
import clientLogo1 from "../../assets/images/icons/client1.png";
import clientLogo2 from "../../assets/images/icons/client2.png";
import clientLogo3 from "../../assets/images/icons/client3.png";
import clientLogo4 from "../../assets/images/icons/client4.png";
import clientLogo5 from "../../assets/images/icons/client5.png";

function OurClients() {
  var settings = {
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
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
      <div className="sectionHeader">
        <h2>&nbsp;Our Clients</h2>
      </div>
      <div className="container">
        <Slider {...settings} className="px-5">
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
