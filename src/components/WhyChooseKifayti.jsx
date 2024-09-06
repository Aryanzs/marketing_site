import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import card1img from "../assets/images/card1.jpg";
import card2img from "../assets/images/card2.jpg";
import card3img from "../assets/images/card3.jpg";

const FeatureCard = ({ title, description, image, isMain }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const cardVariants = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hidden: { opacity: 0, y: 50, transition: { duration: 0.5 } }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={cardVariants}
      className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${
        isMain ? 'md:col-span-2' : ''
      }`}
    >
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-4 text-sm leading-relaxed">{description}</p>
      </div>
      <img src={image} alt={title} className="w-full h-48 object-cover" />
    </motion.div>
  );
};

const WhyChooseKifayti = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const containerVariants = {
    visible: { 
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2,
      } 
    },
    hidden: {}
  };

  const itemVariants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 20 }
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-teal-50 py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="mb-12"
        >
          <motion.h2 
            variants={itemVariants} 
            className="text-3xl md:text-4xl font-bold text-center mb-6"
          >
            Why Choose <span className="text-orange-500">Kifayti?</span>
          </motion.h2>
          <motion.div 
            variants={itemVariants}
            className="flex flex-col md:flex-row items-center justify-between"
          >
            <div className="md:w-1/2 text-left mb-6 md:mb-0">
              <p className="text-lg text-gray-700 leading-relaxed">
                We provide comprehensive & personalized support, tools & resources 
                that you need to manage your CKD with confidence and ease.
              </p>
            </div>
            <div className="md:w-1/2 text-left md:text-right">
              <p className="text-base text-gray-600 leading-relaxed">
                Our holistic approach ensures that we look after your physical health 
                and emotional well-being, supporting you every step of the way.
              </p>
            </div>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard
            title="Holistic Care For A Better Life"
            description="Our comprehensive approach addresses both your physical and emotional needs, providing support at every stage of your journey."
            image={card1img}
            isMain={true}
          />
          <div className="flex flex-col gap-6">
            <FeatureCard
              title="Tailored Treatment Plan"
              description="We create personalized treatment plans tailored to your unique needs, ensuring the most effective care possible."
              image={card2img}
            />
            <FeatureCard
              title="Health Monitoring Anytime, Anywhere"
              description="Our mobile app allows for seamless health tracking and communication with your care team, no matter where you are."
              image={card3img}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseKifayti;