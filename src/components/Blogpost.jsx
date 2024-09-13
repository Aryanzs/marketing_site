import React , { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Blogpost = () => {
    const controls = useAnimation();
    const { ref, inView } = useInView({
      triggerOnce: false,
      threshold: 0.4,
    });
  
    useEffect(() => {
      if (inView) {
        controls.start('visible');
      } else {
        controls.start('hidden');
      }
    }, [controls, inView]);
  
    const cardVariants = (direction) => ({
      hidden: {
        opacity: 0,
        x: direction === 'left' ? -100 : direction === 'right' ? 100 : 0,
        y: direction === 'top' ? -100 : direction === 'bottom' ? 100 : 0,
        transition: { duration: 1, ease: 'easeInOut' }, // Slower disappearance
      },
      visible: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: { duration: 1, ease: 'easeOut', delay: 0.2 }, // Slower appearance with a small delay
      },
    });
  return (
    <>
      {/* Section Two */}
      <div
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 px-2 md:px-8 max-w-full md:max-w-[1310px] mx-auto"
      >
        {/* First Column */}
        <motion.div
          className="border-2 border-teal-400 rounded-lg p-4"
          initial="hidden"
          animate={controls}
          variants={cardVariants('left')}
        >
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
          <h3 className="text-2xl md:text-2xl lg:text-3xl font-bold">
            This Is The Title Of <br />The Article That’s Published
          </h3>
          <p className="text-sm text-gray-500 mt-4">
            20th June 2024, Name of organization
          </p>
        </motion.div>

        {/* Second Column (2 Rows with no images) */}
        <div className="flex flex-col gap-4">
          <motion.div
            className="border-2 border-teal-400 rounded-lg p-4"
            initial="hidden"
            animate={controls}
            variants={cardVariants('top')}
          >
            <div className="text-xs text-gray-500 mb-2 flex font-bold">
              <img
                src="https://via.placeholder.com/50"
                alt="Icon"
                className="w-8 h-8 mr-2"
              />News
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
            animate={controls}
            variants={cardVariants('bottom')}
          >
            <div className="text-xs text-gray-500 mb-2 flex font-bold">
              <img
                src="https://via.placeholder.com/50"
                alt="Icon"
                className="w-8 h-8 mr-2"
              />News
            </div>
            <h3 className="text-2xl md:text-2xl lg:text-3xl font-bold">
              This Is The Title Of <br />The Article That’s Published
            </h3>
            <p className="text-sm text-gray-500 mt-4 mb-2">
              20th June 2024, Name of organization
            </p>
          </motion.div>
        </div>

        {/* Third Column (Same as First Column) */}
        <motion.div
          className="border-2 border-teal-400 rounded-lg p-4"
          initial="hidden"
          animate={controls}
          variants={cardVariants('right')}
        >
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
          <h3 className="text-2xl md:text-2xl lg:text-3xl font-bold">
            This Is The Title Of <br />The Article That’s Published
          </h3>
          <p className="text-sm text-gray-500 mt-4">
            20th June 2024, Name of organization
          </p>
        </motion.div>
      </div>

    </>
  )
}

export default Blogpost
