import React from "react";
import "../assets/styles/services.css";
import TopStrip from "../components/common/TopStrip";
import NavBar from "../components/common/NavBar";
import OurClients from "./common/OurClients";
import digitalMediaIcon from "../assets/images/icons/digitalMedia.png";
import digitalOperationsIcon from "../assets/images/icons/digitalOperations.png";
import dataAnalyticsIcon from "../assets/images/icons/dataAnalytics.png";
import marketingTechIcon from "../assets/images/icons/marketingTech.png";
import { SubHeading } from "../components/styledComponents/Heading.jsx";
import discoveryIcon from "../assets/images/icons/discovery.png";
import leadIcon from "../assets/images/icons/lead.png";
import growthIcon from "../assets/images/icons/growth.png";
import contentIcon from "../assets/images/icons/content.png";
import digitalTransIcon from "../assets/images/icons/digitalTrans.png";
import caseStudyImg2 from "../assets/images/caseStudyImg2.webp";
import caseStudyImg3 from "../assets/images/caseStudyImg3.webp";
import caseStudyImg4 from "../assets/images/caseStudyImg4.webp";
import Testimonials from "./common/Testimonials";
import Footer from "./common/Footer";
import latestInsightsImg1 from "../assets/images/latestInsightsImg1.webp";
import latestInsightsImg2 from "../assets/images/latestInsightsImg2.webp";
import latestInsightsImg3 from "../assets/images/latestInsightsImg3.webp";
import getStartedArrow from "../assets/images/icons/arrow.webp";
import { Button } from "./styledComponents/Button";


function Services() {
  return (
    <>
      <div className="serviceBannerDiv pt-3">
        <TopStrip />
        <div className="navContainer">
          <NavBar />
        </div>
        <div className="container p-5">
          <h1>Techmantu Consulting</h1>
          <p>
            We help clients make core transformations in marketing strategy
            <br /> and operations to power growth through digital advantage.
          </p>
        </div>
      </div>

      <OurClients />

      <div className="container weSimplifyDigital">
        <div className="sectionHeader">
          <h2>We Simplify Digital</h2>
        </div>
        <div className="mb-4">
          <SubHeading primary>Consulting Services</SubHeading>
        </div>
        <div className="row g-4 justify-content-between px-5 p-md-0 text-center text-sm-start">
          <div className="col-sm-5">
            <div className="row">
              <div className="col-sm-auto">
                <img src={digitalMediaIcon} alt="" />
              </div>
              <div className="col-sm-auto">
                <h3>Digital Media Strategy</h3>
              </div>
            </div>
            <p>
              We help our clients understand their current state, provide
              options of future state along with the investments required, come
              up with a roadmap to get there
            </p>
          </div>
          <div className="col-sm-5">
            <div className="row">
              <div className="col-sm-auto">
                <img src={digitalOperationsIcon} alt="" />
              </div>
              <div className="col-sm-auto">
                <h3>Digital Operations</h3>
              </div>
            </div>

            <p>
              We help our clients execute programs to get to the desired future
              state leveraging client team, Techmantu CoEs and third party
              vendors.
            </p>
          </div>
          <div className="col-sm-5">
            <div className="row">
              <div className="col-sm-auto">
                <img src={dataAnalyticsIcon} alt="" />
              </div>
              <div className="col-sm-auto">
                <h3>Data & Analytics</h3>
              </div>
            </div>

            <p>
              We help our clients understand their current state, provide
              options of future state along with the investments required, come
              up with a roadmap to get there
            </p>
          </div>
          <div className="col-sm-5">
            <div className="row">
              <div className="col-sm-auto">
                <img src={marketingTechIcon} alt="" />
              </div>
              <div className="col-sm-auto">
                <h3>Marketing Technology</h3>
              </div>
            </div>

            <p>
              We help our clients execute programs to get to the desired future
              state leveraging client team, Techmantu CoEs and third party
              vendors.
            </p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="sectionHeader">
          <h2>We Help You</h2>
        </div>
        <div className="mb-4">
          <SubHeading>Bootstrap Marketing</SubHeading>
          <p>
            Bootstrap marketing is a great way to maximize a small business
            budget. Some techniques to get more mileage out of your budget.
            Bootstrap marketing is a great way to maximize a small business
            budget. Some techniques to get more mileage out of your budget.
          </p>
        </div>
        <div className="mb-4">
          <SubHeading>Streamline Marketing Operations</SubHeading>
          <p>
            The key to successful Marketing Operations hinges on processes that
            are optimized, standardized, and unified across channels and teams.
            The key to successful Marketing Operations hinges on processes that
            are optimized, standardized, and unified across channels and teams.
          </p>
        </div>
        <div className="mb-4">
          <SubHeading>Scale Marketing</SubHeading>
          <p>
            We'll show you how to scaling your digital marketing agency in the
            new normal without sacrificing quality service or customer
            relationships. We'll show you how to scaling your digital marketing
            agency in the new normal without sacrificing quality service or
            customer relationships.
          </p>
        </div>
      </div>

      <div className="container">
        <div className="sectionHeader">
          <h2>Our Capabilities</h2>
        </div>
        <div className="row g-5 justify-content-around text-center">
          <div className="col-md-3 bg-light p-2 rounded-3">
            <div className="bg-white p-5 rounded-3">
              <img src={discoveryIcon} alt="" />
              <SubHeading>
                Discovery &<br />
                Roadmapping
              </SubHeading>
            </div>
            <p className="p-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod
            </p>
          </div>
          <div className="col-md-3 bg-light p-2 rounded-3">
            <div className="bg-white text-center p-5 rounded-3">
              <img src={discoveryIcon} alt="" />
              <SubHeading>
                Discovery &<br />
                Roadmapping
              </SubHeading>
            </div>
            <p className="p-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod
            </p>
          </div>
          <div className="col-md-3 bg-light p-2 rounded-3">
            <div className="bg-white text-center p-5 rounded-3">
              <img src={discoveryIcon} alt="" />
              <SubHeading>
                Discovery &<br />
                Roadmapping
              </SubHeading>
            </div>
            <p className="p-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod
            </p>
          </div>
          <div className="col-md-4 bg-light p-2 rounded-3">
            <div className="bg-white text-center p-5 rounded-3">
              <img src={discoveryIcon} alt="" />
              <SubHeading>
                Discovery &<br />
                Roadmapping
              </SubHeading>
            </div>
            <p className="p-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod
            </p>
          </div>
          <div className="col-md-4 bg-light p-2 rounded-3">
            <div className="bg-white text-center p-5 rounded-3">
              <img src={discoveryIcon} alt="" />
              <SubHeading>
                Discovery &<br />
                Roadmapping
              </SubHeading>
            </div>
            <p className="p-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod
            </p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="sectionHeader">
          <h2>Impact Stories</h2>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body p-0">
                <img className="img-fluid" src={caseStudyImg2} alt="" />
              </div>
              <div className="card-footer bg-white text-center">
                <h4>Case Study 1</h4>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body p-0">
                <img className="img-fluid" src={caseStudyImg3} alt="" />
              </div>
              <div className="card-footer bg-white text-center">
                <h4>Case Study 2</h4>
              </div>
            </div>
          </div>
          <div className="col-md-4">
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

        <Testimonials/>

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

        <Footer/>
    </>
  );
}

export default Services;
