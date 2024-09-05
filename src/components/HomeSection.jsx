import React from 'react';
import kidneyImage1 from '../assets/images/kidney-left.png'; // Path to the left kidney image
import kidneyImage2 from '../assets/images/kidney-right.png'; // Path to the right kidney image
import "../components/HomeSection.css"

const HomeSection = () => {
    return (
        <div className="bg-white py-12">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
                {/* Left Kidney Image with floating animation */}
                <div className="md:w-1/3 flex justify-center animate-floating">
                    <img src={kidneyImage1} alt="Kidney" className="w-1/2 md:w-full h-auto" />
                </div>

                {/* Center Text */}
                <div className="md:w-1/3 text-center my-8 md:my-0">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Your Trusted Partner in <span className="text-teal-500">Kidney Care</span>
                    </h1>
                    <p className="text-base md:text-lg text-gray-600">
                        A Compassionate Approach To Managing <br />
                        <span className="font-semibold text-teal-600">Chronic Kidney Disease</span>
                    </p>
                </div>

                {/* Right Kidney Image with floating animation */}
                <div className="md:w-1/3 flex justify-center animate-floating">
                    <img src={kidneyImage2} alt="Kidney" className="w-1/2 md:w-full h-auto" />
                </div>
            </div>
        </div>
    );
};

export default HomeSection;
