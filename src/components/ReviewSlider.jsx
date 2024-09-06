import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const testimonials = [
    {
      text: "One or two liner from the patient regarding the platform or their experience comes here.",
      name: "NAME OR DISEASE",
      location: "BENGALURU",
    },
    {
      text: "One or two liner from the patient regarding the platform or their experience comes here.",
      name: "NAME OR DISEASE",
      location: "BENGALURU",
    },
    {
      text: "One or two liner from the patient regarding the platform or their experience comes here.",
      name: "NAME OR DISEASE",
      location: "BENGALURU",
    },
    {
      text: "One or two liner from the patient regarding the platform or their experience comes here.",
      name: "NAME OR DISEASE",
      location: "mumbai",
    },  
    {
      text: "One or two liner from the patient regarding the platform or their experience comes here.",
      name: "NAME OR DISEASE",
      location: "kalkatta",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-gray-50 py-12 px-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-6">
          <h2 className="text-4xl font-bold text-black mb-6 lg:mb-0">
            What Are People <br /> Saying About Us
          </h2>
          
          <div className="text-right lg:ml-6">
            <p className="text-gray-600 mb-4">
              Some two liner about the testimonials. <br />
              Some two liner about the testimonials. <br />
              Some two liner about the testimonials.
            </p>
            <button className="bg-teal-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-teal-700">
              Request Callback &rarr;
            </button>
          </div>
        </div>

        <div className="max-w-7xl mt-20 ">
          <Slider {...sliderSettings} className="testimonial-slider">
           {testimonials.map((testimonial, index) => (
              <div key={index} className="px-2 mb-10">
                <div className="bg-white p-6 rounded-lg shadow-xl text-left h-full">
                  <div className="mb-4">
                    <svg
                      className="w-10 h-10 text-teal-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7 16V10m0 0V6a4 4 0 114 4H7zM17 16V10m0 0V6a4 4 0 114 4h-4z"
                      ></path>
                    </svg>
                  </div>
                  <p className="text-gray-600 mb-4">{testimonial.text}</p>
                  <p className="font-semibold text-teal-600">
                    {testimonial.name}
                  </p>
                  <p className="text-teal-600">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <style jsx>{`
        .testimonial-slider .slick-slide > div {
          margin: 0 10px;
        }
        .testimonial-slider {
          margin: 0 -10px;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;