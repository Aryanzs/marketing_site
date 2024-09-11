import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeItem, setActiveItem] = useState('Home');
    const navRef = useRef(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleMenuItemClick = (item) => {
        setActiveItem(item);
        setIsOpen(false); // Close the mobile menu on selection
    };

    const menuItems = [
        { name: 'Home', path: '/' },
        { name: 'Doctors', path: '/doctors' },
        { name: 'Patients', path: '/patients' },
        { name: 'Blog', path: '/blogs' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav ref={navRef} className="bg-white bg-opacity-30 backdrop-blur-lg shadow-lg fixed w-full z-10">
            <div className="container mx-auto px-6 py-3 flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold text-teal-800">
                    Kifayti Health
                </Link>
                <div className="hidden md:flex items-center space-x-10">
                    {menuItems.map((item) => (
                        <Link
                            key={item.name}
                            to={item.path}
                            onClick={() => handleMenuItemClick(item.name)}
                            className={`text-teal-800 hover:text-red-500 font-semibold transition-colors ${
                                activeItem === item.name ? 'border-b-4 border-red-500 !text-red-500 font-bold' : ''
                            }`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden bg-white bg-opacity-30 backdrop-blur-lg shadow-lg">
                    <div className="flex flex-col justify-center items-center px-6 py-4 space-y-4">
                        {menuItems.map((item) => (
                            <Link
                                key={item.name}
                                to={item.path}
                                onClick={() => handleMenuItemClick(item.name)}
                                className={`text-teal-800 hover:text-red-500 font-semibold transition-colors ${
                                    activeItem === item.name ? 'border-b-4 border-red-500  !text-red-500 font-bold' : ''
                                }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
