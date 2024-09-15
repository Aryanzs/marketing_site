// import React from 'react';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import specialistImage from '../assets/images/specialist.jpg';
// import careExecutiveImage from '../assets/images/customer.jpg';
// import medicinesImage from '../assets/images/medicine.jpg';

// const ServicesSection = () => {
//   const ServiceCard = ({ title, description, image, altText }) => {
//     const [ref, inView] = useInView({
//       triggerOnce: false,
//       threshold: 0.2,
//     });

//     const cardVariants = {
//       hidden: { opacity: 0, y: 50 },
//       visible: {
//         opacity: 1,
//         y: 0,
//         transition: {
//           duration: 0.6,
//           ease: [0.6, -0.05, 0.01, 0.99],
//         },
//       },
//     };

//     return (
//       <motion.div
//         ref={ref}
//         initial="hidden"
//         animate={inView ? "visible" : "hidden"}
//         variants={cardVariants}
//         className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
//       >
//         <div className="aspect-w-16 aspect-h-9">
//           <img
//             src={image}
//             alt={altText}
//             className="w-full h-full object-cover"
//           />
//         </div>
//         <div className="p-6">
//           <h3 className="text-2xl font-bold text-gray-800 mb-4">{title}</h3>
//           <p className="text-gray-600">{description}</p>
//         </div>
//       </motion.div>
//     );
//   };

//   return (
//     <div className="bg-gradient-to-b from-blue-50 to-white py-24 px-6">
//       <div className="container mx-auto">
//         <h2 className="text-center text-4xl md:text-5xl font-bold text-gray-800 mb-16">
//           And So Much More
//         </h2>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//           <div className="lg:row-span-2">
//             <ServiceCard
//               title="Enhanced Specialist Access"
//               description="Access specialists even in remote areas through our telemedicine services and collaborative care network. Spot your nearest Nephrologist and Dialysis centre!"
//               image={specialistImage}
//               altText="Enhanced Specialist Access"
//             />
//           </div>
          
//           <div>
//             <ServiceCard
//               title="Dedicated Patient Care Executive"
//               description="A patient care executive works with you to understand the patient need & ensure relevant care is made available."
//               image={careExecutiveImage}
//               altText="Dedicated Patient Care Executive"
//             />
//           </div>
          
//           <div>
//             <ServiceCard
//               title="Discounted Medicines & Lab Tests"
//               description="Utilize our ecosystem to the fullest and avail discounts on medicines from our trusted partners."
//               image={medicinesImage}
//               altText="Discounted Medicines"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ServicesSection;import React from "react";

import card1img from '../assets/images/specialist1.png';
import card2img from '../assets/images/customer1.png';
import card3img from '../assets/images/medicine1.png';

const WhyChooseKifayti = () => {
  return (
    <div className="bg-cover bg-blue-50 bg-center min-h-screen w-full flex flex-col relative">
      <div className="py-12 z-[1]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* First Column: First Card Only */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col text-left max-w-md mx-auto lg:max-w-full">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-teal-900 mb-4">
              Enhanced Specialist
              <br />
              Access
            </h2>
            <p className="text-gray-700 mb-6">
              Our holistic approach ensures that we look after your physical
              health and emotional well-being. We're here to support you every
              step of the way.
            </p>
            <img
              src={card1img}
              alt="Holistic Care"
              className="w-full h-[200px] md:h-[250px] flex-grow -mb-6"
            />
          </div>

          {/* Second Column: Second and Third Cards Stacked */}
          <div className="grid gap-6">
            {/* Second Card */}
            <div className="bg-white p-6 rounded-lg shadow-md grid grid-cols-1 md:grid-cols-3 items-center max-w-md mx-auto lg:max-w-full">
              {/* Left Side: Text Part */}
              <div className="md:col-span-2 mt-6 mb-6 text-center md:text-left">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-teal-900 mb-4">
                  Dedicated <br /> Patient Care <br /> Executive
                </h2>
                <p className="text-gray-700">
                  We create personalized treatment plans tailored to your needs
                  to provide you with the most effective care possible.
                </p>
              </div>

              {/* Right Side: Image Part */}
              <div className="flex justify-center md:justify-end">
                <img
                  src={card2img}
                  alt="Treatment Plan"
                  className="w-24 md:w-40 h-[150px] md:h-[200px] lg:-mb-10"
                />
              </div>
            </div>

            {/* Third Card */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center max-w-md mx-auto lg:max-w-full">
              {/* First Row */}
              <div className="flex flex-col md:flex-row items-start justify-between mb-4">
                {/* Left Column: Heading */}
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-teal-900 md:text-left mb-4 md:mb-0 md:mr-6">
                  Discounted Medicines & <br />
                  Lab Tests
                </h2>
                {/* Right Column: Image */}
                <img
                  src={card3img}
                  alt="Health Monitoring"
                  className="w-28 md:w-40 h-auto md:ml-6"
                />
              </div>
              {/* Second Row: Paragraph */}
              <p className="text-gray-700 md:text-left">
                Our mobile app streamlines health monitoring, provides easy
                access to vital information, and facilitates seamless
                communication with your care team—wherever you are.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseKifayti;
