import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import articleImage from '../assets/images/card3.jpg'; // Replace with the actual image path

const ArticleCard = ({ article, index }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return (
    <motion.div 
      ref={ref}
      className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:shadow-xl"
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 }
      }}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <span className="inline-block px-3 py-1 text-xs font-semibold text-teal-700 bg-teal-100 rounded-full mb-2">
          {article.category}
        </span>
        <h3 className="text-xl font-bold mb-2 text-gray-800">{article.title}</h3>
        <p className="text-sm text-gray-600">
          {article.date}, {article.organization}
        </p>
      </div>
    </motion.div>
  );
};

const SupportAndEducation = () => {
  const articles = [
    {
      id: 1,
      category: 'Blog Post',
      title: "Understanding Chronic Kidney Disease: A Comprehensive Guide",
      date: '20th June 2024',
      organization: 'Kifayti Health',
      image: articleImage,
    },
    {
      id: 2,
      category: 'News',
      title: "Breakthrough in CKD Treatment: New Study Reveals Promising Results",
      date: '15th June 2024',
      organization: 'Renal Health Institute',
      image: articleImage,
    },
    {
      id: 3,
      category: 'Report',
      title: "Nutrition and CKD: Foods to Embrace and Avoid",
      date: '10th June 2024',
      organization: 'Kidney Care Alliance',
      image: articleImage,
    },
    {
      id: 4,
      category: 'Webinar',
      title: "Living Well with CKD: Strategies for Maintaining Quality of Life",
      date: '5th June 2024',
      organization: 'Kifayti Health',
      image: articleImage,
    },
  ];

  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return (
    <div className="bg-gradient-to-br from-blue-50 to-teal-50 py-16">
      <div className="container mx-auto px-6">
        <motion.div 
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: -20 }
          }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >

          <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive support and education to empower you in managing your kidney health with confidence.
          </p>
        </motion.div>

        <motion.div 
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 20 }
          }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col md:flex-row justify-between items-center mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-0">
            Support And Education
          </h3>
          <p className="text-lg text-gray-600 text-center md:text-right md:max-w-lg">
            Explore our wealth of educational resources, support groups, and continuous communication 
            to stay informed and engaged in your health journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {articles.map((article, index) => (
            <ArticleCard key={article.id} article={article} index={index} />
          ))}
        </div>

        <motion.div 
          className="text-center mt-12"
          initial="hidden"
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 20 }
          }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <button className="bg-orange-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-orange-600 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Explore Resources
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default SupportAndEducation;