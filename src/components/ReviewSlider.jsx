import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const reviews = [
  {
    text: "The service provided by this company has been exceptional. They've exceeded my expectations in every way.",
    name: "John Doe",
    rating: 5,
    location: "New York",
  },
  {
    text: "I'm thoroughly impressed with the quality of work and attention to detail. Highly recommended!",
    name: "Jane Smith",
    rating: 4,
    location: "Los Angeles",
  },
  {
    text: "Their innovative solutions have transformed our business processes. We couldn't be happier with the results.",
    name: "Robert Johnson",
    rating: 5,
    location: "Chicago",
  },
  {
    text: "The team's expertise and professionalism are unmatched. They've been a pleasure to work with.",
    name: "Emily Brown",
    rating: 5,
    location: "Houston",
  },
  {
    text: "From start to finish, the experience was seamless. They truly understand customer needs.",
    name: "Michael Wilson",
    rating: 4,
    location: "Miami",
  },
];

const ReviewSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const sliderRef = useRef(null);

  const totalReviews = reviews.length;

  useEffect(() => {
    const autoSlide = setInterval(() => {
      if (!isAnimating) {
        handleNext();
      }
    }, 5000);

    return () => clearInterval(autoSlide);
  }, [currentIndex, isAnimating]);

  const handlePrev = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalReviews - 1 : prevIndex - 1));
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const handleNext = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => (prevIndex === totalReviews - 1 ? 0 : prevIndex + 1));
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        size={18}
        fill={index < rating ? "#FCD34D" : "none"}
        stroke={index < rating ? "#FCD34D" : "#D1D5DB"}
      />
    ));
  };

  return (
    <div className="bg-gradient-to-r from-blue-50 to-teal-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">What Our Clients Say</h2>
        <div className="relative w-full overflow-hidden">
          <div
            ref={sliderRef}
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {reviews.map((review, index) => (
              <div key={index} className="flex-none w-full px-4">
                <div className="bg-white shadow-xl rounded-lg p-8 mx-auto max-w-2xl">
                  <div className="flex items-center mb-4">
                    {renderStars(review.rating)}
                  </div>
                  <p className="text-gray-600 text-lg mb-6 italic">"{review.text}"</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-teal-600 font-semibold">{review.name}</p>
                      <p className="text-gray-500 text-sm">{review.location}</p>
                    </div>
                    <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                      <span className="text-teal-600 font-bold text-xl">
                        {review.name.charAt(0)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md focus:outline-none hover:bg-gray-100 transition-colors"
            aria-label="Previous review"
          >
            <ChevronLeft className="text-gray-600" />
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md focus:outline-none hover:bg-gray-100 transition-colors"
            aria-label="Next review"
          >
            <ChevronRight className="text-gray-600" />
          </button>
        </div>
        <div className="flex justify-center mt-8">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full mx-1 focus:outline-none transition-colors ${
                index === currentIndex ? 'bg-teal-500' : 'bg-gray-300'
              }`}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="bg-teal-500 text-white px-8 py-3 rounded-lg hover:bg-teal-600 transition-colors text-lg font-semibold shadow-md">
            Request a Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewSlider;