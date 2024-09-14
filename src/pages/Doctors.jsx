import React from 'react'
import FeaturesGrid from '../components/FeatureCard'
import DoctorContact from '../components/DoctorContact'
import Footer from '../components/Footer'
import AnimatedComputerScreen from '../components/AnimatedComputerScreen'
import VirtualCarePlatform from '../components/VirtualCarePlatform'

const Doctors = () => {
  return (
    <>
    <VirtualCarePlatform/>
    <AnimatedComputerScreen/>
    <FeaturesGrid/>
    <DoctorContact/>
    <Footer/>
    </>
  )
}

export default Doctors