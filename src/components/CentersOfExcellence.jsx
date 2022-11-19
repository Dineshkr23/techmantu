import React from "react";
import "../assets/styles/centersOfExcellence.css";
import TopStrip from "../components/common/TopStrip";
import NavBar from "../components/common/NavBar";
import OurClients from "../components/common/OurClients";
import { SubHeading } from "./styledComponents/Heading";
import Testimonials from "./common/Testimonials";
import Footer from "./common/Footer";
import { Button } from "./styledComponents/Button";
import latestInsightsImg1 from "../assets/images/latestInsightsImg1.webp";
import latestInsightsImg2 from "../assets/images/latestInsightsImg2.webp";
import latestInsightsImg3 from "../assets/images/latestInsightsImg3.webp";
import discoveryIcon from "../assets/images/icons/discovery.png";

function CentersOfExcellence() {
  return (
    <>
      <div className="labsBannerDiv pt-3">
        <TopStrip />
        <div className="navContainer">
          <NavBar />
        </div>
        <div className="labsHeadingDiv">
          <h1>Techmantu Labs</h1>
          <p>
            Techmantu Data & Analytics Center of Excellence <br /> aims to help
            organizations turbocharge their growth <br /> leveraging data,
            analytics & technology.
          </p>
        </div>
      </div>

      <OurClients />

      <div className="container text-center">
        <div className="sectionHeader">
          <h2>In Data We Trust</h2>
        </div>
        <div className="row align-items-center justify-content-evenly">
          <div className="col-sm-5 dataTrustDiv1">
            <SubHeading>Our Vision</SubHeading>
            <p className="mt-4">
              In todays digital world each interaction of your people with your
              systems offers you an opportunity to capture the data and use that
              to serve them better while improving your business profitability.
              We help you setup interactions which will enable you to capture
              the relevant information, build insights out of the data captured
              and take the next steps in a favourable manner
            </p>
          </div>
          <div className="col-sm-5 dataTrustDiv2">
            <p>
              “What sets Techmantu Labs apart --Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo.”
            </p>
            <p>
              Benjamin Niju Benjamin, <br /> Director of Consulting & Labs
            </p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="sectionHeader">
          <h2>
            How We Help Techmantu Be <br /> Your Ideal Digital Marketing Partner
          </h2>
        </div>
        <div className="text-center">
          <p>
            We design and setup marketing stacks for the digital marketers to
            execute, measure, and optimize the impact of your digital programs.
          </p>
          <p>
            We develop custom measurement models to make your marketing programs
            truly data centric.
          </p>
          <p>
            We process, cleanse, and enhance data collection to help you make
            better decisions with data you can trust.
          </p>
          <p>
            We analyze, report, and present actionable insights to optimize and
            improve the performance of your digital programs.
          </p>
          <p>
            We design and develop custom technology and data solutions to
            measure and support CRO strategies, growth marketing, experiments,
            and tests.
          </p>
          <p>
            We will help you develop technical, on-page, and off-page SEO
            strategies to overcome the challenges of a dynamically evolving
            search landscape.
          </p>
        </div>
      </div>

      <div className="container">
        <div className="sectionHeader">
          <h2>Our Strengths</h2>
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
            <Button>READ MORE</Button>
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
            <Button>READ MORE</Button>
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
            <Button>READ MORE</Button>
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
            <Button>READ MORE</Button>
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
            <Button>READ MORE</Button>
          </div>
        </div>
      </div>

      <Testimonials />

      <div className="insightsSection">
        <div className="sectionHeader">
          <h2>Related Insights</h2>
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

      <Footer />
    </>
  );
}

export default CentersOfExcellence;
