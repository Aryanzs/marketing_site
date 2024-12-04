// BlogPage.jsx
import React, { useEffect, useState } from 'react';
import BlogCard from './BlogCard';

const BlogPage = () => {
  // State to hold blog posts and pagination
  const [blogPosts, setBlogPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 7;
  const [loading, setLoading] = useState(true);

  // Fetch blog posts from backend
  useEffect(() => {
    fetch('http://localhost:5000/api/blogs')
      .then((response) => response.json())
      .then((data) => {
        setBlogPosts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching blog posts:', error);
        setLoading(false);
      });
  }, []);

  // Calculate total pages
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

  // Scroll to top when currentPage changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const handleNextPage = () => {
    setCurrentPage((prevPage) =>
      prevPage < totalPages ? prevPage + 1 : prevPage
    );
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) =>
      prevPage > 1 ? prevPage - 1 : prevPage
    );
  };

  return (
    <section className="bg-gray-50 py-20 px-4 md:px-16 max-w-full mx-auto">
      {/* Section Heading */}
      <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl px-6 md:px-10 mb-10 text-center md:text-left">
        Blog Section
      </h1>

      {/* Loading Indicator */}
      {loading ? (
        <div className="text-center text-gray-500">Loading...</div>
      ) : (
        <>
          {/* Blog Post Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 px-2 md:px-8 max-w-full md:max-w-[1310px] mx-auto">
            {currentPosts.length > 0 ? (
              currentPosts.map((post, index) => {
                let direction;
                if (index % 3 === 0) {
                  direction = 'left';
                } else if (index % 3 === 1) {
                  direction = 'top';
                } else {
                  direction = 'right';
                }

                return (
                  <BlogCard key={post._id} post={post} direction={direction} />
                );
              })
            ) : (
              <div className="col-span-full text-center text-gray-500">
                No blogs on this page.
              </div>
            )}
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-center mt-8">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className={`px-4 py-2 mx-2 bg-teal-500 text-white rounded ${
                currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              Previous Page
            </button>
            <span className="px-4 py-2 mx-2 text-gray-700">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 mx-2 bg-teal-500 text-white rounded ${
                currentPage === totalPages
                  ? 'opacity-50 cursor-not-allowed'
                  : ''
              }`}
            >
              Next Page
            </button>
          </div>
        </>
      )}
    </section>
  );
};

export default BlogPage;
