
import bookImage from '../assets/images/books.png'; // Ensure this path is correct

const BlogSearchSection = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center bg-blue-50 p-4 md:p-8 lg:p-32 rounded-lg max-w-full mx-auto pt-16 md:pt-20">
      {/* Text and Search Section */}
      <div className="flex flex-col mb-8 lg:mb-0 lg:mr-8 text-center lg:text-left">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black">
          Your Kidney Care
        </h1>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-teal-500 mt-2">
          Resource Library
        </h2>
        {/* Search Bar */}
        <div className="relative mt-6 w-full lg:w-[500px]">
          <input
            type="text"
            placeholder="Search topics"
            className="px-4 py-4 w-full sm:max-w-[400px] md:max-w-[450px] rounded-lg border-2 border-gray-200 shadow-xl"
          />
        </div>

        <button className="bg-red-500 z-50 text-white px-6 py-4 w-full sm:w-32 mt-4  sm:-mt-10 sm:ml-[300px] md:ml-[350px] lg:ml-[390px] hover:bg-red-600 transition-colors">
          SEARCH
        </button>
      </div>

      {/* Image Section */}
      <div className="flex-shrink-0 mt-8 lg:mt-0">
        <img
          src={bookImage}
          alt="Stack of books"
          className="w-full max-w-xs lg:h-52 lg:max-w-none mx-auto"
        />
      </div>
    </div>
  );
};

export default BlogSearchSection;
