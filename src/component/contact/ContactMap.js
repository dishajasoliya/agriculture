import React from 'react'
import './contact.css';

const ContactMap = () => {
  return (
  //   <div className="contact-container">
  //   <div className="contact-form">
  //     <h2>Contact Us</h2>
  //     <form>
  //       <label>Name</label>
  //       <input type="text" placeholder="Your Name" />
  //       <label>Email</label>
  //       <input type="email" placeholder="Your Email" />
  //       <label>Message</label>
  //       <textarea placeholder="Your Message"></textarea>
  //       <button type="submit">Send Message</button>
  //     </form>
  //   </div>

  //   <div className="contact-info">
  //     <p className="description">
  //       Get in touch with our team for inquiries about our products and services.
  //     </p>
  //     <h3>Get in touch</h3>
  //     <div className="icons">
  //       <img src="\images\Call.png" alt='check'/>
  //       <img src="\images\Email.png" alt='check'/>
  //       <img src="\images\Mapp.png" alt='check'/>
  //     </div>
  //     <div className="map">
  //       <img
  //         src="\images\Rectangle.png"
  //         width="90%"
  //         height="90%"
  //         allowFullScreen=""
  //         loading="lazy"
  //         title="Google Map"
  //       ></img>
  //     </div>
  //   </div>
  // </div>

  <div className="contact-section">
  <div className="contact-left">
    <h2>Contact Us</h2>
    
    <form className="contact-form">
      <label>Name</label>
      <input type="text" placeholder="Your Name" />

      <label>Email</label>
      <input type="email" placeholder="Your Email" />

      <label>Message</label>
      <textarea placeholder="Your Message" rows="5"></textarea>

      <button type="submit">Send Message</button>
    </form>
  </div>

  <div className="contact-right">
  <p className="description">
      Get in touch with our team for inquiries about our products and services.
    </p>
    <h3>Get in touch</h3>
    <div className="icons">
      {/* <div className="icon-circle">📞</div>
      <div className="icon-circle">✉️</div>
      <div className="icon-circle">📍</div> */}
       <img src="\images\Call.png" alt='check'/>
         <img src="\images\Email.png" alt='check'/>
         <img src="\images\Mapp.png" alt='check'/>
    </div>
    <img
      title="Google Maps"
      src="\images\Rectangle.png"
      width="610px"
      height="560px"
      style={{ border: "0", borderRadius: "10px" }}
      allowFullScreen=""
      loading="lazy"
    ></img>
  </div>
</div>
  )
}

export default ContactMap
