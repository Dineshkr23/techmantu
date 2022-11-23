import React, { useState } from "react";
import NavBar from "./common/NavBar";
import TopStrip from "./common/TopStrip";
import "../assets/styles/contactUs.css";
import { FormButton } from "../components/styledComponents/Button";
import Footer from "../components/common/Footer";
import Iframe from "react-iframe";
import visitIcon from "../assets/images/icons/visit.webp";
import callIcon from "../assets/images/icons/call.webp";
import Layout from "../layout/Layout";

function ContactUs() {
  // state for storing user details
  let [userData, setUserData] = useState({
    name : '',
    email : '',
    phone : '',
    subject : '',
    message : ''
  });

  // handler for storing user details
  const getUserDetails = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  // handler for submitting user details
  const submitUserData = (e)=> {
    e.preventDefault();
    console.log(userData);
  }

  return (
    <>
      <Layout>  
        <div className="contactUsDiv pt-3">
          {/* <TopStrip /> */}
          {/* <div className="navContainer">
            <NavBar />
          </div> */}
          <h1>Contact Us</h1>
        </div>
        <div className="contactUsBreadCrumDiv">
          <div>
            <a href="home">Home</a>
            <span> &gt;</span>
            <a href="contactUs"> Contact Us</a>
          </div>
        </div>

        <div className="container text-center">
          <div className="sectionHeader">
            <h2>Get In Touch With Us</h2>
          </div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s.
          </p>
          <div className="row justify-content-center">
            <div className="col-sm-4 getInTouchDiv">
              <div className="card bg-light">
                <div className="sectionHeader mt-5">
                  <img src={visitIcon} alt="" className="getInTouchIcon" />
                  <h2>Visit Our Place</h2>
                </div>
                <p className="px-5">
                  #83, 2nd Floor Alison’s Matnor, 1st Main Roavd, Koramangala 4th
                  Block, ST Bed Layout, Bengaluru – 34
                </p>
              </div>
            </div>
            <div className="col-sm-4 getInTouchDiv">
              <div className="card bg-light">
                <div className="sectionHeader mt-5">
                  <img src={callIcon} alt="" className="getInTouchIcon" />
                  <h2>Quick Contact</h2>
                </div>
                <p className="px-5">
                  Ph: +91 80 2552 3335 Email: info@techmantu.com
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="sectionHeader">
            <h2>Send Us Your Message</h2>
          </div>
          <form action="">
            <div className="row g-4 justify-content-center">
              <div className="col-md-5">
                <input
                  type="text"
                  placeholder="Your Name*"
                  className="form-control"
                  name="name"
                  onChange={getUserDetails}
                />
              </div>
              <div className="col-md-5">
                <input
                  type="email"
                  id=""
                  placeholder="Your Email*"
                  className="form-control"
                  name="email"
                  onChange={getUserDetails}
                />
              </div>
              <div className="col-md-5">
                <input
                  type="number"
                  placeholder="Phone"
                  className="form-control"
                  name="phone"
                  onChange={getUserDetails}
                />
              </div>
              <div className="col-md-5">
                <input
                  type="text"
                  placeholder="Subject"
                  className="form-control"
                  name="subject"
                  onChange={getUserDetails}
                />
              </div>
              <div className="col-10">
                <textarea
                  id=""
                  cols="50"
                  rows="5"
                  placeholder="Your Message..."
                  className="form-control"
                  name="message"
                  onChange={getUserDetails}
                ></textarea>
              </div>
              <div className="col-md-10 text-center">
                <FormButton primary onClick={submitUserData}>SUBMIT</FormButton>
              </div>
            </div>
          </form>
        </div>

        <div className="mt-5">
          <Iframe
            url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3846.6863685717267!2d77.62807495054253!3d12.935045663712181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae145d553efad7%3A0xedcffb5ed3e59e02!2sTechmantu%20Digital!5e0!3m2!1sen!2sin!4v1668777310961!5m2!1sen!2sin"
            width="100%"
            height="400px"
            allowfullscreen=""
            loading="lazy"
          />
        </div>

        {/* <Footer /> */}
      </Layout>
    </>
  );
}

export default ContactUs;
