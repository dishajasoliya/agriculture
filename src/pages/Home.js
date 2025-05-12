import React from 'react'
import HeroSection from '../component/HeroSection';
import AboutSection from '../component/AboutSection';
import BiocharSection from '../component/BiocharSection';
import Pellet from '../component/Pellet';
import WhyChoose from '../component/WhyChoose';
import './style.css';

const Home = () => {
  return (
  <div className='home'>
    <HeroSection/>
    <AboutSection/>
    <BiocharSection/>
    <Pellet/>
    <WhyChoose/>

  </div>
  )
}

export default Home
