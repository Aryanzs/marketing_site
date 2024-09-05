import React from 'react';

const ContactUs = () => {
  return (
    <div className="bg-white text-center py-12">
      <h2 className="text-3xl font-bold">Join Us On</h2>
      <h1 className="text-4xl font-bold mb-4">The Path To Better Health</h1>
      <p className="text-lg mb-8">
        At Kifayti Health, we are dedicated to transforming kidney care and empowering patients. 
        Join our community and take the first step towards a healthier, more vibrant life.
      </p>
      <div className="flex justify-center">
        <div className="bg-white shadow-lg rounded-md flex">
          <input
            type="email"
            placeholder="youremail123@gmail.com"
            className="p-4 border border-gray-300 rounded-l-md"
          />
          <button className="bg-orange-500 text-white px-6 py-4 rounded-r-md font-bold hover:bg-orange-600">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
