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

  const observeElements = (ref, controls) => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start('visible');
        } else {
          controls.start('hidden');
        }
      },
      { threshold: 0 }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
  };

  useEffect(() => {
    observeElements(leftColumnRef, controlsLeft);
    observeElements(rightColumnRef, controlsRight);
  }, [controlsLeft, controlsRight]);

  return (
    <section className="bg-gray-50 py-20 px-4 md:px-16 max-w-full mx-auto">
      {/* Section Heading */}
      <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl px-6 md:px-10 mb-10 text-center md:text-left">
        Blog Section
      </h1>
      <Blogpost />

      {/* Blog Post Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10 px-2 md:px-8 max-w-full md:max-w-[1310px] mx-auto">
        {/* First Column */}
        <div ref={leftColumnRef} className="flex flex-col gap-6">
          <motion.div
            className="border-2 border-teal-400 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            initial="hidden"
            animate={controlsLeft}
            variants={cardVariants('left')}
          >
            <div className="text-xs text-gray-500 mb-2 flex font-bold">
              <img
                src="https://via.placeholder.com/50"
                alt="Icon"
                className="w-8 h-8 mr-2"
              />
              News
            </div>
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold">
              This Is The Title Of <br />The Article That’s Published
            </h3>
            <p className="text-sm text-gray-500 mt-4 mb-2">
              20th June 2024, Name of organization
            </p>
          </motion.div>

          <motion.div
            className="border-2 border-teal-400 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            initial="hidden"
            animate={controlsLeft}
            variants={cardVariants('left')}
          >
            <div className="text-xs text-gray-500 mb-2 flex font-bold">
              <img
                src="https://via.placeholder.com/50"
                alt="Icon"
                className="w-8 h-8 mr-2"
              />
              News
            </div>
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold">
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
          className="border-2 border-teal-400 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
          initial="hidden"
          animate={controlsRight}
          variants={cardVariants('right')}
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
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold">
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
