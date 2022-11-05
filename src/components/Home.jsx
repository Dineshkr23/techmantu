import React, { useEffect, useState } from "react";
import "../assets/styles/home.css";
import "../assets/styles/common.css";
import sliderImg1 from "../assets/images/homeSliderImage1.webp";
import simplifyDgtlImg from "../assets/images/Layer 35.webp";
import ceoImg from "../assets/images/Layer 36.webp";
import caseStudyImg from "../assets/images/Layer 39.webp";
import caseStudyImg2 from "../assets/images/caseStudyImg2.webp";
import caseStudyImg3 from "../assets/images/caseStudyImg3.webp";
import caseStudyImg4 from "../assets/images/caseStudyImg4.webp";
import frameworkIcon from "../assets/images/icons/framework.webp";
import programIcon from "../assets/images/icons/program.webp";
import methodologyIcon from "../assets/images/icons/methodology.webp";
import engagementIcon from "../assets/images/icons/engagement.webp";
import studioIcon from "../assets/images/icons/studio.webp";
import labsIcon from "../assets/images/icons/labs.webp";
import adsIcon from "../assets/images/icons/ads.webp";
import getStartedArrow from "../assets/images/icons/arrow.webp";
import servicesImg1 from "../assets/images/servicesImg1.webp";
import servicesImg2 from "../assets/images/servicesImg2.webp";
import latestInsightsImg1 from "../assets/images/latestInsightsImg1.webp";
import latestInsightsImg2 from "../assets/images/latestInsightsImg2.webp";
import latestInsightsImg3 from "../assets/images/latestInsightsImg3.webp";

import { Button } from "./styledComponents/Button";
import { SubHeading } from "./styledComponents/Heading";

import TopStrip from "./common/TopStrip";
import NavBar from "./common/NavBar";
import Footer from "./common/Footer";
import OurClients from "./common/OurClients";
import Testimonials from "./common/Testimonials";

function Home() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1363);
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => {
        const ismobile = window.innerWidth < 1363;
        if (ismobile !== isMobile) setIsMobile(ismobile);
      },
      false
    );
  }, [isMobile]);
  return (
    <>
      {/* Header */}
      <div className="header">
        <TopStrip />
        <NavBar />
      </div>

      {/* Main content section */}
      <div>
        <div className="landingSliderContainer">
          <div
            id="carouselHome"
            className="carousel slide landingSliderDiv"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src={sliderImg1}
                  className={isMobile ? "w-auto" : "w-100"}
                  alt="..."
                />
                <div className="layer"></div>
                <div className="landingText">
                  <h1>We Help You Grow in a</h1>
                  <span className="redBox">
                    <h1>Predictable & Sustainable Way</h1>
                  </span>
                  <p>Lorem ipsum is simply dummy text of the printing.</p>
                  <button>LEARN MORE</button>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src={sliderImg1}
                  className={isMobile ? "w-auto" : "w-100"}
                  alt="..."
                />
                <div className="layer"></div>
                <div className="landingText">
                  <h1>We Help You Grow in a</h1>
                  <span className="redBox">
                    <h1>Predictable & Sustainable Way</h1>
                  </span>
                  <p>Lorem ipsum is simply dummy text of the printing.</p>
                  <button>LEARN MORE</button>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src={sliderImg1}
                  className={isMobile ? "w-auto" : "w-100"}
                  alt="..."
                />
                <div className="layer"></div>
                <div className="landingText">
                  <h1>We Help You Grow in a</h1>
                  <span className="redBox">
                    <h1>Predictable & Sustainable Way</h1>
                  </span>
                  <p>Lorem ipsum is simply dummy text of the printing.</p>
                  <button>LEARN MORE</button>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev carouselBtn"
              type="button"
              data-bs-target="#carouselHome"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon carouselIcon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next carouselBtn"
              type="button"
              data-bs-target="#carouselHome"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon carouselIcon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        {/* Our clients section */}
        <OurClients />

        {/* How We Help Our Clients Section */}
        <div className="text-center">
          <div className="sectionHeader">
            <h2>How We Help Our Clients</h2>
          </div>
          <div className="helpOurClient_Div">
            <div className="row justify-content-evenly">
              <div className="col-md-4 mb-4 mb-md-0 helpOurClientCols">
                <p>Reduce Marketing Spend</p>
                <h1>30-50%</h1>
              </div>
              <div className="col-md-4 helpOurClientCols">
                <p>Increase Revenue</p>
                <h1>&gt;50%</h1>
              </div>
            </div>
          </div>
        </div>

        {/* Our services section */}
        <div className="container">
          <div className="sectionHeader">
            <h2>Our Services</h2>
          </div>
          <p className="text-center px-5 pb-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
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
          </div>
        </div>

        {/*Ideal Digital Partner section */}
        <div className="container idealDigitalDiv">
          <div className="sectionHeader">
            <h2>What Makes Us Your Ideal Digital Partner</h2>
          </div>
          <div className="row g-4 justify-content-evenly px-5 p-md-0 text-center text-sm-start">
            <div className="col-sm-5">
              <div className="row">
                <div className="col-sm-auto">
                  <img src={frameworkIcon} alt="" />
                </div>
                <div className="col-sm-auto">
                  <h3>Our Framework</h3>
                </div>
              </div>
              {/* <h3><img src={frameworkIcon} alt="" /> Our Framework</h3> */}
              <p>
                At the broad level, we focus on the following aspects of digital
                media – Strategy, Measurement, Infrastructure and Enablement.
              </p>
            </div>
            <div className="col-sm-5">
              <div className="row">
                <div className="col-sm-auto">
                  <img src={programIcon} alt="" />
                </div>
                <div className="col-sm-auto">
                  <h3>Program Governance</h3>
                </div>
              </div>
              {/* <h3><img src={programIcon} alt="" /> Program Governance</h3> */}
              <p>
                At the broad level, we focus on the following aspects of digital
                media – Strategy, Measurement, Infrastructure and Enablement.
              </p>
            </div>
            <div className="col-sm-5">
              <div className="row">
                <div className="col-sm-auto">
                  <img src={methodologyIcon} alt="" />
                </div>
                <div className="col-sm-auto">
                  <h3>Methodology</h3>
                </div>
              </div>
              {/* <h3><img src={methodologyIcon} alt="" /> Methodology</h3> */}
              <p>
                At the broad level, we focus on the following aspects of digital
                media – Strategy, Measurement, Infrastructure and Enablement.
              </p>
            </div>
            <div className="col-sm-5">
              <div className="row">
                <div className="col-sm-auto">
                  <img src={engagementIcon} alt="" />
                </div>
                <div className="col-sm-auto">
                  <h3>Engagement Model</h3>
                </div>
              </div>
              {/* <h3><img src={engagementIcon} alt="" /> Engagement Model</h3> */}
              <p>
                At the broad level, we focus on the following aspects of digital
                media – Strategy, Measurement, Infrastructure and Enablement.
              </p>
            </div>
          </div>
        </div>

        {/*Centers of Excellence section */}
        <div className="centerExcellenceDiv">
          <div className="sectionHeader">
            <h2>Techmantu Centers of Excellence</h2>
          </div>
          <div className="row bg-light justify-content-evenly p-5 py-md-4 text-center text-sm-start">
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

        {/* We simplify digital */}
        <div className="row py-5 align-items-center simplifyDigitalDiv">
          <img className="col-lg-6 img-fluid" src={simplifyDgtlImg} alt="" />
          <div className="col-lg-6 p-5">
            <SubHeading>We Simplify Digital</SubHeading>
            <p>
              We are a boutique digital consultancy, and we focus on providing
              strategy and operations support for digital marketing and content
              transformation services to our clients.
              <br />
              <br /> Our team is made up of consultants, designers, ad experts,…
            </p>
            <Button primary>LEARN MORE</Button>
          </div>
        </div>

        {/* techmantu ceo profile section */}
        <div className="row px-5 g-5 justify-content-center align-items-center text-sm-start text-center">
          <img
            className="col-sm-3"
            style={{ height: "249px", width: "250px" }}
            src={ceoImg}
            alt=""
          />
          <div
            className="col-sm-9 text-white rounded-4 p-5"
            style={{ background: "#c02529" }}
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate
            </p>
            <p className="text-end">
              ~ Muru Chigateri,
              <br />
              Founder & CEO, Techmantu Digital
            </p>
          </div>
        </div>

        {/* How to get started section */}
        <div>
          <div className="sectionHeader">
            <h2>How To Get Started</h2>
          </div>
          <div className="row justify-content-center px-5">
            <div className="col-md-3 m-4 bg-light rounded-3 p-4 getStartedCols">
              <SubHeading primary>Assessment Questions</SubHeading>
              <p>
                In this step, you are requested to answer an inbound assessment
                questionnaire that contains about 15 questions.
              </p>
              <img
                className="getStartedArrow getStartedArrow1"
                src={getStartedArrow}
                alt=""
              />
            </div>
            <div className="col-md-3 m-4 bg-light rounded-3 p-4 getStartedCols">
              <SubHeading primary>Inbound Potential</SubHeading>
              <p>
                Basis your questionnaire response, a FREE inbound potential
                discussion document is created that estimates the revenue
                potential we see.
              </p>
              <img
                className="getStartedArrow getStartedArrow2"
                src={getStartedArrow}
                alt=""
              />
            </div>
            <div className="col-md-3 m-4 bg-light rounded-3 p-4">
              <SubHeading primary>The Proposal</SubHeading>
              <p>
                Only if there is a case for revenue and commensurate ROI, a
                proposal is drafted considering your constraints, if any.
              </p>
            </div>
          </div>
        </div>

        {/* Impact stories section */}
        <div className="impactStories">
          <div className="sectionHeader">
            <h2>Impact Stories</h2>
          </div>
          <div className="row py-5 align-items-center impactStoriesActiveDiv">
            <img className="col-lg-6 img-fluid" src={caseStudyImg} alt="" />
            <div className="col-lg-6 p-5">
              <SubHeading primary>Case Study</SubHeading>
              <p>
                How we helped an India based L&D service provider built an
                organic lead generation engine which helped them increase their
                return on marketing spend by 10x
              </p>
              <Button primary>LEARN MORE</Button>
            </div>
          </div>
          <div className="row gy-5 justify-content-center">
            <div className="col-md-3">
              <div className="card">
                <div className="card-body p-0">
                  <img className="img-fluid" src={caseStudyImg2} alt="" />
                </div>
                <div className="card-footer bg-white text-center">
                  <h4>Case Study 1</h4>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <div className="card-body p-0">
                  <img className="img-fluid" src={caseStudyImg3} alt="" />
                </div>
                <div className="card-footer bg-white text-center">
                  <h4>Case Study 2</h4>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <div className="card-body p-0">
                  <img className="img-fluid" src={caseStudyImg4} alt="" />
                </div>
                <div className="card-footer bg-white text-center">
                  <h4>Case Study 3</h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials section */}
        <Testimonials />

        {/* insights section */}
        <div className="insightsSection">
          <div className="sectionHeader">
            <h2>Latest Insights</h2>
          </div>
          <div className="row justify-content-center align-items-center">
            <div className="col-md-3">
              <div className="card">
                <div className="card-body p-0 position-relative">
                  <img className="img-fluid" src={latestInsightsImg1} alt="" />
                  <Button primary className="position-absolute top-0 end-0">
                    03
                    <br />
                    Oct
                  </Button>
                </div>
                <div className="card-footer bg-white">
                  <p>by admin | Blogs V1</p>
                  <h4>Retail banks wake up to digital</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua....
                  </p>
                  <div className="d-flex justify-content-between border-top pt-1">
                    <a href="" className="text-decoration-none text-black">
                      Read More
                    </a>
                    <p>0 Comments</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <div className="card-body p-0 position-relative">
                  <img className="img-fluid" src={latestInsightsImg2} alt="" />
                  <Button primary className="position-absolute top-0 end-0">
                    03
                    <br />
                    Oct
                  </Button>
                </div>
                <div className="card-footer bg-white">
                  <p>by admin | Blogs V1</p>
                  <h4>Retail banks wake up to digital</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua....
                  </p>
                  <div className="d-flex justify-content-between border-top pt-1">
                    <a href="" className="text-decoration-none text-black">
                      Read More
                    </a>
                    <p>0 Comments</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <div className="card-body p-0 position-relative">
                  <img className="img-fluid" src={latestInsightsImg3} alt="" />
                  <Button primary className="position-absolute top-0 end-0">
                    03
                    <br />
                    Oct
                  </Button>
                </div>
                <div className="card-footer bg-white">
                  <p>by admin | Blogs V1</p>
                  <h4>Retail banks wake up to digital</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua....
                  </p>
                  <div className="d-flex justify-content-between border-top pt-1">
                    <a href="" className="text-decoration-none text-black">
                      Read More
                    </a>
                    <p>0 Comments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer  */}
      <Footer />
    </>
  );
}

export default Home;
