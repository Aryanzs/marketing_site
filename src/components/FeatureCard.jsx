import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Clock, TrendingUp, Wallet, Users, Truck, CheckSquare } from 'lucide-react';

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

const FeaturesGrid = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: Clock,
      title: "Reduce retrieval time",
      description: "Reduce retrieval time by upto 90% by accessing records from a single point",
    },
    {
      icon: TrendingUp,
      title: "Leverage data analysis",
      description: "Leverage data analysis to enhance your marketing effectiveness",
    },
    {
      icon: Wallet,
      title: "Optimize patient management",
      description: "Optimize patient management & increase your availability enhancing revenue generation",
    },
    {
      icon: Users,
      title: "Enhance patient experience",
      description: "Enhance overall patient experience through visuals & continuous engagement",
    },
    {
      icon: Truck,
      title: "Enhance last mile engagement",
      description: "Enhance last mile engagement with patients with delivery of medicines & tests with our partners",
    },
    {
      icon: CheckSquare,
      title: "Boost patient compliance",
      description: "Boost patient compliance leading to higher engagement and better treatment outcomes",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-blue-50 to-teal-50 py-16">
      <div className="container mx-auto px-4">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: -50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-4xl font-bold text-center text-gray-800 mb-12"
        >
          And So Much More.
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesGrid;