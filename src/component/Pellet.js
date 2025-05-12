import React from 'react'
import './style.css';
import energyImag from './images/energy.jpg';

const Pellet = () => {
  return (
    <section className="pellet-siecton">
        <h2>
          Clean energy from  <span className="highlight">agricultural waste.</span> 
        </h2>
        <div className="biochar-card">
          <img src={energyImag} alt="Biochar" className="biochar-img" />
          <div className="biochar-text">
            <h3>SAWDUST PELLETS</h3>
            <p>
            Sawdust pellets are a renewable, eco-friendly biomass fuel made
              from compressed sawdust. They offer high energy output with low
              moisture content, making them efficient for heating and power
              generation. Easy to store and transport, these pellets are a
              sustainable alternative to fossil fuel, supporting cleaner energy
              and waste reduction.
            </p>
          </div>
        </div>
      </section>
  )
}

export default Pellet
