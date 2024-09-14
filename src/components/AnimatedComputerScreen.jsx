import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import doc1 from '../assets/images/doc1.png';
import doc2 from '../assets/images/doc2.png';
import doc3 from '../assets/images/doc3.png';
import doc4 from '../assets/images/doc4.png';
import doc5 from '../assets/images/doc5.png';

const contentData = [
  {
    id: 1,
    imageSrc: doc1, // Direct image import
    heading: 'Enhanced Decision Making Powered By',
    highlightText: 'AI/ML & Analytics',
  },
  {
    id: 2,
    imageSrc: doc2,
    heading: 'Secure, Important Conversations',
    highlightText: 'Between Patients And Healthcare Care Teams',
  },
  {
    id: 3,
    imageSrc: doc3,
    heading: 'Real-Time Escalation Pathways And Alert Messages',
    highlightText: 'For Enhanced Decision Making',
  },
  {
    id: 4,
    imageSrc: doc4,
    heading: 'Enable Personalized, Just-In-Time Interventions',
    highlightText: '',
  },
  {
    id: 5,
    imageSrc: doc5,
    heading: 'Take Advantage Of',
    highlightText: 'Real-World Insights & Evidence',
  },
];

const AnimatedComputerScreen = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
        const scrollProgress = scrollTop / (scrollHeight - clientHeight);
        const newIndex = Math.min(
          Math.floor(scrollProgress * contentData.length),
          contentData.length - 1
        );
        setActiveIndex(newIndex);
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
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="container mx-auto py-20 px-6 overflow-y-auto h-screen"
    >
      <div className="flex flex-col md:flex-row items-center justify-center min-h-screen">
        {/* Computer Frame */}
        <div className="md:w-1/2 w-full mb-8 md:mb-0">
          <div className="relative w-full aspect-video border-8 border-gray-800 rounded-lg bg-gray-200 shadow-2xl">
            <div className="absolute inset-2 bg-white overflow-hidden rounded">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeIndex}
                  src={contentData[activeIndex].imageSrc}
                  alt={`Screen content ${activeIndex + 1}`}
                  className="absolute inset-0 w-full h-full object-cover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                />
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Text Section */}
        <div className="md:w-1/2 w-full md:pl-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl font-bold mb-4">
                {contentData[activeIndex].heading}{' '}
                <span className="text-orange-500">
                  {contentData[activeIndex].highlightText}
                </span>
              </h1>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Placeholder content for scrolling */}
      {contentData.map((_, index) => (
        <div key={index} className="h-screen"></div>
      ))}
    </div>
  );
};

export default AnimatedComputerScreen;
