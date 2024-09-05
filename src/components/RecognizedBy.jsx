import React from 'react';
import "../components/Recognizedby.css";
import iimbimg from "../assets/images/iimb.png";
import iimbnrscelimg from "../assets/images/iimbnsrcel.png";
import usembimg from "../assets/images/usemabssy.png";
import nexus from "../assets/images/nexus-logo-headline-with-subline.png";
import iitm from "../assets/images/logo-black.png";
import GINSERV from "../assets/images/ginserv.png";

const RecognizedBy = () => {
    const logos = [iimbimg, iimbnrscelimg, usembimg, nexus, iitm, GINSERV]; // Add more logos here

    return (
        
      <div className="logos">
              <h2 className="text-center text-2xl font-bold mb-6">Recognized By</h2>

        <div className="logos-slide">
          {/* Display logos twice for seamless scrolling */}
          {logos.map((logo, index) => (
            <img key={index} src={logo} alt={`Logo ${index}`} />
          ))}
          {logos.map((logo, index) => (
            <img key={index + logos.length} src={logo} alt={`Logo ${index}`} />
          ))}
            {logos.map((logo, index) => (
            <img key={index} src={logo} alt={`Logo ${index}`} />
          ))}
          {logos.map((logo, index) => (
            <img key={index + logos.length} src={logo} alt={`Logo ${index}`} />
          ))}
        </div>
      </div>
    );
  };

export default RecognizedBy;
