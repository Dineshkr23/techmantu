import React from 'react';
import '../../assets/styles/common.css';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

function TopStrip() {
  return (
    <>
        <div className="row topStrip">
          <div className="col-md-7">
            <div className="row">
              <div className="col-sm-6 col-lg-auto"><p><PhoneInTalkIcon/> Phone: (+91)80 2552 3335</p></div>
              <div className="col-sm-6 col-lg-auto"><p><EmailIcon/> info@techmantu.com</p></div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="row justify-content-end">
              <div className="col-sm-6 col-lg-auto"><p>Stay Connected :</p></div>
              <div className="col-sm-6 col-lg-auto"><p><FacebookIcon/> <YouTubeIcon/> <TwitterIcon/> <InstagramIcon/> <LinkedInIcon/></p></div>
            </div>
          </div>
        </div>
    </>
  )
}

export default TopStrip