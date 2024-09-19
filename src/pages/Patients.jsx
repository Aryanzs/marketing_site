import React from 'react'
import HowItWorks from '../components/HowItWorks'
import AnotherContact from '../components/AnotherContact'
import Footer from '../components/Footer'
import CommunitySupport from '../components/CommunitySupport'
import ServicesSection from '../components/ServicesSection'
import KidneyCareSection from '../components/KidneyCareSection'
import ScrollableMobileSection from '../components/ScrollableMobileSection'

const Patients = () => {
  return (
    <>  
    
    <KidneyCareSection/>
    <ScrollableMobileSection/>
    <ServicesSection/>
    <HowItWorks/>
    <CommunitySupport/>
    <AnotherContact/>
    <Footer/>
    </>
  )
}

export default Patients