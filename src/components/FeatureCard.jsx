import React from 'react';
import { Clock, TrendingUp, Wallet, Users, Truck, CheckSquare } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md transform transition duration-300 hover:scale-105 max-w-xs mx-auto">
      <Icon className="text-teal-800 mb-4" size={40} />
      <h3 className="text-lg font-semibold text-teal-700 mb-2">{description}</h3>
    </div>
  );
};

const FeaturesGrid = () => {
  const features = [
    {
      icon: Clock,
      title: "Reduce retrieval time",
      description: "Reduce retrieval time by up to 90% by accessing records from a single point",
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
      <div className="container lg:w-[1300px] mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          And So Much More
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-9 justify-center px-8 lg:px-20">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesGrid;
