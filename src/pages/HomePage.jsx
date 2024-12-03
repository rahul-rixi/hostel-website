import React from 'react'
import Header from './Header';
import AboutUs from './AboutUs';
import PrincipalMessage from './PrincipleMessage';
import Facilities from './Facilities';
import TestimonialCarousel from '../components/Testimonials';
import WardenMessage from './WardenMessage';




const HomePage = () => {
  return (
  <>
    <Header/>
    <AboutUs/>
    <PrincipalMessage/>
    <WardenMessage/>
   
    <TestimonialCarousel/>

  
  
  </>
  )
}

export default HomePage