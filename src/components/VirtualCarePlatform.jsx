import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import laptopImage from '../assets/images/doc4.png'; // Replace with your image

const VirtualCarePlatform = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3, // Trigger when 30% of the component is visible
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  // Animation for the text section
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: 'easeOut' },
    },
  };

  // Animation for the floating computer image
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
    <section ref={ref} className="bg-white py-20 px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Text Section */}
        <motion.div
          className="md:w-1/2 mb-8 md:mb-0"
          initial="hidden"
          animate={controls}
          variants={textVariants}
        >
          <h1 className="text-4xl font-bold mb-4 text-gray-900">
            Your All-In-One Virtual Care Platform:
          </h1>
          <h2 className="text-3xl font-bold mb-4 text-teal-500">
            Attract, Engage & Treat More Patients
          </h2>
          <p className="text-lg text-gray-600">
            We take care of all your IT infrastructure, patient engagement &
            outcomes, data management & compliance needs so you can focus on
            what matters most: delivering the best care.
          </p>
        </motion.div>

        {/* Floating Computer Image */}
        <motion.div
          className="md:w-1/2 flex justify-center"
          initial="hidden"
          animate={controls}
          variants={imageVariants}
        >
          <motion.img
            src={laptopImage}
            alt="Virtual Care Platform"
            className="w-full h-auto max-w-md"
            variants={imageVariants}
            whileHover="floating"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default VirtualCarePlatform;
