import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import specialistImage from '../assets/images/specialist.jpg';
import careExecutiveImage from '../assets/images/customer.jpg';
import medicinesImage from '../assets/images/medicine.jpg';

const ServicesSection = () => {
  const ServiceCard = ({ title, description, image, altText }) => {
    const [ref, inView] = useInView({
      triggerOnce: false,
      threshold: 0.2,
    });

    const cardVariants = {
      hidden: { opacity: 0, y: 50 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.6,
          ease: [0.6, -0.05, 0.01, 0.99],
        },
      },
    };

    return (
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={cardVariants}
        className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
      >
        <div className="aspect-w-16 aspect-h-9">
          <img
            src={image}
            alt={altText}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white py-24 px-6">
      <div className="container mx-auto">
        <h2 className="text-center text-4xl md:text-5xl font-bold text-gray-800 mb-16">
          And So Much More
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="lg:row-span-2">
            <ServiceCard
              title="Enhanced Specialist Access"
              description="Access specialists even in remote areas through our telemedicine services and collaborative care network. Spot your nearest Nephrologist and Dialysis centre!"
              image={specialistImage}
              altText="Enhanced Specialist Access"
            />
          </div>
          
          <div>
            <ServiceCard
              title="Dedicated Patient Care Executive"
              description="A patient care executive works with you to understand the patient need & ensure relevant care is made available."
              image={careExecutiveImage}
              altText="Dedicated Patient Care Executive"
            />
          </div>
          
          <div>
            <ServiceCard
              title="Discounted Medicines & Lab Tests"
              description="Utilize our ecosystem to the fullest and avail discounts on medicines from our trusted partners."
              image={medicinesImage}
              altText="Discounted Medicines"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;