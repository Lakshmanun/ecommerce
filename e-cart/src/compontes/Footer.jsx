import React from 'react'
import Logo from '../assect/Logo.svg';
import { BsTwitter,BsYoutube } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa";
export default function Footer() {
  return (
    <div>
     
     <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="" />
        </div>
        <div className="footer-icons"> 
            <h2 className='primary-subheading'> contact us with </h2>
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Qualtiy</span>
          <span>Help</span>
          <span>Share</span>
          <span>Carrers</span>
          <span>Testimonials</span>
          <span>Work</span>
        </div>
        <div className="footer-section-columns">
          <span>244-5333-7783</span>
          <span>77/A</span>
          <span>Nawala,Colombo</span>
          <span>foodie@gmail.com</span>
        </div>
        <div className="footer-section-columns">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </div>
   
    </div>
  )
}
