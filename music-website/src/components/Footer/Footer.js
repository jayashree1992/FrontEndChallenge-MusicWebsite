import React from 'react';
import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PinterestIcon from '@material-ui/icons/Pinterest';
import EmojiSymbolsIcon from '@material-ui/icons/EmojiSymbols';
import './_footer.scss';

const Footer = () => (
  <>
    <div className="d-flex flex-column footer-header">
      <div className="col-12">
        <div className="seperator" />
        <EmojiSymbolsIcon className="footer-icon" />
        <div className="text-style-one">GET IN TOUCH</div>
        <div className="text-style-two">SAY HELLO!</div>
      </div>

      <div className="col-12">
        <div className="address">Suite Number, Building Name, Street Name, State, Pin Code - 00000</div>
        <div className="mt-2">
          <span>
            <CallIcon className="call-email-icon" />
            <span className="address mr-4">0.000.000.0000</span>
          </span>
          <span>
            <EmailIcon className="call-email-icon" />
            <span className="address">topbeats@gmail.com</span>
          </span>
        </div>
        <div className="text-style-one mt-4">CONNECT WITH US</div>
        <div className="social-icons">
          <a href="#"><FacebookIcon /></a>
          <a href="#"><TwitterIcon /></a>
          <a href="#"><InstagramIcon /></a>
          <a href="#"><LinkedInIcon /></a>
          <a href="#"> <PinterestIcon /></a>
        </div>
      </div>
    </div>
  </>
);

export default Footer;
