import React from 'react';
import './style.css';


const AboutSection = () => (
  
      <section className="about-container">
      {/* Text Section */}
      <div className="about-text">
        <p className="about-label">About Company</p>
        <h1 className="about-heading">
          Enrich Soil. Store Carbon. Boost Yields.{" "}
          <span className="green-text">Grow Sustainably.</span>
        </h1>
        <p className="about-paragraph">
          At <span className="highlight">Biocrafters</span>, we are redefining the future of energy and agriculture
          with sustainable, carbon-smart solutions. Specializing in the production and supply of biocoal and biochar,
          our mission is to bridge the gap between environmental responsibility and industrial innovation.By transforming organic waste into high-value carbon products, we help reduce dependency on fossil fuels and
          support regenerative agriculture—creating a cleaner, greener, and more sustainable world.
        </p>
        <p className="about-paragraph">
          Founded with a vision to combat climate change through practical and scalable technology, our journey began
          with a simple but powerful idea: waste is not waste—it’s a resource. With years of research and collaboration
          with environmental experts, engineers, and farmers, we’ve developed efficient processes to convert biomass
          into eco-friendly energy (biocoal) and soil-enhancing carbon (biochar).
        </p>
        <a className="read-more" >
          Read More →
        </a>
      </div>

    
     
      {/* <div className="image-box soil"></div> */}
      
<div className="about-image">
        
          <img src="images/carbon.jpg"  alt="Biocrafters"  />  
          </div>
    </section>


);

export default AboutSection;