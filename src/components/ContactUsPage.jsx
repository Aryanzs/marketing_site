import React, { useState } from 'react';
import { motion } from 'framer-motion';
import phone from "../assets/images/telephonedalle-removebg.png"
const Header = () => (
  <header className="bg-white py-4 px-6 flex justify-between items-center">
    <div className="flex items-center">
      <img src="/api/placeholder/40/40" alt="Kifayti Health Logo" className="mr-2" />
      <span className="text-xl font-bold text-teal-600">Kifayti Health</span>
    </div>
    <nav>
      <ul className="flex space-x-6">
        <li><a href="#" className="text-gray-600 hover:text-gray-800">HOME</a></li>
        <li><a href="#" className="text-gray-600 hover:text-gray-800">DOCTORS</a></li>
        <li><a href="#" className="text-gray-600 hover:text-gray-800">PATIENTS</a></li>
        <li><a href="#" className="text-gray-600 hover:text-gray-800">BLOG</a></li>
        <li><a href="#" className="text-gray-600 hover:text-gray-800">ABOUT</a></li>
        <li><a href="#" className="text-orange-500 font-semibold border-b-2 border-orange-500">CONTACT US</a></li>
      </ul>
    </nav>
  </header>
);

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
            placeholder="First name"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
            placeholder="Last name"
          />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
          placeholder="email@janesdomain.net"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Your message</label>
        <textarea
          id="message"
          name="message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
          placeholder="Enter your question or message"
        ></textarea>
      </div>
      <div>
        <button type="submit" className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition-colors">
          SUBMIT
        </button>
      </div>
    </form>
  );
};

const ContactUsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold mb-4">Contact Us Today</h1>
            <p className="text-gray-600 mb-8">
              Schedule a consultation or request more information about our services. Let`s work together to manage CKD effectively and improve your quality of life.
            </p>
            <ContactForm />
          </motion.div>
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img src={phone} alt="Contact" className="w-full h-auto rounded-lg shadow-lg" />
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default ContactUsPage;