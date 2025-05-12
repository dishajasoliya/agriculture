// import React from 'react';
// import './style.css';

// const Header = () => (
//   <nav className="header">
//     <div   className="logo">
//     <img src="/images/logo1.png" alt="Logo" class="logo" />
//     </div>   
    
//       <ul>
//         <li><a href="Home">Home</a></li>
//         <li><a href="About">About</a></li>
//         <li><a href="Product">Product</a></li>
//         <li><a href="ContactUs">Contact</a></li>
//       </ul>
    
//   </nav>
// );

// export default Header;

"use client"

import { useState } from "react"
import "./style.css"

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="header">
    <a href="/Home">
        <img src="/images/logo1.png" alt="Logo" className="logo" />
      </a>

      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        <div className={`hamburger ${menuOpen ? "active" : ""}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        </div> 

      <ul className={menuOpen ? "active" : ""}>
        <li>
          <a href="Home">Home</a>
        </li>
        <li>
          <a href="About">About</a>
        </li>
        <li>
          <a href="Product">Product</a>
        </li>
        <li>
          <a href="ContactUs">Contact</a>
        </li>
      </ul>
    </nav>
  )
}

export default Header
