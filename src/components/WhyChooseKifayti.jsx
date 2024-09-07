import React from "react";
import card1img from "../assets/images/card1.jpg"; // Placeholder for card1 image
import card2img from "../assets/images/card2.jpg"; // Placeholder for card2 image
import card3img from "../assets/images/card3.jpg"; // Placeholder for card3 image

const WhyChooseKifayti = () => {
  return (
    <div
      className="bg-cover bg-center min-h-screen w-full flex flex-col relative"
      style={{
        backgroundImage: "url('https://via.placeholder.com/1920x1080')",
      }} // Dummy image URL
    >
      {/* Banner Content */}
      <div className="relative z-[1] flex flex-col md:flex-row px-4 w-full max-w-7xl mx-auto mt-1 md:mt-2">
        {/* Heading on the left */}
        <div className="flex-1 flex items-center justify-center md:justify-start mb-8 md:mb-0">
          <h1 className="text-4xl md:text-7xl font-bold text-black text-center md:text-left">
            Why Choose <br />
            <span className="text-red-500">Kifayti</span>?
          </h1>
        </div>

        {/* Paragraph on the right */}
        <div className="flex-1 flex items-center justify-center md:justify-end">
          <p className="text-sm font-semibold md:text-xl text-teal-800 text-center md:text-right">
            We provide comprehensive & personalized <br />
            support, tools & resources that you need to <br />
            manage your CKD with confidence and ease.
          </p>
        </div>
      </div>

      <div className="py-12 z-[1]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* First Column: First Card Only */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col text-left">
            <h2 className="text-3xl md:text-5xl font-bold text-teal-900 mb-4">
              Holistic Care <br /> For A Better Life
            </h2>
            <p className="text-gray-700 mb-6">
              Our holistic approach ensures that we look after your physical
              health and emotional well-being. We're here to support you every
              step of the way.
            </p>
            <img
              src={card1img}
              alt="Holistic Care"
              className="w-full h-[200px] md:h-[250px] flex-grow  -mb-6"
            />
          </div>

          {/* Second Column: Second and Third Cards Stacked */}
          <div className="grid gap-6">
            {/* Second Card */}
            <div className="bg-white pl-6 pr-6 rounded-lg shadow-md grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
              {/* Left Side: Text Part */}
              <div className="md:col-span-2 mt-6 mb-6 text-center md:text-left">
                <h2 className="text-3xl md:text-5xl font-bold text-teal-900 mb-4">
                  Tailored Treatment Plan
                </h2>
                <p className="text-gray-700">
                  We create personalized treatment plans tailored to your needs
                  to provide you with the most effective care possible.
                </p>
              </div>

              {/* Right Side: Image Part */}
              <div className="flex justify-center md:justify-end ">
                <img
                  src={card2img}
                  alt="Treatment Plan"
                  className="w-28 md:w-32 h-[150px] md:h-[200px] lg:-mb-8"
                />
              </div>
            </div>

            {/* Third Card */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              {/* First Row */}
              <div className="flex flex-col md:flex-row items-start justify-between mb-4">
                {/* Left Column: Heading */}
                <h2 className="text-3xl md:text-5xl font-bold text-teal-900 md:text-left mb-4 md:mb-0 md:mr-6">
                  Health Monitoring Anytime, Anywhere
                </h2>
                {/* Right Column: Image */}
                <img
                  src={card3img}
                  alt="Health Monitoring"
                  className="w-32 md:w-40 h-auto md:ml-6"
                />
              </div>
              {/* Second Row: Paragraph */}
              <p className="text-gray-700 md:text-left">
                Our mobile app streamlines health monitoring, provides easy
                access to vital information, and facilitates seamless
                communication with your care team—wherever you are.
              </p>
            </div>
          </div>
          {/* <div className="bg-white p-6 rounded-lg shadow-md flex flex-col text-left">
            <h2 className="text-3xl md:text-5xl font-bold text-teal-900 mb-4">
              Holistic Care <br /> For A Better Life
            </h2>
            <p className="text-gray-700 mb-6">
              Our holistic approach ensures that we look after your physical
              health and emotional well-being. We're here to support you every
              step of the way.
            </p>
            <img
              src={card1img}
              alt="Holistic Care"
              className="w-full h-[200px] md:h-[400px] flex-grow  -mb-6"
            />
          </div> */}
          {/* <div className="bg-white p-6 rounded-lg shadow-md flex flex-col text-left">
            <h2 className="text-3xl md:text-5xl font-bold text-teal-900 mb-4">
              Holistic Care <br /> For A Better Life
            </h2>
            <p className="text-gray-700 mb-6">
              Our holistic approach ensures that we look after your physical
              health and emotional well-being. We're here to support you every
              step of the way.
            </p>
            <img
              src={card1img}
              alt="Holistic Care"
              className="w-full h-[200px] md:h-[400px] flex-grow  -mb-6"
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseKifayti;
