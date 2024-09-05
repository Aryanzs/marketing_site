import React from 'react';
import card1img from "../assets/images/card1.jpg";
import card2img from "../assets/images/card2.jpg";
import card3img from "../assets/images/card3.jpg";

const WhyChooseKifayti = () => {
  return (
    <div className="bg-blue-200 py-8 px-4">
      {/* First Section - Why Choose Kifayti */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between mb-8">
        {/* Left side - Heading */}
        <div className="md:w-1/2 text-left">
          <h2 className="text-2xl md:text-3xl font-bold">
            Why Choose <span className="text-orange-500">Kifayti?</span>
          </h2>
        </div>

        {/* Right side - Description */}
        <div className="md:w-1/2 mt-4 md:mt-0 text-right">
          <p className="text-base text-gray-600 leading-relaxed">
            We provide comprehensive & personalized support, tools & resources that you need to manage your CKD with confidence and ease.
          </p>
        </div>
      </div>

      {/* Grid Section */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Card 1 - Main Card on the Left */}
        <div className="md:col-span-2 bg-white p-3 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-3">Holistic Care For A Better Life</h3>
          <p className="text-gray-600 mb-3 text-sm  ">
            Our holistic approach ensures that we look after your physical health and emotional well-being. We're here to support you every step of the way.
          </p>
          <img src={card1img} alt="Holistic Care" className="w-full h-auto rounded-lg" />
        </div>

        {/* Right Side - Two Stacked Cards */}
        <div className="flex flex-col gap-6">
          {/* Card 2 */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-3">Tailored Treatment Plan</h3>
            <p className="text-gray-600 mb-3 text-sm">
              We create personalized treatment plans tailored to your needs to provide you with the most effective care possible.
            </p>
            <img src={card2img} alt="Tailored Treatment" className="w-full h-auto rounded-lg" />
          </div>

          {/* Card 3 */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-3">Health Monitoring Anytime, Anywhere</h3>
            <p className="text-gray-600 mb-3 text-sm">
              Our mobile app streamlines health monitoring, provides easy access to vital information and facilitates seamless communication with your care team - wherever you are.
            </p>
            <img src={card3img} alt="Health Monitoring" className="w-full h-auto rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseKifayti;
