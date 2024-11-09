import React from 'react';
import insta from "../assets/figma images/Instagram.png";
import fb from "../assets/figma images/Facebook.png";
import bgimg from "../assets/figma images/Footer design.png";
import kifayti from "../assets/figma images/kifaytifooterlogo 1.png";

function Footer() {
  return (
    <footer
      className="text-white py-10 px-4 md:px-8 bg-cover bg-center"
      style={{ backgroundImage: `url(${bgimg})` }}
    >
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
        
        {/* Left Column */}
        <div className="space-y-6 text-left">
          {/* Logo and Heading */}
          <div className="flex flex-col items-start md:flex-row md:items-start">
            <img src={kifayti} alt="kifayti logo" className="w-12 h-12" />
            <h2 className="text-3xl ml-0 md:ml-3 font-semibold mt-2">Kifayti Health</h2>
          </div>
          
          {/* Address */}
          <div>
            <h3>ADDRESS</h3>
            <p className="text-sm">8/2, Beratan Agrahara Chikkabegur, Bangalore, Karnataka 560100</p>
          </div>
          
          {/* Customer Support */}
          <div>
            <h3>CUSTOMER SUPPORT</h3>
            <p className="text-sm">+91 98840 40400</p>
          </div>
          
          {/* For Enquiries */}
          <div>
            <h3>FOR ENQUIRIES</h3>
            <p className="text-sm">contactus@kifaytihealth.com</p>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-8 text-left md:text-right">
          {/* Top Row: Company and Services */}
          <div className="grid grid-cols-2 gap-8">
            {/* Company Section */}
            <div className="space-y-4">
              <h3 className="font-bold">COMPANY</h3>
              <ul className="space-y-2">
                <li><a href="#about" className="hover:underline">About us</a></li>
                <li><a href="#contact" className="hover:underline">Contact us</a></li>
              </ul>
            </div>

            {/* Services Section */}
            <div className="space-y-4">
              <h3 className="font-bold">SERVICES</h3>
              <ul className="space-y-2">
                <li><a href="#patients" className="hover:underline">For Patients</a></li>
                <li><a href="#doctors" className="hover:underline">For Doctors</a></li>
                <li><a href="#institutions" className="hover:underline">For Institutions</a></li>
              </ul>
            </div>
          </div>

          {/* Middle Row: Social Media */}
          <div>
            <h3 className="font-bold">Follow us on Social Media</h3>
            <div className="flex justify-start md:justify-end space-x-2 mt-2">
              <a href="#facebook" className="p-2 rounded-full">
                <img src={fb} alt="Facebook" className="w-8 h-8" />
              </a>
              <a href="#instagram" className="p-2 rounded-full">
                <img src={insta} alt="Instagram" className="w-8 h-8" />
              </a>
            </div>
          </div>

          {/* Bottom Row: Copyright */}
          <div className="text-xs">
            <p>ALL RIGHTS RESERVED. COPYRIGHT OF KIFAYTI HEALTH PVT. LTD 2024.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
