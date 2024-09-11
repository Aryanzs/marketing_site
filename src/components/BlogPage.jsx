import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const BlogPage = () => {
  // Animation controls and Intersection Observer setup for the blog post
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: false, 
    threshold: 0.4, 
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  // Define animation variants for cards
  const cardVariants = (direction) => ({
    hidden: { 
      opacity: 0, 
      x: direction === 'left' ? -100 : direction === 'right' ? 100 : 0,
      y: direction === 'top' ? -100 : direction === 'bottom' ? 100 : 0,
    },
    visible: { 
      opacity: 1, 
      x: 0,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' } 
    },
  });

  const articles = [
    {
      id: 1,
      title: "Blog Post Title 1",
      category: "Blog Post / Report",
      date: "20th June 2024",
      image: "https://via.placeholder.com/400",
    },
    {
      id: 2,
      title: "Blog Post Title 2",
      category: "News",
      date: "15th July 2024",
      image: "https://via.placeholder.com/400",
    },
    {
      id: 3,
      title: "Blog Post Title 3",
      category: "Blog Post / Report",
      date: "30th August 2024",
      image: "https://via.placeholder.com/400",
    },
    {
      id: 4,
      title: "Blog Post Title 4",
      category: "News",
      date: "5th September 2024",
      image: "https://via.placeholder.com/400",
    },
    {
      id: 5,
      title: "Blog Post Title 5",
      category: "Blog Post / Report",
      date: "10th October 2024",
      image: "https://via.placeholder.com/400",
    },
    {
      id: 6,
      title: "Blog Post Title 6",
      category: "News",
      date: "12th November 2024",
      image: "https://via.placeholder.com/400",
    },
  ];

  return (
    <section className="bg-gray-50 py-20 px-4 md:px-16">
      {/* Section Header */}
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-6">
          <h2 className="text-2xl md:text-4xl font-bold text-black mb-6 lg:mb-0">
            Latest Blog Posts
          </h2>
          <div className="lg:text-right lg:ml-6 w-full lg:w-auto">
            <p className="text-gray-600 mb-4 text-sm md:text-base">
              Explore our latest news, articles, and resources to stay informed and engaged.
            </p>
          </div>
        </div>
      </div>

      {/* Blog Grid */}
      <div
        ref={ref}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 px-2 md:px-8 max-w-full md:max-w-[1310px] mx-auto"
      >
        {articles.map((article, index) => (
          <motion.div
            key={article.id}
            className="border-2 border-teal-400 rounded-lg p-4 bg-white shadow-lg"
            initial="hidden"
            animate={controls}
            variants={cardVariants(index % 2 === 0 ? 'left' : 'right')} 
          >
            <div className="text-xs font-bold text-gray-500 mb-2 flex items-center">
              <img
                src="https://via.placeholder.com/50"
                alt="Icon"
                className="w-8 h-8 mr-2"
              />
              {article.category}
            </div>
            <img
              className="w-full h-60 object-cover rounded-md mb-4"
              src={article.image}
              alt={article.title}
            />
            <h3 className="text-2xl md:text-2xl lg:text-3xl font-bold">
              {article.title}
            </h3>
            <p className="text-sm text-gray-500 mt-4">
              {article.date}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BlogPage;
