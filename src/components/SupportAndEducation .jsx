import React from 'react';

const SupportAndEducation = () => {
  return (
    <section className="bg-gray-50 py-12 px-4 md:px-16">
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 px-2 md:px-8 max-w-full md:max-w-[1310px] mx-auto">
      
        {/* First Column */}
        <div className="border-2 border-teal-400 rounded-lg p-4">
          <div className="text-xs font-bold text-gray-500 mb-2 flex">   
            <img
              src="https://via.placeholder.com/50"
              alt="Icon"
              className="w-8 h-8 mr-2"
            />Blog Post / Report
          </div>
          <img
            className="w-full h-60 object-cover rounded-md mb-4"
            src="https://via.placeholder.com/400"
            alt="Article"
          />
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            This Is The Title Of The Article That’s Published
          </h3>
          <p className="text-sm text-gray-500 mt-4">
            20th June 2024, Name of organization
          </p>
        </div>

        {/* Second Column (2 Rows with no images) */}
        <div className="flex flex-col gap-4">
          <div className="border-2 border-teal-400 rounded-lg p-4">
            <div className="text-xs text-gray-500 mb-2 flex font-bold">
              <img
                src="https://via.placeholder.com/50"
                alt="Icon"
                className="w-8 h-8 mr-2"
              />News
            </div>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold">
              This Is The Title Of The Article That’s Published
            </h3>
            <p className="text-sm text-gray-500 mt-4 mb-2">
              20th June 2024, Name of organization
            </p>
          </div>

          <div className="border-2 border-teal-400 rounded-lg p-4">
            <div className="text-xs text-gray-500 mb-2 flex font-bold">
              <img
                src="https://via.placeholder.com/50"
                alt="Icon"
                className="w-8 h-8 mr-2"
              />News
            </div>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold">
              This Is The Title Of The Article That’s Published
            </h3>
            <p className="text-sm text-gray-500 mt-4 mb-2">
              20th June 2024, Name of organization
            </p>
          </div>
        </div>

        {/* Third Column (Same as First Column) */}
        <div className="border-2 border-teal-400 rounded-lg p-4">
          <div className="text-xs font-bold text-gray-500 mb-2 flex">
            <img
              src="https://via.placeholder.com/50"
              alt="Icon"
              className="w-8 h-8 mr-2"
            />Blog Post / Report
          </div>
          <img
            className="w-full h-60 object-cover rounded-md mb-4"
            src="https://via.placeholder.com/400"
            alt="Article"
          />
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            This Is The Title Of The Article That’s Published
          </h3>
          <p className="text-sm text-gray-500 mt-4">
            20th June 2024, Name of organization
          </p>
        </div>
      
      </div>
    
    </section>
  );
};

export default SupportAndEducation;
