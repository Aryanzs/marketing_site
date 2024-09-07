import React from 'react';

const ContactUs = () => {
  return (
    <div className="bg-white text-center py-12">
      <h2 className="text-3xl font-bold">Join Us On</h2>
      <h1 className="text-4xl font-bold mb-4">The Path To Better Health</h1>
      <p className="text-lg mb-8">
        At Kifayti Health, we are dedicated to transforming kidney care and empowering <br/>patients. 
        Join our community and take the first step towards a healthier, more <br/>vibrant life.
      </p>
      <div className="flex justify-center items-center mt-8 mb-20">
      <div className="flex relative items-center bg-white shadow-2xl  overflow-hidden">
        <div className="px-4 py-2">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6 text-gray-400" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 01-8 0M12 16a8 8 0 100-16 8 8 0 000 16zm-3.5 5.5l5-3.2 5 3.2v.3H8.5v-.3z" />
          </svg>
        </div>
        <input 
          type="email" 
          placeholder="youremail123@gmail.com" 
          className="bg-white w-[440px] p-4 outline-none text-gray-700 placeholder-gray-400"
        />
        
      </div>
      <button className="bg-red-500 absolute text-white px-8 py-3  mt-10 ml-[500px] ">
          SUBSCRIBE
        </button>
    </div>
    </div>
  );
};

export default ContactUs;
