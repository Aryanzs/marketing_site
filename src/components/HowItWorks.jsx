import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { User, Activity, Pill, Users, LineChart, Clock } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-white p-6 rounded-lg shadow-md"
    >
      <Icon className="text-teal-600 mb-4" size={24} />
      <h3 className="text-lg font-semibold text-teal-700 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

const HowItWorks = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: User,
      title: "Patient's account setup",
      description: "and onboarding",
    },
    {
      icon: Activity,
      title: "Continuous monitoring",
      description: "of health metrics",
    },
    {
      icon: Pill,
      title: "Medicine management",
      description: "& tracking",
    },
    {
      icon: Users,
      title: "Continuous engagement",
      description: "by executives",
    },
    {
      icon: LineChart,
      title: "Predictive analysis",
      description: "& data driven decisions",
    },
    {
      icon: Clock,
      title: "Outcome tracking",
      description: "& preventive steps",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white py-16">
      <div className="container mx-auto px-4">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: -50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-4xl font-bold text-center text-gray-800 mb-12"
        >
          How Does It Work?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default HowItWorks;