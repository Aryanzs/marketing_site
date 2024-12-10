import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TreatmentAdherenceSequence = ({ isVisible, progress  , scrollProgress}) => {
  const sequence = {
    text: {
      big: "Treatment Adherence",
      small: "We help you stay on track with your medications and lifestyle changes,",
      line3: "making it easier to follow your treatment plan.",
      color: "red-500",
    },
    image: "/1.png",
  };

  return (
    <motion.div 
      className="snap-center h-screen flex items-center justify-center w-full relative"
    >
      <div className="flex flex-col md:flex-row items-center justify-center w-full space-y-8 md:space-y-0 md:space-x-8">
        <motion.div
          className="w-1/2 md:w-1/3 lg:w-[30%] flex-shrink-0 max-w-xs relative"
          style={{
            position: "relative",
          }}
          animate={{
            top: progress < 0 ? `15vw` : `${Math.min(progress * 5, 0)}vw`, // Smooth transition
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <div className="relative aspect-[9/19] mx-auto">
            <img
              src="/mobile frame.png"
              className="absolute inset-0 rounded-2xl object-contain z-10 w-full h-full"
              alt="Mobile frame"
            />
            <div className="absolute inset-0 rounded-2xl overflow-hidden">
              <img
                src={sequence.image}
                alt="Treatment Adherence"
               
                className="object-contain w-[70%] md:w-[80%] mx-auto mt-8 md:mt-10 h-[85%] md:h-[90%]"
              />
            </div>
          </div>
        </motion.div>

        <div className="w-full md:w-2/3 lg:w-[70%] text-center md:text-left">
          <h2 className="text-2xl md:text-4xl mx-4 md:mx-10 mt-5 font-bold text-black">
            <span className={`block text-${sequence.text.color}`}>
              {sequence.text.big}
            </span>
            <span className="text-xs md:text-sm block mt-4 text-left font-normal text-gray-600 leading-tight">
              {sequence.text.small}
            </span>
            <span className="text-xs md:text-sm block my-1 text-left font-normal text-gray-600 leading-tight">
              {sequence.text.line3}
            </span>
          </h2>
        </div>
      </div>
    </motion.div>
  );
};


// Second Sequence Component
const PatientMonitoringSequence = ({ isVisible, progress }) => {
  const sequence = {
    text: {
      big: "Patient Monitoring & Data analysis",
      small: "Continuous monitoring, real-time updates & our analytical tools keep you",
      line3: "and your healthcare team informed about your health statuses.",
      color: "red-500",
    },
    image: "/mobile3img.png",
  };

  return (
    <motion.div 
      className="snap-center h-screen flex items-center justify-center w-full relative"
    >
      <div className="flex flex-col md:flex-row items-center justify-center w-full space-y-8 md:space-y-0 md:space-x-8">
        <h2 className="text-2xl hidden md:block absolute left-0 max-w-[30%] -z-10 md:text-3xl mx-4 md:mx-10 mt-5 font-bold text-black">
          <span className={`block text-${sequence.text.color}`}>
            {sequence.text.big}
          </span>
        </h2>
        
        <div className="w-1/2 md:w-1/3 lg:w-[30%] flex-shrink-0 max-w-xs">
        <motion.div
          style={{
            position: "relative",
            right:0,
            // left: `${progress * 50}vw`, // Adjust the position dynamically
          }}
          animate={{
            top: progress < 0 ? `5vw` : `${Math.min(progress * 5, 90)}vw`, // Smooth transition
            // opacity: progress > 100 ? `0` : `${Math.min(progress * 10, 90)}`, // Smooth transition
            left: progress < 0 ? `25vw` : `${Math.min(progress * 10, 90)}vw`, // Smooth transition
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <div className="relative aspect-[9/19] mx-auto">
            <img
              src="/mobile frame.png"
              className="absolute inset-0 rounded-2xl object-contain z-10 w-full h-full"
              alt="Mobile frame"
            />
            <div className="absolute inset-0 rounded-2xl overflow-hidden">
              <img
                src={sequence.image}
                alt="Patient Monitoring"
               
                className="object-contain w-[70%] md:w-[80%] mx-auto mt-8 md:mt-10 h-[85%] md:h-[90%]"
              />
            </div>
          </div>
          </motion.div>
        </div>
        
        <div className=" md:ml-40" >
          <h2 className="text-2xl md:text-4xl mx-4 md:mx-10 mt-5 font-bold text-gray-400 md:text-white">
          <span className={`block md:hidden max-w-[70%] text-${sequence.text.color}`}>
            {sequence.text.big}
          </span>
            <span className="text-xs md:text-sm block mt-4 text-left font-normal text-gray-400 md:text-white leading-tight">
              {sequence.text.small}
              {sequence.text.line3}
            </span>
          </h2>
        </div>
        <div className="hidden md:block absolute -right-20 max-w-[40%] ml-40" >
          <h2 className="text-2xl md:text-4xl mx-4 md:mx-10 mt-5 font-bold text-white">
            <span className="text-xs md:text-sm block mt-4 text-left font-normal text-gray-400 leading-tight">
              {sequence.text.small}
              {sequence.text.line3}
            </span>
          </h2>
        </div>
      </div>
    </motion.div>
  );
};

// Third Sequence Component
const DiseaseProgressionSequence = ({ isVisible, progress }) => {
  const sequence = {
    text: {
      big: "Disease Progression prediction",
      small: "Our tools predict disease progression, providing timely interventions and better management.",
      line3: "Using AI analytics we also identify high risk patients for CKD",
      color: "red-500",
    },
    image: "/mobile2img.png",
  };

  return (
    <motion.div 
      className="snap-center h-screen flex items-center justify-center w-full relative"
    >
      <div className="flex flex-col md:flex-row items-center justify-center w-full space-y-8 md:space-y-0 md:space-x-8">
        <div className="w-full absolute left-0 hidden md:block md:w-2/3 lg:w-[70%] text-center md:text-left order-1 md:order-none">
          <h2 className="text-2xl md:text-4xl mx-4 md:mx-10 mt-5 font-bold text-black">
            <span className={`block text-${sequence.text.color}`}>
              {sequence.text.big}
            </span>
            <span className="text-xs md:text-sm block mt-4 text-left font-normal text-gray-600 leading-tight">
              {sequence.text.small}
            </span>
            <span className="text-xs md:text-sm block my-1 text-left font-normal text-gray-600 leading-tight">
              {sequence.text.line3}
            </span>
          </h2>
        </div>

        <div className="w-1/2 md:w-1/3 lg:w-[30%] flex-shrink-0 max-w-xs order-2 md:order-none">
        <motion.div
          style={{
            position: "relative",
            left: `${progress * 50}vw`, // Adjust the position dynamically
          }}
          animate={{
            bottom: progress < 0 ? `2vw` : `${Math.min(progress * 5, 10)}vw`, // Smooth transition

            left: progress < 0 ? `30vw` : `${Math.min(progress * 10, 90)}vw`, // Smooth transition
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <div className="relative aspect-[9/19] mx-auto">
            <img
              src="/mobile frame.png"
              className="absolute inset-0 right-0 rounded-2xl object-contain z-10 w-full h-full"
              alt="Mobile frame"
            />
            <div className="absolute inset-0 rounded-2xl overflow-hidden">
              <img
                src={sequence.image}
                alt="Disease Progression"
               
                className="object-contain w-[70%] md:w-[80%] mx-auto mt-8 md:mt-10 h-[85%] md:h-[90%]"
              />
            </div>
          </div>
          </motion.div>
        </div>
        
        <div className="w-full block md:hidden md:w-2/3 lg:w-[70%] text-center md:text-left order-1 md:order-none">
          <h2 className="text-2xl md:text-4xl mx-4 md:mx-10 mt-5 font-bold text-black">
            <span className={`block text-${sequence.text.color}`}>
              {sequence.text.big}
            </span>
            <span className="text-xs md:text-sm block mt-4 text-center font-normal text-gray-600 leading-tight">
              {sequence.text.small}
            </span>
            <span className="text-xs md:text-sm block my-1 text-center font-normal text-gray-600 leading-tight">
              {sequence.text.line3}
            </span>
          </h2>
        </div>
      </div>
    </motion.div>
  );
};

// Main Component to Combine All Sequences
const MobileSequenceAnimation = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRefs = useRef([]);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const progress = (scrolled / maxScroll) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const sequences = [
    TreatmentAdherenceSequence,
    PatientMonitoringSequence,
    DiseaseProgressionSequence
  ];

  useEffect(() => {
    const container = containerRef.current;
    const handleScroll = () => {
      if (container) {
        const scrollTop = container.scrollTop;
        const windowHeight = container.clientHeight;
        const scrollHeight = container.scrollHeight - windowHeight;
        
        // Calculate progress between 0 and 1
        const progress = scrollTop / scrollHeight;
        
        // Calculate which section we're transitioning between
        const sectionHeight = windowHeight;
        const currentSectionIndex = Math.floor(scrollTop / sectionHeight);
        const sectionProgress = (scrollTop % sectionHeight) / sectionHeight;
        
        // Determine scroll direction and progress
        const scrollDirection = sectionProgress > 0.5 ? 1 : -1;
        const normalizedProgress = Math.abs(sectionProgress * 2 - 1) * scrollDirection;
        
        setCurrentIndex(currentSectionIndex);
        setScrollProgress(normalizedProgress);
      }
    };

    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const handleNavClick = (index) => {
    if (sectionRefs.current[index]) {
      sectionRefs.current[index].scrollIntoView({ 
        behavior: 'smooth', 
        block: 'center' 
      });
    }
  };

  return (
    <div 
      ref={containerRef}
      className="scroll-container overflow-x-hidden snap-y snap-mandatory h-screen overflow-y-scroll"
    >
      {/* Header section */}
      <div className="md:flex md:ml-10 ml-5 md:mb-5 justify-between snap-start">
        <div>
          <div className="gap-2.5 absolute self-start text-center text-3xl md:text-5xl font-bold capitalize">
            Your <span className="text-cyan-500">CKD partner</span>
          </div>
        </div>
        <div className="text-xs absolute right-4 md:mb-5 md:mt-0 mt-10 text-left ml-5 md:max-w-[30%] md:text-right md:mr-12 md:text-sm my-2">
          We are partnering with all kidney care stakeholders to create an ecosystem where the patient gets everything under one roof. 
        </div>
      </div>

      {/* Right side navigation */}
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 flex-col gap-4 z-40 hidden md:flex">
        {sequences.map((_, index) => (
          <button
            key={index}
            onClick={() => handleNavClick(index)}
            className="group relative flex items-center"
          >
            <div
              className={`w-2 h-6 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-red-500"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
            <span
              className="absolute left-6 text-sm text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap"
            >
              {`Screen ${index + 1}`}
            </span>
          </button>
        ))}
      </div>

      {/* Scrollable sections */}
      <div className="space-y-16 max-w-5xl mx-auto">
        {sequences.map((SequenceComponent, index) => (
          <div 
            key={index}
            ref={(el) => sectionRefs.current[index] = el}
          >
            <SequenceComponent 
            scrollProgress={scrollProgress}
              isVisible={currentIndex === index} 
              progress={currentIndex === index ? scrollProgress : 0}
            />
          </div>
        ))}
      </div>

      {/* Bottom navigation for mobile */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 flex md:hidden justify-center gap-2 z-40">
        {sequences.map((_, index) => (
          <button
            key={index}
            onClick={() => handleNavClick(index)}
            className={`w-2 h-2 rounded-full ${
              index === currentIndex ? "bg-red-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default MobileSequenceAnimation;