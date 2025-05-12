// import React from 'react'
// import "./style.css"

// const Footer = () => {
//   return (

//     <footer className="custom-footer">
//     <div className="footer-content">
//       <div className="footer-left">
//         <div className='footer-logo'>
//           <img src="images/logo1.png" />
//         </div>
//       </div>

//       <div className="footer-links">
//         <h4>Quick Links</h4>
//         <ul>
//           <li>Home</li>
//           <li>About</li>
//           <li>Products</li>
//         </ul>
//       </div>

//       <div className="footer-links">
//         <h4>Resources</h4>
//         <ul>
//           <li>Blog</li>
//           <li>Contact</li>
//           <li>Privacy Policy</li>
//           <li>Terms of Services</li>
//         </ul>
//       </div>

//       <div className="footer-subscribe">
//         <p>
//           Subscribe to our newsletter for updates on <br />
//           new products and industry insights.
//         </p>
//         <div className="subscribe-box">
//           <input type="email" placeholder="Your Email" />
//           <button>Subscribe</button>
//         </div>
//       </div>
//     </div>

//     <div className="footer-bottom">
//       <p>
//         © 2025 <span className="green">Compony Name</span>. All rights reserved.
//       </p>
//     </div>
//   </footer>

   

//   )
// }

// export default Footer
import React, { useEffect, useState } from 'react';
import "./style.css";

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.scrollY > 300) {
        setShowScroll(true);
      } else if (showScroll && window.scrollY <= 300) {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, [showScroll]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer className="custom-footer">
        <div className="footer-content">
          <div className="footer-left">
            <div className='footer-logo'>
              <img src="images/logo1.png" alt="Logo" />
            </div>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Products</li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Resources</h4>
            <ul>
              <li>Blog</li>
              <li>Contact</li>
              <li>Privacy Policy</li>
              <li>Terms of Services</li>
            </ul>
          </div>

          <div className="footer-subscribe">
            <p>
              Subscribe to our newsletter for updates on <br />
              new products and industry insights.
            </p>
            <div className="subscribe-box">
              <input type="email" placeholder="Your Email" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © 2025 <span className="green">Compony Name</span>. All rights reserved.
          </p>
        </div>
      </footer>

      {showScroll && (
        <button className="scroll-top" onClick={scrollToTop}>
          ↑
        </button>
      )}
    </>
  );
};

export default Footer;
