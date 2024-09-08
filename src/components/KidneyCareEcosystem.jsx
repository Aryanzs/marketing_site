import React from "react";
import { motion } from "framer-motion";
import mobileImage from '../assets/images/mobileimg.png';

const KidneyCareEcosystem = () => {
  return (
    <div className="flex flex-col lg:flex-row h-screen bg-gray-50 p-4 md:p-8">
      {/* Left Section - Heading at the top left */}
      <motion.div 
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{  amount: 0.2 }} // Animates when 20% of the element is visible
        transition={{ duration: 0.8 }}
        className="lg:w-1/3 w-full lg:text-left text-center lg:pl-16 mb-8 lg:mb-0"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black">Kidney Care Ecosystem</h1>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-teal-400 mt-4">On Your Fingertips</h2>
      </motion.div>

      {/* Center Section - Image Mockup */}
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{  amount: 0.3 }} // Animates  when 20% of the element is visible
        transition={{ duration: 0.8 }}
        className="lg:w-1/3 w-full flex justify-center mb-8 lg:mb-0"
      >
        <div className="relative">
          {/* Mobile Mockup */}
          <div className="border-4 border-gray-300 rounded-3xl w-48 sm:w-56 md:w-64 h-[400px] sm:h-[440px] md:h-[480px] overflow-hidden shadow-xl">
            <img
              src={mobileImage} // Dummy image for mockup
              alt="Mobile Mockup"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </motion.div>

      {/* Right Section - Text at the bottom right */}
      <motion.div 
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ amount: 0.2 }} // Animates  when 20% of the element is visible
        transition={{ duration: 0.8 }}
        className="lg:w-1/4 lg:ml-10 w-full lg:text-right text-center mt-8 lg:mt-[300px]"
      >
        <div className="text-teal-800">
          <p className="text-base sm:text-lg">
            A CKD (Stage 1 to Stage 4, dialysis & transplant) patient needs multiple services in their treatment journey.
          </p>
          <p className="sm:text-lg">
            We partner with all kidney care stakeholders to create an ecosystem where the patient gets everything under one roof.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default KidneyCareEcosystem;
