import React, { useState, useRef, useEffect } from "react"; 
import { motion, AnimatePresence } from "framer-motion";

const MobileSequenceAnimation = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const scrollRef = useRef(null);
  const isScrolling = useRef(false);
  const scrollAccumulator = useRef(0);
  const lastScrollTime = useRef(Date.now());
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const sequences = [
    {
      text: {
        line1: "Stay connected with",
        line2: "real-time updates",
        color: "blue-500",
      },
      image: "/mobile1img.png",
    },
    {
      text: {
        line1: "Manage your tasks",
        line2: "efficiently on the go",
        color: "green-500",
      },
      image: "/mobile2img.png",
    },
    {
      text: {
        line1: "Access insights",
        line2: "anytime, anywhere",
        color: "purple-500",
      },
      image: "/mobile3img.png",
    },
  ];

  useEffect(() => {
    const SCROLL_THRESHOLD = 100;
    const SCROLL_TIMEOUT = 200;
    const ANIMATION_COOLDOWN = 1000;

    const handleWheel = (e) => {
      e.preventDefault();

      const currentTime = Date.now();
      const timeSinceLastScroll = currentTime - lastScrollTime.current;

      if (timeSinceLastScroll > SCROLL_TIMEOUT) {
        scrollAccumulator.current = 0;
      }

      scrollAccumulator.current += Math.abs(e.deltaY);
      lastScrollTime.current = currentTime;

      if (scrollAccumulator.current > SCROLL_THRESHOLD && !isScrolling.current) {
        const newDirection = e.deltaY > 0 ? 1 : -1;
        const nextIndex = currentIndex + newDirection;

        if (nextIndex >= 0 && nextIndex < sequences.length) {
          isScrolling.current = true;
          setDirection(newDirection);
          setCurrentIndex(nextIndex);
          scrollAccumulator.current = 0;

          setTimeout(() => {
            isScrolling.current = false;
          }, ANIMATION_COOLDOWN);
        }
      }
    };

    const handleTouchStart = (e) => {
      touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
      touchEndX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
      const deltaX = touchStartX.current - touchEndX.current;

      if (Math.abs(deltaX) > 50 && !isScrolling.current) {
        const newDirection = deltaX > 0 ? 1 : -1;
        const nextIndex = currentIndex + newDirection;

        if (nextIndex >= 0 && nextIndex < sequences.length) {
          isScrolling.current = true;
          setDirection(newDirection);
          setCurrentIndex(nextIndex);

          setTimeout(() => {
            isScrolling.current = false;
          }, ANIMATION_COOLDOWN);
        }
      }
    };

    const element = scrollRef.current;
    if (element) {
      element.addEventListener("wheel", handleWheel, { passive: false });
      element.addEventListener("touchstart", handleTouchStart, { passive: false });
      element.addEventListener("touchmove", handleTouchMove, { passive: false });
      element.addEventListener("touchend", handleTouchEnd, { passive: false });
    }

    return () => {
      if (element) {
        element.removeEventListener("wheel", handleWheel);
        element.removeEventListener("touchstart", handleTouchStart);
        element.removeEventListener("touchmove", handleTouchMove);
        element.removeEventListener("touchend", handleTouchEnd);
      }
    };
  }, [currentIndex, sequences.length]);

  const handleNavClick = (index) => {
    if (!isScrolling.current && index !== currentIndex) {
      isScrolling.current = true;
      setDirection(index > currentIndex ? 1 : -1);
      setCurrentIndex(index);

      setTimeout(() => {
        isScrolling.current = false;
      }, 1000);
    }
  };

  const contentVariants = {
    initial: (direction) => ({
      opacity: 0,
      x: direction > 0 ? 100 : -100,
    }),
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        x: { type: "spring", stiffness: 50, damping: 20 },
        opacity: { duration: 0.5 },
      },
    },
    exit: (direction) => ({
      opacity: 0,
      x: direction > 0 ? -100 : 100,
      transition: {
        x: { type: "spring", stiffness: 50, damping: 20 },
        opacity: { duration: 0.5 },
      },
    }),
  };

  const isEven = currentIndex % 2 === 0;

  return (
    <div
      ref={scrollRef}
      className="relative flex items-center justify-center bg-white overflow-hidden mt-12 mb-12 px-4"
    >
      {/* Right side navigation */}
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-4 z-20 hidden md:flex">
        {sequences.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => handleNavClick(index)}
            className="group relative flex items-center"
            whileHover="hover"
          >
            <motion.div
              className={`w-2 h-6 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-red-500"
                  : "bg-gray-300 group-hover:bg-gray-400"
              }`}
            />
            <motion.span
              className="absolute left-6 text-sm text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap"
              initial={{ opacity: 0, x: -10 }}
              variants={{
                hover: { opacity: 1, x: 0 },
              }}
            >
              {`Screen ${index + 1}`}
            </motion.span>
          </motion.button>
        ))}
      </div>

      <div className="relative w-full max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-center w-full relative">
          {/* Mobile Frame */}
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={`mobile-${currentIndex}`}
              custom={direction}
              variants={contentVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className={`absolute top-0 md:static w-full md:w-1/3 lg:w-[30%] flex-shrink-0 max-w-xs ${
                isEven ? "left-0" : "right-0"
              }`}
              layout
            >
              <div className="relative aspect-[9/19] mx-auto">
                <img
                  src="/mobile frame.png"
                  className="absolute inset-0 rounded-2xl object-contain z-10 w-full h-full"
                  alt="Mobile frame"
                />
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                  <AnimatePresence initial={false}>
                    <motion.img
                      key={sequences[currentIndex].image}
                      src={sequences[currentIndex].image}
                      alt={`Sequence ${currentIndex + 1}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="object-contain w-full h-full"
                    />
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Text Content */}
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={`text-${currentIndex}`}
              custom={direction}
              variants={contentVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className={`absolute top-0 md:static w-full md:w-2/3 lg:w-[70%] min-h-[200px] flex items-center ${
                isEven ? "right-0" : "left-0"
              }`}
              layout
            >
              <div
                className={`w-full ${
                  isEven
                    ? "text-center md:text-left md:pl-8"
                    : "text-center md:text-right md:pr-8"
                }`}
              >
                <div className="space-y-4">
                  <h2 className="text-3xl md:text-4xl font-bold text-black leading-tight">
                    <span className="block">
                      {sequences[currentIndex].text.line1}
                    </span>
                    <span
                      className={`text-${sequences[currentIndex].text.color}`}
                    >
                      {sequences[currentIndex].text.line2}
                    </span>
                  </h2>
                  {/* Additional description can be added here */}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom navigation for mobile */}
        <div className="flex md:hidden justify-center mt-8 gap-2">
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
    </div>
  );
};

export default MobileSequenceAnimation;
