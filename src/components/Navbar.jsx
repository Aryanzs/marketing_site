import React, { useState, useRef, useEffect } from 'react';

const Navbar = () => {
    // State to manage the mobile menu toggle
    const [isOpen, setIsOpen] = useState(false);
    // State to manage the active menu item
    const [activeItem, setActiveItem] = useState('Home');
    // Ref to keep track of the navbar element
    const navRef = useRef(null);

    // Function to toggle the mobile menu
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Function to handle click on menu items
    const handleMenuItemClick = (item) => {
        setActiveItem(item);
        setIsOpen(false); // Close the mobile menu on selection
    };

    // Function to close the mobile menu when clicking outside
    const handleClickOutside = (event) => {
        if (navRef.current && !navRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        // Add event listener for clicks when the component mounts
        document.addEventListener('mousedown', handleClickOutside);
        // Clean up event listener when the component unmounts
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Menu items array for easier mapping
    const menuItems = [
        'Home',
        'Doctors',
        'Patients',
        'Blog',
        'About',
        'Contact Us',
    ];

    return (
        <nav ref={navRef} className="bg-white bg-opacity-30 backdrop-blur-lg shadow-lg fixed w-full z-10">
            <div className="container mx-auto px-6 py-3 flex justify-between items-center">
                <a href="#" className="flex items-center text-2xl font-bold text-teal-800">
                    {/* Dummy image before the logo */}
                    <img src="https://via.placeholder.com/40" alt="Logo" className="h-10 w-10 mr-2" />
                    Kifayti Health
                </a>
                <div className="hidden md:flex items-center space-x-10">
                    {menuItems.map((item) => (
                        <a
                            key={item}
                            href="#"
                            onClick={() => handleMenuItemClick(item)}
                            className={`text-teal-800 hover:text-red-500 font-semibold transition-colors ${
                                activeItem === item ? 'border-b-4 border-red-500 !text-red-500 font-bold' : ''
                            }`}
                        >
                            {item}
                        </a>
                    ))}
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
                    <div className="flex flex-col justify-center items-center px-6 py-4 space-y-4">
                        {menuItems.map((item) => (
                            <a
                                key={item}
                                href="#"
                                onClick={() => handleMenuItemClick(item)}
                                className={`text-teal-800 hover:text-red-500 font-semibold transition-colors ${
                                    activeItem === item ? 'border-b-4 border-red-500  !text-red-500 font-bold' : ''
                                }`}
                            >
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
