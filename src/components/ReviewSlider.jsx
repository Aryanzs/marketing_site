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
      location: "Mumbai",
    },  
    {
      text: "One or two liner from the patient regarding the platform or their experience comes here.",
      name: "NAME OR DISEASE",
      location: "Kolkata",
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

            <button className="bg-teal-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-teal-700">
              Request Callback &rarr;
            </button>
          </div>
        </div>

        <div className="max-w-7xl mt-20">
          <Slider {...sliderSettings} className="testimonial-slider">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-2 mb-10">
                <div className="bg-white p-6 rounded-lg shadow-xl text-left h-full">
                  <div className="mb-4">
                    <svg
                      className="w-12 h-12 text-teal-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7.5 11C5.01472 11 3 8.98528 3 6.5C3 4.01472 5.01472 2 7.5 2C9.98528 2 12 4.01472 12 6.5C12 9.98528 9.98528 12 7.5 12C7.22386 12 7 11.7761 7 11.5V8.5C7 8.22386 7.22386 8 7.5 8C8.32843 8 9 7.32843 9 6.5C9 5.67157 8.32843 5 7.5 5C6.67157 5 6 5.67157 6 6.5C6 6.77614 5.77614 7 5.5 7H4C3.72386 7 3.5 6.77614 3.5 6.5C3.5 5.11929 4.61929 4 6 4C7.38071 4 8.5 5.11929 8.5 6.5C8.5 7.88071 7.38071 9 6 9C4.61929 9 3.5 7.88071 3.5 6.5C3.5 4.01472 5.51472 2 8 2C10.4853 2 12.5 4.01472 12.5 6.5C12.5 9.98528 10.4853 12 8 12H7.5V11Z"></path>
                    </svg>
                  </div>
                  <p className="text-gray-700 italic font-medium mb-4">
                    "{testimonial.text}"
                  </p>
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
