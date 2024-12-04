import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Blogpost = () => {
  const [blogPosts, setBlogPosts] = useState([]);
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

  // Fetch blog posts from the backend API
  useEffect(() => {
    fetch('http://localhost:5000/api/blogs')
      .then((response) => response.json())
      .then((data) => setBlogPosts(data))
      .catch((error) => console.error('Error fetching blog posts:', error));
  }, []);

  const cardVariants = (direction) => ({
    hidden: {
      opacity: 0,
      x: direction === 'left' ? -100 : direction === 'right' ? 100 : 0,
      y: direction === 'top' ? -100 : direction === 'bottom' ? 100 : 0,
      transition: { duration: 1, ease: 'easeInOut' }, // Slower disappearance
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 1, ease: 'easeOut', delay: 0.2 }, // Slower appearance with a small delay
    },
  });

  return (
    <>
      {/* Section Two */}
      <div
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 px-2 md:px-8 max-w-full md:max-w-[1310px] mx-auto"
      >
        {/* First Column */}
        {blogPosts[0] && (
          <motion.div
            className="border-2 border-teal-400 rounded-lg p-4"
            initial="hidden"
            animate={controls}
            variants={cardVariants('left')}
          >
            <div className="text-xs font-bold text-gray-500 mb-2 flex">
              {blogPosts[0].imageUrl && (
                <img
                  src={blogPosts[0].imageUrl}
                  alt="Icon"
                  className="w-8 h-8 mr-2"
                />
              )}
              {blogPosts[0].category}
            </div>
            {blogPosts[0].imageUrl && (
              <img
                className="w-full h-60 object-cover rounded-md mb-4"
                src={blogPosts[0].imageUrl}
                alt="Article"
              />
            )}
            <h3 className="text-2xl md:text-2xl lg:text-3xl font-bold">
              {blogPosts[0].title}
            </h3>
            <p className="text-sm text-gray-500 mt-4">
              {new Date(blogPosts[0].date).toLocaleDateString()}, {blogPosts[0].author}
            </p>
          </motion.div>
        )}

        {/* Second Column (2 Rows with no images) */}
        <div className="flex flex-col gap-4">
          {blogPosts[1] && (
            <motion.div
              className="border-2 border-teal-400 rounded-lg p-4"
              initial="hidden"
              animate={controls}
              variants={cardVariants('top')}
            >
              <div className="text-xs text-gray-500 mb-2 flex font-bold">
                {blogPosts[1].imageUrl && (
                  <img
                    src={blogPosts[1].imageUrl}
                    alt="Icon"
                    className="w-8 h-8 mr-2"
                  />
                )}
                {blogPosts[1].category}
              </div>
              <h3 className="text-2xl md:text-2xl lg:text-3xl font-bold">
                {blogPosts[1].title}
              </h3>
              <p className="text-sm text-gray-500 mt-4 mb-2">
                {new Date(blogPosts[1].date).toLocaleDateString()}, {blogPosts[1].author}
              </p>
            </motion.div>
          )}

          {blogPosts[2] && (
            <motion.div
              className="border-2 border-teal-400 rounded-lg p-4"
              initial="hidden"
              animate={controls}
              variants={cardVariants('bottom')}
            >
              <div className="text-xs text-gray-500 mb-2 flex font-bold">
                {blogPosts[2].imageUrl && (
                  <img
                    src={blogPosts[2].imageUrl}
                    alt="Icon"
                    className="w-8 h-8 mr-2"
                  />
                )}
                {blogPosts[2].category}
              </div>
              <h3 className="text-2xl md:text-2xl lg:text-3xl font-bold">
                {blogPosts[2].title}
              </h3>
              <p className="text-sm text-gray-500 mt-4 mb-2">
                {new Date(blogPosts[2].date).toLocaleDateString()}, {blogPosts[2].author}
              </p>
            </motion.div>
          )}
        </div>

        {/* Third Column (Same as First Column) */}
        {blogPosts[3] && (
          <motion.div
            className="border-2 border-teal-400 rounded-lg p-4"
            initial="hidden"
            animate={controls}
            variants={cardVariants('right')}
          >
            <div className="text-xs font-bold text-gray-500 mb-2 flex">
              {blogPosts[3].imageUrl && (
                <img
                  src={blogPosts[3].imageUrl}
                  alt="Icon"
                  className="w-8 h-8 mr-2"
                />
              )}
              {blogPosts[3].category}
            </div>
            {blogPosts[3].imageUrl && (
              <img
                className="w-full h-60 object-cover rounded-md mb-4"
                src={blogPosts[3].imageUrl}
                alt="Article"
              />
            )}
            <h3 className="text-2xl md:text-2xl lg:text-3xl font-bold">
              {blogPosts[3].title}
            </h3>
            <p className="text-sm text-gray-500 mt-4">
              {new Date(blogPosts[3].date).toLocaleDateString()}, {blogPosts[3].author}
            </p>
          </motion.div>
        )}
      </div>
    </>
  );
};

export default Blogpost;
