import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Hook to track window size
function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 1200,
    height: typeof window !== "undefined" ? window.innerHeight : 800,
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}

const MobileSequenceAnimation = () => {
  const sections = [
    {
      id: 0,
      image: "/1.png",
      text: {
        big: "Treatment Adherence",
        small:
          "We help you stay on track with your medications and lifestyle changes,",
        line3: "making it easier to follow your treatment plan.",
        color: "text-red-500",
      },
    },
    {
      id: 1,
      image: "/mobile3img.png",
      text: {
        big: "Patient Monitoring & Data Analysis",
        small:
          "Continuous monitoring, real-time updates, and analytical tools keep you",
        line3: "and your healthcare team informed about your health status.",
        color: "text-red-500",
      },
    },
    {
      id: 2,
      image: "/mobile2img.png",
      text: {
        big: "Disease Progression Prediction",
        small:
          "Our tools predict disease progression, providing timely interventions and better management.",
        line3: "Using AI analytics, we also identify high-risk patients for CKD.",
        color: "text-red-500",
      },
    },
  ];

  const [activeSection, setActiveSection] = useState(0);
  const sectionRefs = useRef([]);
  const navRefs = useRef([]);
  const { width } = useWindowSize();

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        const index = sectionRefs.current.indexOf(entry.target);
        if (index !== -1 && entry.isIntersecting) {
          setActiveSection(index);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, options);
    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const scrollToSection = (index) => {
    sectionRefs.current[index]?.scrollIntoView({ behavior: "smooth" });
  };

  const isMobile = width < 640;
  const isTablet = width >= 640 && width < 1024;
  const isDesktop = width >= 1024;

  // Adjusted translation values for device categories
  const calculateTranslateX = (index) => {
    if (isDesktop) {
      if (index === 0) return "-70%";
      if (index === 1) return "0%";
      if (index === 2) return "100%";
    } else if (isTablet) {
      if (index === 0) return "50%";
      if (index === 1) return "0%";
      if (index === 2) return "-50%";
    } else {
      if (index === 0) return "-40%";
      if (index === 1) return "0%";
      if (index === 2) return "40%";
    }
    return "0%";
  };

  const imageVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -30 },
  };

  const textVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-white">
      {/* Header Section: Title and Partnering Text */}
      <div className="absolute top-0 left-0 right-0 flex flex-col md:flex-row items-start md:items-center justify-between px-6 md:px-12 py-8 z-30">
        <h1 className="text-2xl md:text-4xl font-bold text-black">
          Your <span className="text-cyan-500">CKD Partner</span>
        </h1>
        <p className="max-w-md text-sm md:text-base text-gray-700 mt-4 md:mt-0 md:text-right leading-relaxed">
          We are partnering with all kidney care stakeholders to create an
          ecosystem where the patient gets everything under one roof.
        </p>
      </div>

      {/* Scrollable Sections */}
      <div className="absolute inset-0 overflow-y-auto z-10 pt-32 md:pt-40 scroll-smooth">
        {sections.map((section, index) => (
          <section
            key={section.id}
            ref={(el) => (sectionRefs.current[index] = el)}
            className="min-h-screen flex items-center justify-center px-6 md:px-12 py-16"
          >
            <div className="w-full flex flex-col md:flex-row items-center md:justify-between">
              {/* Section 0: Text on the right side */}
              {index === 0 && (
                <motion.div
                  className="w-full md:w-1/2 text-left p-5 max-w-lg mr-auto  "
                  variants={textVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <h2 className="text-3xl md:text-5xl font-bold text-black leading-snug">
                    Treatment <span className={section.text.color}>Adherence</span>
                  </h2>
                  <p className="text-base md:text-lg mt-6 text-gray-600 leading-relaxed">
                    {section.text.small}
                  </p>
                  <p className="text-base md:text-lg mt-4 text-gray-600 leading-relaxed">
                    {section.text.line3}
                  </p>
                </motion.div>
              )}

              {/* Section 1: Title on left, remaining text on the right side */}
              {index === 1 && (
                <>
                  <motion.div
                    className="w-full md:w-1/3 text-left max-w-md p-5 m-auto"
                    variants={textVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-snug">
                      {section.text.big
                        .split(" ")
                        .slice(0, -1)
                        .join(" ")}{" "}
                      <span className={section.text.color}>
                        {section.text.big.split(" ").slice(-1)}
                      </span>
                    </h2>
                    <p className="text-sm md:text-lg mt-4 text-gray-600 leading-relaxed">
                      {section.text.small}
                    </p>
                  </motion.div>

                  <motion.div
                    className="w-full md:w-1/3 text-left md:text-right max-w-md m-auto"
                    variants={textVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                  >
                    <p className="text-sm md:text-lg mt-4 text-gray-600 leading-relaxed">
                      {section.text.line3}
                    </p>
                  </motion.div>
                </>
              )}

              {/* Section 2: Text on the left side */}
              {index === 2 && (
                <motion.div
                  className="w-full md:w-1/2 text-left max-w-md  ml-auto"
                  variants={textVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-snug">
                    Disease <br />
                    <span className={section.text.color}>Progression Prediction</span>
                  </h2>
                  <p className="text-sm md:text-lg mt-4 text-gray-600 leading-relaxed">
                    {section.text.small}
                  </p>
                  <p className="text-sm md:text-lg mt-3 text-gray-600 leading-relaxed">
                    {section.text.line3}
                  </p>
                </motion.div>
              )}
            </div>
          </section>
        ))}
      </div>

      {/* Mobile Frame - Centered and smoothly shifting */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none p-4">
        <motion.div
          animate={{ x: calculateTranslateX(activeSection) }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="relative aspect-[9/19] w-40 sm:w-48 md:w-60"
        >
          <img
            src="/mobile frame.png"
            className="absolute inset-0 rounded-2xl object-contain z-10 w-full h-full"
            alt="Mobile frame"
          />
          <div className="absolute inset-0 rounded-2xl overflow-hidden flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.img
                key={sections[activeSection].id}
                src={sections[activeSection].image}
                alt={`Mobile Screen ${activeSection + 1}`}
                className="object-contain w-3/5 md:w-4/5 h-auto mt-4"
                variants={imageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      {/* Navigation dots */}
      {!isMobile ? (
        <div className="absolute top-1/2 right-6 transform -translate-y-1/2 z-30 flex flex-col space-y-3">
          {sections.map((section, index) => (
            <button
              key={section.id}
              ref={(el) => (navRefs.current[index] = el)}
              onClick={() => scrollToSection(index)}
              className={`w-3 h-3 md:w-4 md:h-4 rounded-full border-2 border-gray-400 ${
                activeSection === index
                  ? "bg-red-500 border-red-500"
                  : "bg-transparent hover:bg-red-400"
              } transition-colors`}
              aria-label={`Go to section ${index + 1}`}
            ></button>
          ))}
        </div>
      ) : (
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3">
          {sections.map((section, index) => (
            <button
              key={section.id}
              ref={(el) => (navRefs.current[index] = el)}
              onClick={() => scrollToSection(index)}
              className={`w-3 h-3 rounded-full border-2 border-gray-400 ${
                activeSection === index
                  ? "bg-red-500 border-red-500"
                  : "bg-transparent hover:bg-red-400"
              } transition-colors`}
              aria-label={`Go to section ${index + 1}`}
            ></button>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileSequenceAnimation;
