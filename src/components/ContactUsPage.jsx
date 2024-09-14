import React from 'react';
import phone from "../assets/images/telephonedalle-removebg.png";

const ContactUsPage = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center py-16 md:py-20 px-6 md:px-10 bg-white min-h-screen">
      <div className="w-full md:w-1/2 p-4 md:p-6">
        <h2 className="text-4xl md:text-6xl font-bold mb-4 text-center md:text-left">Contact Us Today</h2>
        <p className="text-gray-600 mb-6 text-center md:text-left">
          Schedule a consultation or request more information about our services. Let's work together to manage CKD effectively and improve your quality of life.
        </p>
        <form className="space-y-4 md:space-y-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full">
              <label htmlFor="firstName" className="block text-gray-700 mb-1 md:mb-2 font-bold">
                First name
              </label>
              <input
                type="text"
                id="firstName"
                placeholder="First name"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="w-full">
              <label htmlFor="lastName" className="block text-gray-700 mb-1 md:mb-2 font-bold">
                Last name
              </label>
              <input
                type="text"
                id="lastName"
                placeholder="Last name"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 mb-1 md:mb-2 font-bold">
              Email address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email address"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700 mb-1 md:mb-2 font-bold">
              Your message
            </label>
            <textarea
              id="message"
              placeholder="Enter your question or message"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
            />
          </div>
          <button
            type="submit"
            className="w-full p-3 bg-red-500 text-white font-bold rounded-md hover:bg-red-600 transition duration-300"
          >
            SUBMIT
          </button>
        </form>
      </div>
      <div className="w-full md:w-1/2 p-3 flex justify-center items-center mt-10 md:mt-0">
        <img
          src={phone}
          alt="Contact Us"
          className="rounded-md object-cover max-w-full h-auto md:max-h-[500px]" // Make image responsive
        />
      </div>
    </div>
  );
};

export default ContactUsPage;
