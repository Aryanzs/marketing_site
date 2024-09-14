import React, { useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Blogpost from './Blogpost';

const cardVariants = (direction) => {
  return {
    hidden: {
      opacity: 0,
      x: direction === 'left' ? -100 : direction === 'right' ? 100 : 0,
    },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.8, ease: 'easeInOut' },
    },
  };
};

const BlogPage = () => {
  const controlsLeft = useAnimation();
  const controlsRight = useAnimation();
  const leftColumnRef = useRef(null);
  const rightColumnRef = useRef(null);

  // Function to observe elements when they enter the viewport
  const observeElements = (ref, controls) => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start('visible'); // Start animation when in view
        } else {
          controls.start('hidden'); // Reset when out of view (optional)
        }
      },
      { threshold: 0.1 } // Trigger animation when 10% of the element is visible
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
  };

  useEffect(() => {
    observeElements(leftColumnRef, controlsLeft);  // Observe left column
    observeElements(rightColumnRef, controlsRight); // Observe right column
  }, [controlsLeft, controlsRight]);

  return (
    <section className="bg-gray-50 py-20 px-4 md:px-16">
      <h1 className="font-bold text-5xl px-10">Blog section</h1>
      <Blogpost />

      {/* New Section: Two Columns */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr,2fr] gap-4 mt-10 px-2 md:px-8 max-w-full md:max-w-[1310px] mx-auto">
        {/* First Column */}
        <div ref={leftColumnRef} className="flex flex-col gap-4">
          <motion.div
            className="border-2 border-teal-400 rounded-lg p-4"
            initial="hidden"
            animate={controlsLeft}
            variants={cardVariants('left')} // Coming from the left
          >
            <div className="text-xs text-gray-500 mb-2 flex font-bold">
              <img
                src="https://via.placeholder.com/50"
                alt="Icon"
                className="w-8 h-8 mr-2"
              />
              News
            </div>
            <h3 className="text-2xl md:text-2xl lg:text-3xl font-bold">
              This Is The Title Of <br />The Article That’s Published
            </h3>
            <p className="text-sm text-gray-500 mt-4 mb-2">
              20th June 2024, Name of organization
            </p>
          </motion.div>

          <motion.div
            className="border-2 border-teal-400 rounded-lg p-4"
            initial="hidden"
            animate={controlsLeft}
            variants={cardVariants('left')} // Coming from the left
          >
            <div className="text-xs text-gray-500 mb-2 flex font-bold">
              <img
                src="https://via.placeholder.com/50"
                alt="Icon"
                className="w-8 h-8 mr-2"
              />
              News
            </div>
            <h3 className="text-2xl md:text-2xl lg:text-3xl font-bold">
              This Is The Title Of <br />The Article That’s Published
            </h3>
            <p className="text-sm text-gray-500 mt-4 mb-2">
              20th June 2024, Name of organization
            </p>
          </motion.div>
        </div>

        {/* Second Column */}
        <motion.div
          ref={rightColumnRef}
          className="border-2 border-teal-400 rounded-lg p-4"
          initial="hidden"
          animate={controlsRight}
          variants={cardVariants('right')} // Coming from the right
        >
          <div className="text-xs font-bold text-gray-500 mb-2 flex">
            <img
              src="https://via.placeholder.com/50"
              alt="Icon"
              className="w-8 h-8 mr-2"
            />
            Blog Post / Report
          </div>
          <img
            className="w-full h-60 object-cover rounded-md mb-4"
            src="https://via.placeholder.com/400"
            alt="Article"
          />
          <h3 className="text-2xl md:text-2xl lg:text-3xl font-bold">
            This Is The Title Of <br />The Article That’s Published
          </h3>
          <p className="text-sm text-gray-500 mt-4">
            20th June 2024, Name of organization
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogPage;
