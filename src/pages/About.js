import React from 'react'
 import AboutHero from '../component/about/AboutHero';
 import AboutSection from '../component/AboutSection';
 import ValueImpact from '../component/about/ValueImpact';
 import CallToAction from '../component/about/CallToAction';
 import '../component/about/about.css';

const About = () => {
  return (
    <div className='about'>
        <AboutHero/>
       <AboutSection/>
       <ValueImpact/>
       <CallToAction/>
    </div>
  )
}

export default About

