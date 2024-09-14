import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import kidneyImage from '../assets/images/mobile_patient.png'; // Replace with your kidney image path

const KidneyCareSection = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: false, // Reactivates animation when scrolled back
    threshold: 0.3, // Animation triggers when 30% of the component is in view
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  // Text container animation
  const textVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  // Image floating animation
  const floatingVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 120,
        damping: 20,
        duration: 0.8,
      },
    },
    float: {
      y: [0, -10, 0], // Floating effect
      transition: {
        duration: 3,
        ease: 'easeInOut',
        repeat: Infinity, // Infinite floating animation
      },
    },
  };

  return (
    <div className="bg-white py-16 px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Text Section */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={textVariants}
          className="md:w-1/2 text-left"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Your Kidney Care <br /> <span className="text-teal-500">On Your Fingertips</span>
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            Delivering all kidney care stakeholders in your health journey under one roof.
          </p>
          <motion.a
            href="#"
            className="bg-orange-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-orange-600 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn →
          </motion.a>
        </motion.div>

        {/* Floating Image Section */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={floatingVariants}
          className="md:w-1/2 flex justify-center mt-8 md:mt-0"
        >
          <motion.img
            src={kidneyImage}
            alt="Kidney Care"
            className="w-3/4 md:w-full h-auto"
            variants={floatingVariants}
            animate="float" // Floating animation
          />
        </motion.div>
      </div>
    </div>
  );
};

export default KidneyCareSection;
