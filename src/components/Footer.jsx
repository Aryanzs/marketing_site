import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-orange-500 text-white py-10">
      <div className="container mx-auto flex justify-between">
        {/* Left Section */}
        <div className="space-y-2">
          <h2 className="text-2xl font-bold">Kifayti Health</h2>
          <p>ADDRESS</p>
          <p>8/2, Beratan Agrahara Chikkabegur, Bangalore, Karnataka 560100</p>
          <p>CUSTOMER SUPPORT</p>
          <p>+91 98840 40400</p>
          <p>FOR ENQUIRIES</p>
          <p>contactus@kifaytihealth.com</p>
        </div>

        {/* Right Section */}
        <div className="space-y-2">
          <h3 className="font-bold">COMPANY</h3>
          <p>About us</p>
          <p>Contact us</p>
        </div>
        
        <div className="space-y-2">
          <h3 className="font-bold">SERVICES</h3>
          <p>For Patients</p>
          <p>For Doctors</p>
          <p>For Institutions</p>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="font-bold">Follow us on Social media</h3>
          <div className="flex space-x-4 mt-2">
            <a href="https://facebook.com" className="text-white">
              <i className="fab fa-facebook fa-2x"></i>
            </a>
            <a href="https://instagram.com" className="text-white">
              <i className="fab fa-instagram fa-2x"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="text-center mt-8">
        <p>ALL RIGHTS RESERVED. COPYRIGHT OF KIFAYTI HEALTH PVT. LTD 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
