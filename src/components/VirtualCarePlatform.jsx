import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import laptopImage from '../assets/images/doc4.png'; // Replace with your image

const VirtualCarePlatform = () => {
  // Set up animation controls and trigger when in view
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: false, // Triggers every time you scroll into view
    threshold: 0.2, // Triggers when 20% of the component is in view
  });

  // Start animations when in view
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  // Define animations for text and image sections
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1.2, ease: 'easeOut' },
    },
    floating: {
      y: [0, -10, 0],
      transition: {
        y: {
          repeat: Infinity,
          repeatType: 'reverse',
          duration: 4,
          ease: 'easeInOut',
        },
      },
    },
  };

  return (
    <motion.section ref={ref} className="bg-white py-20 px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Text Section */}
        <motion.div
          className="md:w-1/2 mb-8 md:mb-0 px-6 lg:px-20"
          initial="hidden"
          animate={controls}
          variants={textVariants}
        >
          <h1 className="text-3xl lg:text-4xl font-bold mb-1 text-gray-900">
            Your All-In-One <br />Virtual Care Platform:
          </h1>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-teal-500">
            Attract, Engage & <br />Treat More Patients
          </h2>
        </motion.div>

        {/* Floating Computer Image */}
        <motion.div
          className="md:w-1/2 mt-10 flex justify-center px-6 lg:px-0"
          initial="hidden"
          animate={controls}
          variants={imageVariants}
          whileHover="floating" // Floating effect when hovered
        >
          <motion.img
            src={laptopImage}
            alt="Virtual Care Platform"
            className="w-full lg:h-80 h-auto max-w-md"
          />
        </motion.div>
      </div>

      {/* Second Section */}
      <motion.div
        className="container mx-auto mt-20 max-w-8xl"
        initial="hidden"
        animate={controls}
        variants={textVariants}
      >
        <div className="flex flex-col lg:flex-row justify-between items-start mb-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6 lg:mb-0 px-6 lg:ml-16">
            How Do We <span className="text-teal-500">Assist</span> <br />
            <span className="text-teal-500">You?</span>
          </h2>

          <div className="text-left lg:text-right px-6 lg:px-0 lg:mr-20">
            <p className="text-teal-800 mb-4">
              We take care of all your IT infrastructure, patient <br />
              engagement & outcome, data management &<br />
              compliance needs so you can focus on what <br />
              matters the most, <b>your patient</b>.
            </p>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default VirtualCarePlatform;
