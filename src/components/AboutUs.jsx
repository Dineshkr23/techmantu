import React from "react";
import "../assets/styles/aboutUs.css";
import TopStrip from "../components/common/TopStrip";
import NavBar from "../components/common/NavBar";
import ceoImage from "../assets/images/Layer 36.webp";
import Testimonials from "./common/Testimonials";
import studioIcon from "../assets/images/icons/studio.webp";
import labsIcon from "../assets/images/icons/labs.webp";
import adsIcon from "../assets/images/icons/ads.webp";
import { SubHeading } from "./styledComponents/Heading";
import { Button } from "./styledComponents/Button";
import servicesImg1 from "../assets/images/servicesImg1.webp";
import servicesImg2 from "../assets/images/servicesImg2.webp";
import OurClients from "./common/OurClients";
import Footer from "./common/Footer";

function AboutUs() {
  return (
    <>
      <div className="aboutUsLandingDiv">
        <TopStrip />
        <div className="navContainer">
          <NavBar />
        </div>
        <h1>We Simplify Digital</h1>
      </div>

      <div className="container">
        <div className="sectionHeader">
          <h2>About Techmantu</h2>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate.
        </p>
      </div>

      <div className="container">
        <div className="sectionHeader">
          <h2>How We Create Value</h2>
        </div>
        <div className="row justify-content-evenly">
          <div className="col-sm-3">
            <img src={ceoImage} alt="ceoImg" className="img-fluid" />
          </div>
          <div className="col-sm-8 bg-secondary text-white p-5 rounded-4">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate
            </p>
            <p className="text-end">
              Muru Chigateri, <br /> Founder & CEO, Techmantu Digital
            </p>
          </div>
        </div>
      </div>

      <Testimonials/>

      <div className="">
        <div className="sectionHeader">
            <h2>Techmantu Core Values</h2>
        </div>
        <div className="techCoreValues row bg-light justify-content-evenly p-5 py-md-4 text-center text-sm-start">
            <div className="col-sm-3 bg-white p-3 mb-4 mb-md-0 rounded-3">
              <div>
                <img src={studioIcon} alt="" />
              </div>
              <SubHeading primary>Studio</SubHeading>
              <p>Lorem Ipsum is simply dummy text of the printing</p>
              <Button primary>READ MORE</Button>
            </div>
            <div className="col-sm-3 bg-white p-3 mb-4 mb-md-0 rounded-3">
              <div>
                <img src={labsIcon} alt="" />
              </div>
              <SubHeading primary>Labs</SubHeading>
              <p>Lorem Ipsum is simply dummy text of the printing</p>
              <Button primary>READ MORE</Button>
            </div>
            <div className="col-sm-3 bg-white p-3 mb-4 mb-md-0 rounded-3">
              <div>
                <img src={adsIcon} alt="" />
              </div>
              <SubHeading primary>Ads</SubHeading>
              <p>Lorem Ipsum is simply dummy text of the printing</p>
              <Button primary>READ MORE</Button>
            </div>
          </div>
          <div className="techCoreValues row bg-light justify-content-evenly p-5 py-md-4 text-center text-sm-start">
            <div className="col-sm-3 bg-white p-3 mb-4 mb-md-0 rounded-3">
              <div>
                <img src={studioIcon} alt="" />
              </div>
              <SubHeading primary>Studio</SubHeading>
              <p>Lorem Ipsum is simply dummy text of the printing</p>
              <Button primary>READ MORE</Button>
            </div>
            <div className="col-sm-3 bg-white p-3 mb-4 mb-md-0 rounded-3">
              <div>
                <img src={labsIcon} alt="" />
              </div>
              <SubHeading primary>Labs</SubHeading>
              <p>Lorem Ipsum is simply dummy text of the printing</p>
              <Button primary>READ MORE</Button>
            </div>
            <div className="col-sm-3 bg-white p-3 mb-4 mb-md-0 rounded-3">
              <div>
                <img src={adsIcon} alt="" />
              </div>
              <SubHeading primary>Ads</SubHeading>
              <p>Lorem Ipsum is simply dummy text of the printing</p>
              <Button primary>READ MORE</Button>
            </div>
          </div>
      </div>

      <div className="container">
          <div className="sectionHeader">
            <h2>Our Strengths</h2>
          </div>
          <div className="row m-auto text-center">
            <div className="col-lg-6 position-relative servicesDiv1">
              <img
                className="servicesImg img-fluid"
                src={servicesImg1}
                alt=""
              />
              <div className="servicesLowerDiv">
                <h4>Transform Your Digital Marketing</h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <Button>LEARN MORE</Button>
              </div>
            </div>
            <div className="col-lg-6 position-relative servicesDiv2">
              <img
                className="servicesImg img-fluid"
                src={servicesImg2}
                alt=""
              />
              <div className="servicesLowerDiv">
                <h4>Build Impactful Assets</h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <Button>LEARN MORE</Button>
              </div>
            </div>
            <div className="col-lg-6 position-relative servicesDiv1">
              <img
                className="servicesImg img-fluid"
                src={servicesImg1}
                alt=""
              />
              <div className="servicesLowerDiv">
                <h4>Transform Your Digital Marketing</h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <Button>LEARN MORE</Button>
              </div>
            </div>
            <div className="col-lg-6 position-relative servicesDiv2">
              <img
                className="servicesImg img-fluid"
                src={servicesImg2}
                alt=""
              />
              <div className="servicesLowerDiv">
                <h4>Build Impactful Assets</h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <Button>LEARN MORE</Button>
              </div>
            </div>
          </div>
        </div>

      <OurClients/>

      <div className="container ourTeam">
        <div className="sectionHeader">
            <h2>Our Team</h2>
        </div>
        <div className="row mb-4 justify-content-center">
        <div className="col-sm-3">
                <div className="card">
                    <img src={ceoImage} className="card-img-top" alt="" />
                    <div className="card-body">
                        <h5 className="card-title text-center">Abcd</h5>
                    </div>
                </div>
            </div>
        </div>
        <div className="row gy-4">
            <div className="col-sm-3">
                <div className="card">
                    <img src={ceoImage} className="card-img-top" alt="" />
                    <div className="card-body">
                        <h5 className="card-title text-center">Abcd</h5>
                    </div>
                </div>
            </div>
            <div className="col-sm-3">
                <div className="card">
                    <img src={ceoImage} className="card-img-top" alt="" />
                    <div className="card-body">
                        <h5 className="card-title text-center">Abcd</h5>
                    </div>
                </div>
            </div>
            <div className="col-sm-3">
                <div className="card">
                    <img src={ceoImage} className="card-img-top" alt="" />
                    <div className="card-body">
                        <h5 className="card-title text-center">Abcd</h5>
                    </div>
                </div>
            </div>
            <div className="col-sm-3">
                <div className="card">
                    <img src={ceoImage} className="card-img-top" alt="" />
                    <div className="card-body">
                        <h5 className="card-title text-center">Abcd</h5>
                    </div>
                </div>
            </div>
            <div className="col-sm-3">
                <div className="card">
                    <img src={ceoImage} className="card-img-top" alt="" />
                    <div className="card-body">
                        <h5 className="card-title text-center">Abcd</h5>
                    </div>
                </div>
            </div>
            <div className="col-sm-3">
                <div className="card">
                    <img src={ceoImage} className="card-img-top" alt="" />
                    <div className="card-body">
                        <h5 className="card-title text-center">Abcd</h5>
                    </div>
                </div>
            </div>
            <div className="col-sm-3">
                <div className="card">
                    <img src={ceoImage} className="card-img-top" alt="" />
                    <div className="card-body">
                        <h5 className="card-title text-center">Abcd</h5>
                    </div>
                </div>
            </div>
            <div className="col-sm-3">
                <div className="card">
                    <img src={ceoImage} className="card-img-top" alt="" />
                    <div className="card-body">
                        <h5 className="card-title text-center">Abcd</h5>
                    </div>
                </div>
            </div>
        </div>
      </div>

      <Footer/>
    </>
  );
}

export default AboutUs;
