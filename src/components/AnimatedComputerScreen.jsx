import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, AnimatePresence } from 'framer-motion';
import doc1 from '../assets/images/doc1.png';
import doc2 from '../assets/images/doc2.png';
import doc3 from '../assets/images/doc3.png';
import doc4 from '../assets/images/doc4.png';
import doc5 from '../assets/images/doc5.jpg';

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
        Math.floor(value * 5), // Since there are 5 content blocks
        4 // Max index is 4
      );
      setCurrentIndex(index);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <div ref={containerRef} className="relative h-[500vh] bg-white">
      <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center">
        <div className="container mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between">
          <ComputerFrame currentIndex={currentIndex} />
          <TextContent currentIndex={currentIndex} />
        </div>
      </div>
    </div>
  );
};

const ComputerFrame = ({ currentIndex }) => {
  const getImageSrc = (index) => {
    switch (index) {
      case 0:
        return doc1;
      case 1:
        return doc2;
      case 2:
        return doc3;
      case 3:
        return doc4;
      case 4:
        return doc5;
      default:
        return doc1;
    }
  };

  return (
    <div className="md:w-[550px] w-full lg:ml-20 mb-8 md:mb-0 relative">
      <div className="relative w-full aspect-video border-8 border-gray-800 rounded-lg bg-white shadow-2xl overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={getImageSrc(currentIndex)}
            alt="Screen content"
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8 }}
          />
        </AnimatePresence>
      </div>
    </div>
  );
};

const TextContent = ({ currentIndex }) => {
  const renderTextContent = (index) => {
    switch (index) {
      case 0:
        return (
          <>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-gray-800">
              Enhanced Decision <br /> Making Powered By
            </h2>
            <p className="text-2xl sm:text-3xl md:text-4xl text-orange-500 font-bold">
              AI/ML & Analytics
            </p>
          </>
        );
      case 1:
        return (
          <>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 text-gray-800">
              Secure, <span className="text-orange-500 font-bold">Important <br /> Conversations</span>
            </h2>
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Between Patients And <br />Healthcare Care Teams <br /> All At One Place
            </p>
          </>
        );
      case 2:
        return (
          <>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              Real-Time <span className="text-orange-500 font-bold">Escalation <br /> Pathways And Alert <br />Messages</span> For Enhanced <br /> Decision Making
            </h2>
          </>
        );
      case 3:
        return (
          <>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              Enable <span className="text-orange-500 font-bold">Personalized,</span>  <br /> Just-In-Time <br /> Interventions
            </h2>
          </>
        );
      case 4:
        return (
          <>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 text-gray-800">
              Take Advantage Of
            </h2>
            <p className="text-2xl sm:text-3xl md:text-4xl text-orange-500 font-bold">
              Real-World Insights & <br /> Evidence
            </p>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="md:w-1/2 w-full md:pl-10">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 500 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -200 }}
          transition={{ duration: 0.8 }}
        >
          {renderTextContent(currentIndex)}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default AnimatedComputerScreen;
