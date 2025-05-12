import React from 'react'
import './style.css';

const WhyChoose = () => {
  return (
    <section className="why-choose-us">
    <h2>
      Why Choose Us <span className="leaf">Biocrafters</span>
    </h2>
    <div className="features">
      <div className="feature">
        <img src="/images/inovation.png" alt="Sustainable Innovation"></img>
        <h3>Sustainable Innovation</h3>
        <p>
          We transform agricultural waste into eco-friendly energy and soil
          solutions.
        </p>
      </div>
      <div className="feature">
        <img src="/images/product.png" alt="High-Quality Products"></img>
        <h3>High-Quality Products</h3>
        <p>
          Our biocoal and biochar are produced using advanced pyrolysis
          technology.
        </p>
      </div>
      <div className="feature">
        <img src="/images/impact.png" alt="Agricultural Impact"></img>
        <h3>Agricultural Impact</h3>
        <p>Boost soil health, crop yield, and water retention with our proven. </p>
      </div>
      <div className="feature">
        <img src="/images/commintment.png" alt="Environmental Commitment"></img>
        <h3>Environmental Commitment</h3>
        <p>We actively reduce carbon emissions and support climate.</p>
      </div>
    </div>
  </section>

  )
}

export default WhyChoose
