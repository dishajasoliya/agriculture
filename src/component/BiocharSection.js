import React from 'react';
import './style.css';
import soilImg from './images/soil.jpg';




const BiocharSection = () => {
  return (
    <section className="biochar-section">
      <h2>
      Improves soil, retains <span className="highlight">water naturally.</span>
      </h2>
      <div className="biochar-card">
        <img src={soilImg} alt="Biochar" className="biochar-img" />
        <div className="biochar-text">
          <h3>BIOCHAR</h3>
          <p>
            Biochar is a carbon-rich material produced from farm residue using the pyrolysis method. 
            It contains small amounts of NPK, which enhance soil fertility and support plant growth. 
            Widely used in regenerative agriculture, biochar improves crop nutrition, soil health, 
            and overall farming productivity. Its porous structure also aids in environmental remediation 
            and pollution reduction.
          </p>
        </div>
      </div>
    </section>
    

  )
};

export default BiocharSection;