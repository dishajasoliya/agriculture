import React from 'react'
import ContactHero from '../component/contact/ContactHero';
import Map from '../component/contact/Map';
import ContactMap from '../component/contact/ContactMap';
import '../component/contact/contact.css';

const ContactUs = () => {
  return (
    <div className='contact'>
    <ContactHero/>
    <Map/>
    <ContactMap/>
    </div>
  )
}

export default ContactUs
