
// import React from 'react';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Header from './component/Header';
import Home from "./pages/Home";
import About from './pages/About';
import Product from './pages/Product';
import ContactUs from './pages/ContactUs';
import Footer from './component/Footer';
// import "./App.css"


function App() {
  return (
   <Router>
    <div className="App">
  
      <Header/>
 
    
      <Routes>
      <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />}/>
          <Route path="/About" element={<About />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/ContactUs" element={<ContactUs />} /> 
        </Routes>
    
      <Footer/>
    
      
    </div>

   </Router>

  );
}

export default App;