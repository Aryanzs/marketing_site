import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// First Sequence Component
const TreatmentAdherenceSequence = ({ isVisible, progress, scrollProgress }) => {
  const sequence = {
    text: {
      big: "Treatment Adherence",
      small:
        "We help you stay on track with your medications and lifestyle changes,",
      line3: "making it easier to follow your treatment plan.",
      color: "text-red-500",
    },
    image: "/1.png",
  };

  return (
    <motion.div className="snap-center h-screen flex items-center justify-center w-full relative bg-white">
      <div className="flex flex-col md:flex-row items-center justify-center w-full px-6 md:px-12 gap-10 md:gap-16">
        {/* Mobile Frame Section */}
        <motion.div
          className="relative w-[70%] sm:w-1/2 md:w-[35%] flex-shrink-0 mb-10 md:mb-0"
          style={{ position: "relative" }}
          animate={{
            top: progress < 0 ? `10vw` : `${Math.min(progress * 5, 0)}vw`,
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <div className="relative aspect-[9/19] mx-auto">
            <img
              src="/mobile frame.png"
              className="absolute inset-0 rounded-2xl object-contain z-10 w-full h-full"
              alt="Mobile frame"
            />
            <div className="absolute inset-0 rounded-2xl overflow-hidden flex items-center justify-center">
              {/* Improved fade-in animation for the inside image */}
              <motion.img
                src={sequence.image}
                alt="Treatment Adherence"
                className="object-contain w-[60%] md:w-[70%] h-auto mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </div>
          </div>
        </motion.div>

        {/* Text Section */}
        <div className="w-full md:w-[55%] text-left md:pl-12">
          <h2 className="text-4xl md:text-5xl font-bold text-black leading-snug">
            Treatment <span className="text-red-500">Adherence</span>
          </h2>
          <p className="text-base md:text-lg mt-4 text-gray-600 leading-relaxed">
            {sequence.text.small}
          </p>
          <p className="text-base md:text-lg mt-2 text-gray-600 leading-relaxed">
            {sequence.text.line3}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

// Second Sequence Component
const PatientMonitoringSequence = ({ isVisible, progress }) => {
  const sequence = {
    text: {
      big: "Patient Monitoring & Data Analysis",
      small:
        "Continuous monitoring, real-time updates, and analytical tools keep you",
      line3: "and your healthcare team informed about your health status.",
      color: "text-red-500",
    },
    image: "/mobile3img.png",
  };

  return (
    <motion.div className="snap-center h-screen flex items-center justify-between w-full relative bg-white px-6 md:px-12">
      <div className="flex items-center justify-between w-full gap-10 md:gap-16">
        {/* Big Text on the Left */}
        <div className="w-[30%] hidden md:block text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-black leading-snug">
            Patient Monitoring <br />
            <span className="text-red-500">& Data Analysis</span>
          </h2>
        </div>

        {/* Mobile Frame in the Middle */}
        <motion.div
          className="relative w-[70%] sm:w-1/2 md:w-[35%] flex-shrink-0 mx-auto"
          style={{ position: "relative" }}
          animate={{
            top: progress < 0 ? `5vw` : `${Math.min(progress * 5, 0)}vw`,
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <div className="relative aspect-[9/19] mx-auto">
            <img
              src="/mobile frame.png"
              className="absolute inset-0 rounded-2xl object-contain z-10 w-full h-full"
              alt="Mobile frame"
            />
            <div className="absolute inset-0 rounded-2xl overflow-hidden flex items-center justify-center">
              {/* Improved fade-in animation for the inside image */}
              <motion.img
                src={sequence.image}
                alt="Patient Monitoring"
                className="object-contain w-[60%] md:w-[70%] h-auto mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </div>
          </div>
        </motion.div>

        {/* Small Text on the Right */}
        <div className="w-[30%] hidden md:block text-right">
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            {sequence.text.small}
          </p>
          <p className="text-base md:text-lg mt-2 text-gray-600 leading-relaxed">
            {sequence.text.line3}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

// Third Sequence Component
const DiseaseProgressionSequence = ({ isVisible, progress }) => {
  const sequence = {
    text: {
      big: "Disease Progression Prediction",
      small:
        "Our tools predict disease progression, providing timely interventions and better management.",
      line3: "Using AI analytics, we also identify high-risk patients for CKD.",
      color: "text-red-500",
    },
    image: "/mobile2img.png",
  };

  return (
    <motion.div className="snap-center h-screen flex items-center justify-between w-full relative bg-white px-6 md:px-12">
      <div className="flex flex-col md:flex-row items-center justify-between w-full gap-10 md:gap-16">
        {/* Left Side - Text */}
        <div className="w-full md:w-[50%] text-left md:pr-12">
          <h2 className="text-4xl md:text-5xl font-bold text-black leading-snug">
            Disease <br />
            <span className="text-red-500">Progression Prediction</span>
          </h2>
          <p className="text-base md:text-lg mt-4 text-gray-600 leading-relaxed">
            {sequence.text.small}
          </p>
          <p className="text-base md:text-lg mt-2 text-gray-600 leading-relaxed">
            {sequence.text.line3}
          </p>
        </div>

        {/* Right Side - Mobile Frame */}
        <motion.div
          className="relative w-[70%] sm:w-1/2 md:w-[35%] flex-shrink-0"
          style={{ position: "relative" }}
          animate={{
            bottom: progress < 0 ? `2vw` : `${Math.min(progress * 5, 0)}vw`,
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <div className="relative aspect-[9/19] mx-auto">
            <img
              src="/mobile frame.png"
              className="absolute inset-0 rounded-2xl object-contain z-10 w-full h-full"
              alt="Mobile frame"
            />
            <div className="absolute inset-0 rounded-2xl overflow-hidden flex items-center justify-center">
              {/* Improved fade-in animation for the inside image */}
              <motion.img
                src={sequence.image}
                alt="Disease Progression"
                className="object-contain w-[60%] md:w-[70%] h-auto mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};


// Main Component
const MobileSequenceAnimation = () => {
  const [isVisibleArr, setIsVisibleArr] = useState([]);
  const [progressValues, setProgressValues] = useState([]);
  const sectionRefs = useRef([]);
  
  const sequences = [
    TreatmentAdherenceSequence,
    PatientMonitoringSequence,
    DiseaseProgressionSequence,
  ];

  useEffect(() => {
    // Initialize arrays
    setIsVisibleArr(new Array(sequences.length).fill(false));
    setProgressValues(new Array(sequences.length).fill(0));

    const observer = new IntersectionObserver(
      (entries) => {
        const updatedVisibility = [...isVisibleArr];
        entries.forEach((entry) => {
          const index = sectionRefs.current.indexOf(entry.target);
          if (index !== -1) {
            updatedVisibility[index] = entry.intersectionRatio > 0.5;
          }
        });
        setIsVisibleArr(updatedVisibility);
      },
      { threshold: [0.5] }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      if (observer) {
        sectionRefs.current.forEach((ref) => {
          if (ref) observer.unobserve(ref);
        });
      }
    };
  }, [sequences.length]);

  useEffect(() => {
    const handleScroll = () => {
      const viewportHeight = window.innerHeight;
      const updatedProgress = [...progressValues];

      sectionRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          // Calculate how far we are into this section
          const sectionTop = rect.top;
          const sectionHeight = rect.height;

          // progress 0 when top of section at top of viewport
          // progress 1 when bottom of section at top of viewport
          let progress = 1 - (sectionTop + sectionHeight) / (viewportHeight + sectionHeight);
          // Clamp between 0 and 1
          progress = Math.max(0, Math.min(1, progress));

          updatedProgress[index] = progress;
        }
      });

      setProgressValues(updatedProgress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [progressValues]);

  return (
    <div className="relative w-full">
      {/* Header section */}
      <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-6 bg-white">
        {/* Left Side - Title */}
        <div className="text-center md:text-left">
          <h1 className="text-2xl md:text-4xl font-bold tracking-tight">
            Your <span className="text-cyan-500">CKD Partner</span>
          </h1>
        </div>

        {/* Right Side - Description */}
        <div className="mt-4 md:mt-0 text-sm md:text-base text-cyan-600 max-w-[40%] md:text-right leading-relaxed">
          <p>
            We are partnering with all kidney care stakeholders to create an
            ecosystem where the patient gets everything under one roof.
          </p>
        </div>
      </div>

      {/* Scrollable sections */}
      <div className="space-y-16 max-w-5xl mx-auto">
        {sequences.map((SequenceComponent, index) => (
          <div key={index} ref={(el) => (sectionRefs.current[index] = el)}>
            <SequenceComponent
              isVisible={isVisibleArr[index]}
              progress={progressValues[index]}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileSequenceAnimation;