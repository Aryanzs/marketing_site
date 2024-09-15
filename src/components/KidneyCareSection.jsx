import React from 'react';
import { motion } from 'framer-motion';
import phoneImage from '../assets/images/mobile_patient.png'; // Replace with your image path

const KidneyCareSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-4 md:p-8 lg:px-16 bg-white">
      {/* Text Section */}
      <div className="text-center md:text-left mb-8 md:mb-0 md:w-1/2 lg:-mt-80 mt-20 order-1 md:order-1">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black">Your Kidney Care</h1>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-teal-500">On Your <br />Fingertips</h2>
        <p className="mt-4 text-gray-600 text-sm md:text-base lg:text-lg">
          Delivery all kidney care <br /> stakeholders in your health <br /> journey under one roof
        </p>
        <button className="mt-6 px-6 py-3 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 transition duration-300">
          Learn More
        </button>
      </div>

      {/* Image Section */}
      <motion.div
        className="md:w-1/2 lg:w-1/3 flex justify-center mt-10 md:mt-0 order-2 md:order-2"
        animate={{ y: [0, -20, 0] }} // Defines the floating effect
        transition={{ duration: 3, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
      >
        <img
          src={phoneImage}
          alt="Kidney Care"
          className="w-3/4 md:w-full h-auto lg:h-[760px] lg:mr-20 lg:my-10 transform rotate-12"
        />
      </motion.div>
    </div>
  );
};

export default KidneyCareSection;
