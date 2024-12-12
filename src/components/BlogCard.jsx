import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom'; // Import Link

const BlogCard = ({ post, direction }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false, // Allow animation to trigger multiple times
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden'); // Reset to hidden when out of view
    }
  }, [controls, inView]);

  const cardVariants = {
    hidden: {
      opacity: 0,
      x: direction === 'left' ? -100 : direction === 'right' ? 100 : 0,
      y: direction === 'top' ? -100 : direction === 'bottom' ? 100 : 0,
      transition: { duration: 1, ease: 'easeInOut' },
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 1, ease: 'easeOut', delay: 0.2 },
    },
  };

  const imageSrc = post.uploadedImagePath
    ? `http://localhost:5000${post.uploadedImagePath}`
    : post.imageUrl;

  return (
    <Link to={`/blogs/${post._id}`} className="block"> {/* Wrap the motion div in Link */}
      <motion.div
        ref={ref}
        className="border-2 border-teal-400 rounded-lg p-4 cursor-pointer" // Add cursor-pointer for better UX
        initial="hidden"
        animate={controls}
        variants={cardVariants}
      >
        {/* Shared Layout Content */}
        <div className="text-xs font-bold text-gray-500 mb-2 flex">
          {imageSrc && (
            <img
              src={imageSrc}
              alt="Icon"
              className="w-8 h-8 mr-2"
            />
          )}
          {post.category}
        </div>

        {/* Conditional Layouts */}
        {direction === 'left' || direction === 'right' ? (
          <>
            {imageSrc && (
              <img
                className="w-full h-60 rounded-md mb-4 object-contain"
                src={imageSrc}
                alt="Article"
                style={{ aspectRatio: '16/9' }} // Ensures consistent aspect ratio
              />
            )}
            <h3 className="text-2xl md:text-2xl lg:text-3xl font-bold">
              {post.title}
            </h3>
            <p className="text-sm text-gray-500 mt-4">
              {new Date(post.date).toLocaleDateString()}, {post.author}
            </p>
          </>
        ) : direction === 'top' || direction === 'bottom' ? (
          <>
            {imageSrc && (
              <img
                className="w-full h-60 rounded-md mb-4 object-contain"
                src={imageSrc}
                alt="Article"
                style={{ aspectRatio: '16/9' }} // Ensures consistent aspect ratio
              />
            )}
            <h3 className="text-2xl md:text-2xl lg:text-3xl font-bold">
              {post.title}
            </h3>
            <p className="text-sm text-gray-500 mt-4">
              {new Date(post.date).toLocaleDateString()}, {post.author}
            </p>
          </>
        ) : (
          <>
            {imageSrc && (
              <img
                className="w-full h-60 rounded-md mb-4 object-contain"
                src={imageSrc}
                alt="Article"
                style={{ aspectRatio: '16/9' }} // Ensures consistent aspect ratio
              />
            )}
            <h3 className="text-2xl md:text-2xl lg:text-3xl font-bold">
              {post.title}
            </h3>
            <p className="text-sm text-gray-500 mt-4">
              {new Date(post.date).toLocaleDateString()}, {post.author}
            </p>
          </>
        )}
      </motion.div>
    </Link>
  );
};

export default BlogCard;
