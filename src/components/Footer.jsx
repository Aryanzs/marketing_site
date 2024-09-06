import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-red-600 text-white p-10 relative">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-30 bg-cover" style={{ backgroundImage: `url('https://via.placeholder.com/1500x500')` }}></div>
      
      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-wrap justify-between">
        {/* Left Section */}
        <div>
          <h2 className="text-xl font-bold mb-4 flex">
          <img
              src="https://via.placeholder.com/50"
              alt="Icon"
              className="w-8 h-8 mr-2"
            />
            Kifayti Health</h2>
          <address className="not-italic">
            <p>8/2, Beratan Agrahara Chikkabegur, Bangalore,</p>
            <p>Karnataka 560100</p>
          </address>
          <p className="mt-4">CUSTOMER SUPPORT</p>
          <p>+91 98840 40400</p>
          <p className="mt-4">FOR ENQUIRIES</p>
          <p>contactus@kifaytihealth.com</p>
        </div>

        {/* Right Section */}
        <div className="flex flex-col w-1/3 md:w-1/3 text-right">
          {/* Row 1: Two columns - Company and Services */}
          <div className="grid grid-cols-2 mb-6">
            <div>
              <h2 className="font-bold mb-4">COMPANY</h2>
              <ul>
                <li><a href="#" className="hover:underline">About us</a></li>
                <li><a href="#" className="hover:underline">Contact us</a></li>
              </ul>
            </div>
            <div>
              <h2 className="font-bold mb-4">SERVICES</h2>
              <ul>
                <li><a href="#" className="hover:underline">For Patients</a></li>
                <li><a href="#" className="hover:underline">For Doctors</a></li>
                <li><a href="#" className="hover:underline">For Institutions</a></li>
              </ul>
            </div>
          </div>

          {/* Row 2: Social Media */}
          <div className="mb-6 flex justify-end">
  <div>
    <h2 className="font-bold mb-4">Follow us on Social media</h2>
    <div className="flex space-x-4 ml-32">
      <a href="#" className="hover:opacity-75">
        <img src="https://via.placeholder.com/40" alt="Facebook" className="w-8 h-8" />
      </a>
      <a href="#" className="hover:opacity-75">
        <img src="https://via.placeholder.com/40" alt="Instagram" className="w-8 h-8" />
      </a>
    </div>
  </div>
</div>


          {/* Row 3: Copyright Text */}
          <div className="text-xs ">
            <p>ALL RIGHTS RESERVED. COPYRIGHT OF KIFAYTI HEALTH PVT. LTD 2024</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
