import React from 'react';
import laptopImage from '../assets/images/doc4.png'; // Replace with your image

const VirtualCarePlatform = () => {
  return (
    <section className="bg-white py-20 px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Text Section */}
        <div className="md:w-1/2 mb-8 md:mb-0 px-6 lg:px-20">
          <h1 className="text-3xl lg:text-4xl font-bold mb-1 text-gray-900">
            Your All-In-One <br />Virtual Care Platform:
          </h1>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-teal-500">
            Attract, Engage & <br />Treat More Patients
          </h2>
        </div>

        {/* Floating Computer Image */}
        <div className="md:w-1/2 mt-10 flex justify-center px-6 lg:px-0">
          <img
            src={laptopImage}
            alt="Virtual Care Platform"
            className="w-full lg:h-80 h-auto max-w-md"
          />
        </div>
      </div>

      <div className="container mx-auto mt-20 max-w-8xl">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6 lg:mb-0 px-6 lg:ml-16">
            How Do We <span className="text-teal-500">Assist</span> <br />
            <span className="text-teal-500">You?</span>
          </h2>
          
          <div className="text-left lg:text-right px-6 lg:px-0 lg:mr-20">
            <p className="text-teal-800 mb-4">
              We take care of all your IT infrastructure, patient <br />
              engagement & outcome, data management &<br />
              compliance needs so you can focus on what <br />
              matters the most, <b>your patient</b>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VirtualCarePlatform;
