import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; // Import the Navbar
import Home from './pages/Home'; // Import the Home page
import Aboutus from './pages/Aboutus'; // Import the About Us page
import Blogs from './pages/Blogs'; // Import the Blogs page
import Contact from './pages/Contact'; // Import the Contact page
import Doctors from './pages/Doctors'; // Import the Doctors page
import Patients from './pages/Patients'; // Import the Patients page

function App() {
  return (
    <Router>
      <Navbar /> {/* Navbar that stays constant across all pages */}
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home Page */}
        <Route path="/about" element={<Aboutus />} /> {/* About Us Page */}
        <Route path="/blogs" element={<Blogs />} /> {/* Blogs Page */}
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/doctors" element={<Doctors />} /> {/* Doctors Page */}
        <Route path="/patients" element={<Patients />} /> {/* Patients Page */}
      </Routes>
    </Router>
  );
}

export default App;
