import React, { useState } from "react";
import './contact.css';

const Map = () => {
  const [showIndia, setShowIndia] = useState(false);

  return (
    <section className="Section bg-primary cta-section">
      <div className="container text-center">
       
        <div
          className="map-controls"
          onMouseEnter={() => setShowIndia(true)}
          onMouseLeave={() => setShowIndia(false)}
        >
          <img
            src="/images/mapicon.png"
            className="btn-map"
            alt="Map Icon"
          />
          {showIndia && (
            <button className="india-btn">India</button>
          )}
        </div>
      </div>
      
    </section>
  );
};

export default Map;
