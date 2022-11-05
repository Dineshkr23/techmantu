import React from "react";
import footerLogo from "../../assets/images/icons/logo.webp";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import emovurLogo from "../../assets/images/icons/emovur-dark.webp";
import emailIcon from "../../assets/images/icons/emailIcon.webp";
import emailSendIcon from "../../assets/images/icons/emailSendIcon.webp";
import { Button } from "../styledComponents/Button";

function Footer() {
  return (
    <>
      <div className="footer row text-white p-5 mt-5">
        <div className="col-md-3">
          <img className="img-fluid mb-3" src={footerLogo} alt="" />
          <p>
            #83, 2nd Floor Alison’s Matnor, 1st Main Roavd, Koramangala 4th
            Block, ST Bed Layout, Bengaluru – 560034
          </p>
          <p>
            +91 80 2552 3335
            <br />
            info@techmantu.com
          </p>
          <p>
            Our 10 years of experience in digital marketing consulting will
            ensure you always get the best guidance for our customers.
          </p>
        </div>
        <div className="col-md-3 px-md-5">
          <div className="footerTitle">
            <h5>Latest Insights</h5>
          </div>
          <ul className="list-unstyled">
            <li>
              <a href="">&gt; Consulting</a>
            </li>
            <li>
              <a href="">&gt; Production</a>
            </li>
            <li>
              <a href="">&gt; Studio</a>
            </li>
            <li>
              <a href="">&gt; Ads</a>
            </li>
            <li>
              <a href="">&gt; Labs</a>
            </li>
          </ul>
        </div>
        <div className="col-md-3">
          <div className="footerTitle">
            <h5>Latest Insights</h5>
          </div>
        </div>
        <div className="col-md-3">
          <div className="footerTitle">
            <h5>Newsletter</h5>
          </div>
          <p>Sign up today for hints, tips and the latest product news</p>
          <form action="" className="mb-3">
            <div className="footerEmailDiv">
                <img src={emailIcon} alt="" />
                <input type="text" placeholder=" Email Address"/>
                <button><img src={emailSendIcon} alt=""/></button>
            </div>
          </form>
          <div className="footerTitle">
            <h5>Follow Us On</h5>
          </div>
          <p>
            <FacebookIcon /> <YouTubeIcon /> <TwitterIcon /> <InstagramIcon />{" "}
            <LinkedInIcon />
          </p>
        </div>
      </div>
      <div className="copyright row p-3 text-center align-items-center justify-content-between">
        <div className="col-sm-7">
          <p>
            Copyrights © {new Date().getFullYear()} All Rights Reserved, Powered
            by{" "}
            <img
              className="img-fluid"
              src={emovurLogo}
              alt=""
              style={{ width: "90px" }}
            />
          </p>
        </div>
        <div className="col-sm-5">
          <div className="row">
            <div className="col-sm-4 my-2 my-sm-0">
              <a href="">Privacy Policy</a>
            </div>
            <div className="col-sm-4">
              <a href="">Terms And Conditions</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
