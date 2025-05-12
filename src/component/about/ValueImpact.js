import React from 'react'
import './about.css';

const ValueImpact = () => {
  return (
    <section className="values-impact">
    <h3>Our Values & Impact</h3>
    <div className="cards">
      <div className="card">
        <h4>Our Values</h4>
        <p>At the heart of our mission are sustainability, innovation, and community impact. We are committed to creating eco-friendly solutions that benefit both people and the planet.</p>
        <ul className='card-list'>
          <li><img src="\images\Group.png" alt='check' className='check-icon'/>Committed to Environment Through Products</li>
          <li><img src="\images\Group.png" alt='check' className='check-icon'/>Innovating for Efficiency and Impact</li>
          <li><img src="\images\Group.png" alt='check' className='check-icon'/>Collaborating for Tailored Sustainable Solutions</li>
        </ul>
      </div>
      <div className="card">
        <h4>Our Impact</h4>
        <p>With every ton of biocoal and biochar we produce, we’re not just offering a product—we’re providing a path to a better future.</p>
        <ul className='card-list' >
          <li><img src="\images\Group.png" alt='check' className='check-icon'/>Reduce greenhouse gas emissions</li>
          <li><img src="\images\Group.png" alt='check' className='check-icon'/>Prevent deforestation and fossil fuel usage</li>
          <li><img src="\images\Group.png" alt='check' className='check-icon'/>Improve agricultural productivity</li>
        </ul>
      </div>
    </div>
  </section>
  )
}

export default ValueImpact
