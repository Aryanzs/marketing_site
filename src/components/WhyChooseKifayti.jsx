
import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import card1img from '../assets/images/specialist1.png';
import card2img from '../assets/images/customer1.png';
import card3img from '../assets/images/medicine1.png';

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const WhyChooseKifayti = () => {
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const headerControls = useAnimation();

  const [ref1, inView1] = useInView({ triggerOnce: false, threshold: 0.2 });
  const [ref2, inView2] = useInView({ triggerOnce: false, threshold: 0.2 });
  const [ref3, inView3] = useInView({ triggerOnce: false, threshold: 0.2 });
  const [headerRef, headerInView] = useInView({ triggerOnce: false, threshold: 0.2 });

  React.useEffect(() => {
    if (inView1) controls1.start('visible');
    if (!inView1) controls1.start('hidden');
  }, [controls1, inView1]);

  React.useEffect(() => {
    if (inView2) controls2.start('visible');
    if (!inView2) controls2.start('hidden');
  }, [controls2, inView2]);

  React.useEffect(() => {
    if (inView3) controls3.start('visible');
    if (!inView3) controls3.start('hidden');
  }, [controls3, inView3]);

  React.useEffect(() => {
    if (headerInView) headerControls.start('visible');
    if (!headerInView) headerControls.start('hidden');
  }, [headerControls, headerInView]);

  return (
    <div className="bg-cover bg-blue-50 bg-center min-h-screen w-full flex justify-center items-center overflow-x-hidden">
      <div className="py-12 w-full max-w-7xl px-4 lg:px-8">
        <motion.h2
          ref={headerRef}
          className="text-center text-4xl md:text-5xl font-bold text-gray-800 mb-16"
          initial="hidden"
          animate={headerControls}
          variants={headerVariants}
        >
            Why Choose <span className="text-orange-500">Kifayti?</span>
            </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <motion.div
            ref={ref1}
            className="bg-white p-6 rounded-lg shadow-md flex flex-col text-left max-w-full"
            initial="hidden"
            animate={controls1}
            variants={cardVariants}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-teal-900 mb-4">
              Enhanced Specialist
              <br />
              Access
            </h2>
            <p className="text-gray-700 mb-6">
              Our holistic approach ensures that we look after your physical health and emotional well-being. We're here to support you every step of the way.
            </p>
            <img src={card1img} alt="Holistic Care" className="w-full h-[200px] md:h-[250px] flex-grow max-w-full" />
          </motion.div>

          <div className="grid gap-6">
            <motion.div
              ref={ref2}
              className="bg-white p-6 rounded-lg shadow-md grid grid-cols-1 md:grid-cols-3 items-center max-w-full"
              initial="hidden"
              animate={controls2}
              variants={cardVariants}
            >
              <div className="md:col-span-2 mt-6 mb-6 text-center md:text-left">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-teal-900 mb-4">
                  Dedicated <br /> Patient Care <br /> Executive
                </h2>
                <p className="text-gray-700">We create personalized treatment plans tailored to your needs to provide you with the most effective care possible.</p>
              </div>
              <div className="flex justify-center md:justify-end">
                <img src={card2img} alt="Treatment Plan" className="w-24 md:w-40 h-[150px] md:h-[200px] lg:-mb-10 max-w-full" />
              </div>
            </motion.div>

            <motion.div
              ref={ref3}
              className="bg-white p-6 rounded-lg shadow-md text-center max-w-full"
              initial="hidden"
              animate={controls3}
              variants={cardVariants}
            >
              <div className="flex flex-col md:flex-row items-start justify-between mb-4">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-teal-900 md:text-left mb-4 md:mb-0 md:mr-6">
                  Discounted Medicines & <br /> Lab Tests
                </h2>
                <img src={card3img} alt="Health Monitoring" className="w-28 md:w-40 h-auto md:ml-6 max-w-full" />
              </div>
              <p className="text-gray-700 md:text-left">
                Our mobile app streamlines health monitoring, provides easy access to vital information, and facilitates seamless communication with your care team—wherever you are.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseKifayti;
