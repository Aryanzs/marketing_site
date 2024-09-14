import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const   DoctorContact = () => {
  // Helper function to manage animations and in-view detection
  const useScrollAnimation = (threshold = 0.2) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold, triggerOnce: false });

    React.useEffect(() => {
      if (inView) {
        controls.start('visible');
      } else {
        controls.start('hidden'); // Reset the animation when out of view
      }
    }, [controls, inView]);

    return [ref, controls];
  };

  // Using the custom hook for each element
  const [refH2, controlsH2] = useScrollAnimation(0.2);
  const [refH1, controlsH1] = useScrollAnimation(0.2);
  const [refP, controlsP] = useScrollAnimation(0.2);
  const [refInput, controlsInput] = useScrollAnimation(0.2);
  const [refButton, controlsButton] = useScrollAnimation(0.2);

  // Animation variants for each element
  const textVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="bg-white text-center py-12">
      <motion.h1
        ref={refH2}
        className="text-4xl font-bold"
        initial="hidden"
        animate={controlsH2}
        variants={textVariant}
      >
        Join Our
      </motion.h1>
      <motion.h2
        ref={refH1}
        className="text-4xl font-bold mb-4"
        initial="hidden"
        animate={controlsH1}
        variants={textVariant}
        transition={{ delay: 0.2 }} // Delay to stagger animations
      >
        Community Of Doctors
      </motion.h2>
      <motion.p
        ref={refP}
        className="text-lg mb-8"
        initial="hidden"
        animate={controlsP}
        variants={textVariant}
        transition={{ delay: 0.4 }} // Delay to stagger animations
      >
        At Kifayti Health, we are dedicated to transforming kidney care and empowering <br />
        patients. Join our community and take the first step towards a healthier, more <br />
        vibrant life.
      </motion.p>
      <div className="flex justify-center items-center mt-8 mb-20">
        <motion.div
          ref={refInput}
          className="flex relative items-center bg-white shadow-2xl overflow-hidden"
          initial="hidden"
          animate={controlsInput}
          variants={textVariant}
          transition={{ delay: 0.6 }} // Delay to stagger animations
        >
          <div className="px-4 py-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 12a4 4 0 01-8 0M12 16a8 8 0 100-16 8 8 0 000 16zm-3.5 5.5l5-3.2 5 3.2v.3H8.5v-.3z"
              />
            </svg>
          </div>
          <input
            type="email"
            placeholder="youremail123@gmail.com"
            className="bg-white w-[440px] p-4 outline-none text-gray-700 placeholder-gray-400"
          />
        </motion.div>
        <motion.button
          ref={refButton}
          className="bg-red-500 absolute text-white px-8 py-3 mt-10 ml-[500px]"
          initial="hidden"
          animate={controlsButton}
          variants={textVariant}
          transition={{ delay: 0.8 }} // Delay to stagger animations
        >
          SUBSCRIBE
        </motion.button>
      </div>
    </div>
  );
};

export default DoctorContact;
