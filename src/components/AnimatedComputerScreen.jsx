import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import doc1 from '../assets/images/doc1.png';
import doc2 from '../assets/images/doc2.png';
import doc3 from '../assets/images/doc3.png';
import doc4 from '../assets/images/doc4.png';
import doc5 from '../assets/images/doc5.png';

const contentData = [
  {
    id: 1,
    imageSrc: doc1,
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
    highlightText: 'For Improved Patient Outcomes',
  },
  {
    id: 5,
    imageSrc: doc5,
    heading: 'Take Advantage Of',
    highlightText: 'Real-World Insights & Evidence',
  },
];

const AnimatedComputerScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange(value => {
      const index = Math.min(
        Math.floor(value * contentData.length),
        contentData.length - 1
      );
      setCurrentIndex(index);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <div ref={containerRef} className="relative h-[500vh]">
      <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          <ComputerFrame currentIndex={currentIndex} />
          <TextContent currentIndex={currentIndex} />
        </div>
      </div>
    </div>
  );
};

const ComputerFrame = ({ currentIndex }) => {
  return (
    <div className="md:w-1/2 w-full mb-8 md:mb-0 relative">
      <div className="relative w-full aspect-video border-8 border-gray-800 rounded-lg bg-gray-200 shadow-2xl overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={contentData[currentIndex].imageSrc}
            alt="Screen content"
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          />
        </AnimatePresence>
      </div>
    </div>
  );
};

const TextContent = ({ currentIndex }) => {
  return (
    <div className="md:w-1/2 w-full md:pl-10">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-800">
            {contentData[currentIndex].heading}
          </h2>
          <p className="text-2xl text-orange-500 font-semibold">
            {contentData[currentIndex].highlightText}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default AnimatedComputerScreen;