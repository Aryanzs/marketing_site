import React, { useState } from 'react';

const Navbar = () => {
    // State to manage the mobile menu toggle
    const [isOpen, setIsOpen] = useState(false);

    // Function to toggle the mobile menu
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-white bg-opacity-30 backdrop-blur-lg shadow-lg fixed w-full z-10">
            <div className="container mx-auto px-6 py-3 flex justify-between items-center">
                <a href="#" className="text-2xl font-bold text-gray-800">Kifayti Health</a>
                <div className="hidden md:flex items-center space-x-4">
                    <a href="#" className="text-gray-800 hover:text-red-500 transition-colors">Home</a>
                    <a href="#" className="text-gray-800 hover:text-red-500 transition-colors">Doctors</a>
                    <a href="#" className="text-gray-800 hover:text-red-500 transition-colors">Patients</a>
                    <a href="#" className="text-gray-800 hover:text-red-500 transition-colors">Blog</a>
                    <a href="#" className="text-gray-800 hover:text-red-500 transition-colors">About</a>
                    <a href="#" className="text-gray-800 hover:text-red-500 transition-colors">Contact Us</a>
                </div>
                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
            </div>
            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="md:hidden bg-white bg-opacity-30 backdrop-blur-lg shadow-lg">
                    <div className="flex flex-col px-6 py-4 space-y-4">
                        <a href="#" className="text-gray-800 hover:text-red-500 transition-colors">Home</a>
                        <a href="#" className="text-gray-800 hover:text-red-500 transition-colors">Doctors</a>
                        <a href="#" className="text-gray-800 hover:text-red-500 transition-colors">Patients</a>
                        <a href="#" className="text-gray-800 hover:text-red-500 transition-colors">Blog</a>
                        <a href="#" className="text-gray-800 hover:text-red-500 transition-colors">About</a>
                        <a href="#" className="text-gray-800 hover:text-red-500 transition-colors">Contact Us</a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
