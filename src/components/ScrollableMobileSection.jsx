import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import patientMob1 from '../assets/images/mob1.png';
import patientMob2 from '../assets/images/mob2.png';
import patientMob3 from '../assets/images/mob3.png';
import "./ScrollableMobileSection.css"


const sections = [
  {
    image: patientMob1,
    text: 'Patient Monitoring & Data Analysis',
    subtext: 'Continuous monitoring, real-time updates & our analytical tools keep you and your healthcare team informed about your health status.',
    highlight: 'Data Analysis',
  },
  {
    image: patientMob2,
    text: 'Treatment Adherence',
    subtext: 'We help you stay on track with your medications and lifestyle changes, making it easier to follow your treatment plan.',
    highlight: 'Adherence',
  },
  {
    image: patientMob3,
    text: 'Disease Progression Prediction',
    subtext: 'Our tools predict disease progression, providing timely interventions and better management.',
    highlight: 'Prediction',
  },
];

const ScrollableMobileSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const { scrollTop, clientHeight } = containerRef.current;
        const newIndex = Math.round(scrollTop / clientHeight);
        if (newIndex !== activeIndex) {
          setDirection(newIndex > activeIndex ? 1 : -1);
          setActiveIndex(newIndex);
        }
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, [activeIndex]);

  const contentVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const imageVariants = {
    enter: (direction) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
      rotate: direction > 0 ? -10 : 10,
    }),
    center: {
      x: 0,
      opacity: 1,
      rotate: 0,
    },
    exit: (direction) => ({
      x: direction < 0 ? -1000 : 1000,
      opacity: 0,
      rotate: direction < 0 ? 10 : -10,
    }),
  };

  return (
    <div className="relative h-screen overflow-hidden bg-gradient-to-b from-white to-gray-100">
      <div className="absolute right-6 top-1/2 transform -translate-y-1/2 z-50">
        <div className="flex flex-col space-y-4">
          {sections.map((_, index) => (
            <motion.span
              key={index}
              className={`w-3 h-3 rounded-full ${
                activeIndex === index ? 'bg-teal-500' : 'bg-gray-300'
              }`}
              animate={{
                scale: activeIndex === index ? 1.2 : 1,
              }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </div>
      </div>

      <div 
        ref={containerRef}
        className="h-full overflow-y-auto snap-y snap-mandatory scrollbar-hide"
        style={{ scrollSnapType: 'y mandatory' }}
      >
        {sections.map((section, index) => (
          <div
            key={index}
            className="h-screen flex justify-center items-center px-6 md:px-10 snap-start"
          >
            <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl mx-auto">
              <AnimatePresence initial={false} custom={direction}>
                {activeIndex === index && (
                  <motion.div
                    className="md:w-1/2 mb-10 md:mb-0"
                    custom={direction}
                    variants={contentVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  >
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                      {section.text.split(section.highlight).map((part, i) => (
                        <React.Fragment key={i}>
                          {part}
                          {i === 0 && <span className="text-teal-500">{section.highlight}</span>}
                        </React.Fragment>
                      ))}
                    </h2>
                    <p className="text-gray-700 text-lg leading-relaxed">{section.subtext}</p>
                    <motion.button
                      className="mt-6 px-6 py-3 bg-teal-500 text-white rounded-full font-semibold shadow-lg hover:bg-teal-600 transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Learn More
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>

              <AnimatePresence initial={false} custom={direction}>
                {activeIndex === index && (
                  <motion.div
                    className="md:w-1/2 flex justify-center items-center"
                    custom={direction}
                    variants={imageVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  >
                    <motion.img
                      src={section.image}
                      alt={`Mobile display for ${section.text}`}
                      className="w-[60%] md:w-[50%] lg:w-[45%] shadow-2xl rounded-lg"
                      whileHover={{ scale: 1.05, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollableMobileSection;