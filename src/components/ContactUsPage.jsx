import React, { useState } from 'react';
import axios from 'axios'; // Import Axios for API requests
import phone from "../assets/figma images/phone call 1.png";

const ContactUsPage = () => {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  // State to manage success or error messages
  const [status, setStatus] = useState("");

  // Handle form input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    try {
      // Make a POST request to the backend
      const response = await axios.post("http://localhost:5000/api/contact/submit", formData);

      // Handle success response
      setStatus({ type: "success", message: response.data.success });
      setFormData({ firstName: "", lastName: "", email: "", message: "" }); // Clear the form
    } catch (error) {
      // Handle error response
      setStatus({
        type: "error",
        message: error.response?.data?.error || "Something went wrong. Please try again.",
      });
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-center py-16 md:py-20 px-6 md:px-10 bg-white min-h-screen">
      {/* Left Side: Form */}
      <div className="w-full md:w-1/2 p-4 md:p-6">
        <h2 className="text-4xl md:text-6xl font-bold mb-4 text-center md:text-left text-gray-800">
          Contact Us Today
        </h2>
        <p className="text-gray-600 mb-8 text-center md:text-left leading-relaxed">
          Schedule a consultation or request more information about our services. Let's work together to manage CKD effectively and improve your quality of life.
        </p>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full">
              <label htmlFor="firstName" className="block text-gray-700 mb-2 font-semibold">
                First name
              </label>
              <input
                type="text"
                id="firstName"
                placeholder="First name"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition duration-200"
              />
            </div>
            <div className="w-full">
              <label htmlFor="lastName" className="block text-gray-700 mb-2 font-semibold">
                Last name
              </label>
              <input
                type="text"
                id="lastName"
                placeholder="Last name"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition duration-200"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 mb-2 font-semibold">
              Email address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition duration-200"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700 mb-2 font-semibold">
              Your message
            </label>
            <textarea
              id="message"
              placeholder="Enter your question or message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition duration-200"
              rows="4"
            />
          </div>
          <button
            type="submit"
            className="w-full p-3 bg-gradient-to-r from-red-500 to-red-600 text-white font-bold rounded-lg shadow-md hover:shadow-lg hover:from-red-600 hover:to-red-700 transform hover:-translate-y-1 transition duration-300"
          >
            SUBMIT
          </button>
        </form>

        {/* Display status message */}
        {status && (
          <p
            className={`mt-4 text-center font-semibold ${
              status.type === "success" ? "text-green-600" : "text-red-600"
            }`}
          >
            {status.message}
          </p>
        )}
      </div>

      {/* Right Side: Image with 3D Effect */}
      <div className="w-full md:w-1/2 p-4 flex justify-center items-center mt-10 md:mt-0 relative">
        <div className="relative">
          <img
            src={phone}
            alt="Contact Us"
            className="rounded-lg object-cover max-w-full h-auto md:max-h-[500px] shadow-2xl transform transition-transform duration-300 ease-in-out hover:scale-105"
          />
          <div className="absolute -inset-2 rounded-lg  opacity-0 hover:opacity-100 blur-lg shadow-2xl transition-all duration-300 ease-in-out"></div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
