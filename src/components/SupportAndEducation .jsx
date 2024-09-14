import React from 'react';
import Blogpost from './Blogpost';


const SupportAndEducation = () => {

  

  return (
    <section className="bg-gray-50 py-20 px-4 md:px-16">
      {/* Section One */}
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-6">
          <h2 className="text-2xl md:text-4xl font-bold text-black mb-6 lg:mb-0">
            Support And <br /> Education
          </h2>
          <div className="lg:text-right lg:ml-6 w-full lg:w-auto">
            <p className="text-gray-600 mb-4 text-sm md:text-base">
              We offer a wealth of educational resources, support <br className="hidden lg:block" />
              groups and continuous communication to help you stay <br className="hidden lg:block" />
              informed and engaged in health management
            </p>
            <button className="bg-red-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-teal-700 w-full md:w-auto">
              Request Callback &rarr;
            </button>
          </div>
        </div>
      </div>

  <Blogpost/>

    </section>
  );
};

export default SupportAndEducation;
