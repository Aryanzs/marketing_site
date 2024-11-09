import React from 'react';
import insta from "../assets/figma images/Instagram.png";
import fb from "../assets/figma images/Facebook.png";
import bgimg from "../assets/figma images/Footer design.png";
import kifayti from "../assets/figma images/kifaytifooterlogo 1.png";

const Footer = () => {
  return (
    <footer className="text-white py-16 relative overflow-hidden">
      {/* Background Image */}
      <img
        src={bgimg}
        alt="Background Design"
        className="absolute inset-0 w-full h-full object-cover  z-0"
      />

      {/* Content Wrapper */}
      <div className="relative z-10 container mx-auto px-4 flex flex-col md:flex-row flex-wrap justify-between space-y-12 md:space-y-0">
        {/* Left Section */}
        <div className="w-full md:w-1/3 lg:w-1/4 space-y-4">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <img
              src={kifayti}
              alt="Kifayti Logo"
              className="w-8 h-8 mr-2"
            />
            Kifayti Health
          </h2>
          <address className="not-italic leading-relaxed">
            <p>8/2, Beratan Agrahara Chikkabegur, Bangalore,</p>
            <p>Karnataka 560100</p>
          </address>
          <p className="mt-4 text-sm">
            <span className="font-semibold">CUSTOMER SUPPORT:</span> +91 98840 40400
          </p>
          <p className="text-sm">
            <span className="font-semibold">FOR ENQUIRIES:</span> contactus@kifaytihealth.com
          </p>
        </div>

        {/* Center Section */}
        <div className="w-full md:w-1/3 lg:w-1/4 space-y-4">
          <h2 className="font-semibold text-lg mb-4">COMPANY</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">About us</a></li>
            <li><a href="#" className="hover:underline">Contact us</a></li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/3 lg:w-1/4 space-y-4">
          <h2 className="font-semibold text-lg mb-4">SERVICES</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">For Patients</a></li>
            <li><a href="#" className="hover:underline">For Doctors</a></li>
            <li><a href="#" className="hover:underline">For Institutions</a></li>
          </ul>
        </div>

        {/* Social Media and Copyright */}
        <div className="w-full flex flex-col items-center md:items-start lg:items-end space-y-6 mt-10 lg:mt-0 md:w-1/3 lg:w-1/4">
          <div className="text-center md:text-left">
            <h2 className="font-semibold text-lg mb-4">Follow us on Social Media</h2>
            <div className="flex space-x-4 justify-center">
              <a href="#" className="hover:opacity-75">
                <img src={fb} alt="Facebook" className="w-8 h-8" />
              </a>
              <a href="#" className="hover:opacity-75">
                <img src={insta} alt="Instagram" className="w-8 h-8" />
              </a>
            </div>
          </div>
          <div className="text-center md:text-left text-xs">
            <p>ALL RIGHTS RESERVED. COPYRIGHT OF KIFAYTI HEALTH PVT. LTD 2024</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
