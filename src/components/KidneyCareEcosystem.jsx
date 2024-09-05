import React from 'react';
import mobileImage from '../assets/images/mobileimg.png'; // Path to the image of the mobile phone

const KidneyCareEcosystem = () => {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Section - Text */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Kidney Care Ecosystem <br />
            <span className="text-teal-500">On Your Fingertips</span>
          </h1>
          <p className="text-lg text-gray-600">
            A CKD (Stage 1 to Stage 4, dialysis & transplant) patient needs multiple services in their treatment journey.
            <br />
            We partner with all kidney care stakeholders to create an ecosystem where the patient gets everything under one roof.
          </p>
        </div>

        {/* Right Section - Mobile Image */}
        <div className="flex justify-center">
          <img src={mobileImage} alt="Kidney Care Ecosystem" className="w-10 h-auto md:w-[200px]" />
        </div>
      </div>
    </div>
  );
};

export default KidneyCareEcosystem;
