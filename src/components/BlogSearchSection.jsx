import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Search } from 'lucide-react';
import bookImage from '../assets/images/books.png'; // Make sure this path is correct

const BlogSearchSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [searchTerm, setSearchTerm] = useState('');

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: [0.6, -0.05, 0.01, 0.99],
        staggerChildren: 0.1
      } 
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] } 
    },
  };

  const floatingAnimation = {
    y: ['-5px', '5px'],
    transition: {
      y: {
        duration: 2,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut',
      },
    },
  };

  return (
    <div className="bg-gradient-to-b from-blue-50 to-teal-50 py-20">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6"
      >
        <motion.div variants={itemVariants} className="md:w-1/2 mb-12 md:mb-0">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Your Kidney Care <span className="text-teal-500">Resource Library</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Explore our comprehensive collection of kidney care information and resources.
          </p>
          <motion.div 
            className="relative"
            animate={floatingAnimation}
          >
            <input
              type="text"
              placeholder="Search topics"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-4 pr-12 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-300 text-gray-700 transition-all duration-300"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-orange-500 text-white p-2 rounded-full hover:bg-orange-600 transition-all duration-300">
              <Search size={24} />
            </button>
          </motion.div>
        </motion.div>

        <motion.div variants={itemVariants} className="md:w-1/2 flex justify-center">
          <motion.img
            src={bookImage}
            alt="Books"
            className="w-2/3 md:w-1/2 lg:w-2/3 h-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1, ...floatingAnimation }}
            transition={{ 
              opacity: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] },
              scale: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] },
            }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default BlogSearchSection;