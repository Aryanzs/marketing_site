import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import doc1 from '../assets/images/doc1.png';
import doc2 from '../assets/images/doc2.png';
import doc3 from '../assets/images/doc3.png';
import doc4 from '../assets/images/doc4.png';
import doc5 from '../assets/images/doc5.jpg';

const sections = [
  {
    image: doc1,
    title: "Enhanced Decision Making Powered By",
    subtitle: "AI/ML & Analytics",
    subtitleColor: "text-orange-500",
  },
  {
    image: doc2,
    title: "Secure, Important Conversations",
    subtitle: "Between Patients And Healthcare Care Teams All At One Place",
    highlightWords: ["Important", "Conversations"],
  },
  {
    image: doc3,
    title: "Real-Time Escalation Pathways And Alert Messages For Enhanced Decision Making",
    highlightWords: ["Escalation", "Pathways", "Alert", "Messages"],
  },
  {
    image: doc4,
    title: "Enable Personalized, Just-In-Time Interventions",
    highlightWords: ["Personalized,"],
  },
  {
    image: doc5,
    title: "Take Advantage Of",
    subtitle: "Real-World Insights & Evidence",
    subtitleColor: "text-orange-500",
  },
];

const AnimatedComputerScreen = () => {
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
      y: direction > 0 ? 500 : -500,
      opacity: 0,
    }),
    center: {
      y: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      y: direction < 0 ? 500 : -500,
      opacity: 0,
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
                activeIndex === index ? 'bg-orange-500' : 'bg-gray-300'
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
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                      {section.title.split(' ').map((word, i) => (
                        <React.Fragment key={i}>
                          {section.highlightWords && section.highlightWords.includes(word) ? (
                            <span className="text-orange-500">{word} </span>
                          ) : (
                            word + ' '
                          )}
                        </React.Fragment>
                      ))}
                    </h2>
                    {section.subtitle && (
                      <p className={`text-2xl sm:text-3xl md:text-4xl font-bold ${section.subtitleColor || ''}`}>
                        {section.subtitle}
                      </p>
                    )}
                    <motion.button
                      className="mt-6 px-6 py-3 bg-orange-500 text-white rounded-full font-semibold shadow-lg hover:bg-orange-600 transition-colors duration-300"
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
                    <motion.div
                      className="w-full md:w-[550px] aspect-video border-8 border-gray-800 rounded-lg bg-white shadow-2xl overflow-hidden"
                      whileHover={{ scale: 1.05, rotate: 2 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.img
                        src={section.image}
                        alt={`Screen content for ${section.title}`}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
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

export default AnimatedComputerScreen;