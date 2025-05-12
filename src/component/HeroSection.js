import React from 'react';
import './style.css';

const HeroSection = () => (
  // <section className="hero">
  //   <h1>Smart Carbon for Energy & <span className="highlight">Agriculture</span></h1>
  //   <p>We turn organic waste into powerful carbon solutions</p>
  //   <div className="hero-buttons">
  //     <button className="primary">Explore Product</button>
  //     <button>Contact Us</button>
  //   </div>
  // </section>
  <section className="hero-section">
        <div className="hero-text">
          <h1>
            Smart Carbon for <br /> Energy & <span className="culture">Agriculture</span>
          </h1>
          <p>We turn organic waste into powerful carbon solution </p>
          <div className="hero-buttons">
            <a href="Product" className="btn green">
              Explore Product
            </a>
            <a href="ContactUs" className="btn outline">
              Contact Us
            </a>
          </div>
        </div>
        <div className="hero-image"></div>
      </section>
);

export default HeroSection;