import React from 'react'
import HowItWorks from '../components/HowItWorks'
import AnotherContact from '../components/AnotherContact'
import Footer from '../components/Footer'
import CommunitySupport from '../components/CommunitySupport'
import ServicesSection from '../components/ServicesSection'
import KidneyCareSection from '../components/KidneyCareSection'

const Patients = () => {
  return (
    <>  
    
    <KidneyCareSection/>
    <ServicesSection/>
    <HowItWorks/>
    <CommunitySupport/>
    <AnotherContact/>
    <Footer/>
    </>
  )
}

export default Patients