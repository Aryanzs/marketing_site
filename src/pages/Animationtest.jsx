import React, { useEffect, useState, useRef } from "react";

const AnimationTest = () => {
  const [progress, setProgress] = useState(0);
  const [targetProgress, setTargetProgress] = useState(0);
  const isScrolling = useRef(false);
  const scrollTimeout = useRef(null);
  const animationFrame = useRef(null);
  
  const sequences = [
    {
      text: {
        line1: "Take advantage of",
        line2: "real-world insights & evidence",
        color: "red-500"
      },
      image: "/1st.png"
    },
    {
      text: {
        line1: "Harness actionable data for",
        line2: "proactive healthcare management",
        color: "red-500"
      },
      image: "/2n.png"
    },
    {
      text: {
        line1: "Real-time escalation pathways and ",
        line2: "alert messages for enhanced decision making",
        color: "red-500"
      },
      image: "/3rd.png"
    },
    {
      text: {
        line1: "enable personalized, just-in-time ",
        line2: "interventions",
        color: "red-500"
      },
      image: "/4th.png"
    },
    {
      text: {
        line1: "Secure, important conversations between patients and ",
        line2: "healthcare care teams all at one place.",
        color: "red-500"
      },
      image: "/5th.png"
    },
    {
      text: {
        line1: "enhanced decision making powered by ",
        line2: "AI/ML & analytics",
        color: "red-500"
      },
      image: "/6th.png"
    }
  ];

  const totalSections = sequences.length - 1;
  const sectionSize = 1 / totalSections;

  // Smooth animation to target progress with slower speed
  const animateToTarget = () => {
    if (Math.abs(targetProgress - progress) < 0.001) {
      setProgress(targetProgress);
      animationFrame.current = null;
      return;
    }

    // Reduced animation speed by lowering this multiplier
    const newProgress = progress + (targetProgress - progress) * 0.05;
    setProgress(newProgress);
    animationFrame.current = requestAnimationFrame(animateToTarget);
  };

  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault();
      
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }

      isScrolling.current = true;
      
      // Reduce scroll sensitivity
      const delta = (Math.sign(e.deltaY) * sectionSize) * 0.5;
      const currentSection = Math.round(progress / sectionSize);
      const newTarget = Math.max(0, Math.min(1, (currentSection * sectionSize) + delta));
      
      setTargetProgress(newTarget);

      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
      animationFrame.current = requestAnimationFrame(animateToTarget);

      // Increased timeout for smoother transitions
      scrollTimeout.current = setTimeout(() => {
        isScrolling.current = false;
      }, 300);
    };

    // Add touch support for mobile
    const handleTouchStart = (e) => {
      e.preventDefault();
    };

    const handleTouchMove = (e) => {
      e.preventDefault();
      const touch = e.touches[0];
      const delta = touch.clientY - window.innerHeight / 2;
      
      const currentSection = Math.round(progress / sectionSize);
      const newTarget = Math.max(0, Math.min(1, (currentSection * sectionSize) + (delta / window.innerHeight * sectionSize)));
      
      setTargetProgress(newTarget);

      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
      animationFrame.current = requestAnimationFrame(animateToTarget);
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, [progress, targetProgress]);

  const getElementStyles = (index) => {
    const elementProgress = (progress * totalSections) - index;
    const visibility = Math.max(0, Math.min(1, 1 - Math.abs(elementProgress)));
    
    let translateY = 0;
    let translateX = 0;
    let scale = 1;
    let opacity = visibility;

    if (elementProgress > 0) {
      translateX = elementProgress * 100;
      scale = 1 - elementProgress * 0.05;
    } else if (elementProgress < 0) {
      translateY = Math.abs(elementProgress) * 100;
      scale = 0.95 + visibility * 0.05;
    }

    return {
      transform: `translate(${translateX}%, ${translateY}%) scale(${scale})`,
      opacity: opacity,
      // Increased transition duration for smoother animations
      transition: isScrolling.current 
        ? 'transform 0.3s ease-out, opacity 0.3s ease-out'
        : 'transform 0.8s ease-out, opacity 0.8s ease-out'
    };
  };

  return (
    <div className="relative w-full h-[90vh] py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-4 md:gap-8">
          {/* Left side - Images */}
          <div className="relative w-full md:w-1/2 aspect-[1.11] mb-4 md:mb-0">
            <img 
              src="/desktopframe.png" 
              className="absolute inset-0 rounded-lg object-contain w-full h-full"
              alt="Desktop frame"
            />
            {sequences.map((seq, index) => (
              <div
                key={`image-${index}`}
                className="absolute inset-0 rounded-lg p-2 md:p-4"
                style={{
                  ...getElementStyles(index),
                  marginTop: '-2rem' // Adjusted for mobile
                }}
              >
                <img
                  src={seq.image}
                  alt={`Sequence ${index + 1}`}
                  className={`object-contain w-full h-full ${index === 0 ? 'scale-90' : ''}`}
                />
              </div>
            ))}
          </div>

          {/* Right side - Text */}
          <div className="relative w-full md:w-[45%] h-[250px] md:h-[400px]">
            {sequences.map((seq, index) => (
              <div
                key={`text-${index}`}
                className="absolute top-1/2 -translate-y-1/2 w-full"
                style={{
                  ...getElementStyles(index),
                  // Adjusted text positioning for mobile
                  width: index === 0 ? '150%' : '100%',
                  left: index === 0 ? '-25%' : '0'
                }}
              >
                <div className="text-xl md:text-5xl font-bold text-black text-center md:text-left">
                  <span className="font-semibold block">{seq.text.line1}</span>
                  <span className={`font-semibold text-${seq.text.color} block`}>
                    {seq.text.line2}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimationTest;