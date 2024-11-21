// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import Navbar from './components/common/Navbar';
import ProductListingPage from './pages/ProductPage';
import ProductPage from './pages/Productpages';
import AboutSection from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Footer from './components/common/Footer';
import Cart from './components/buyer/Cart';




const App = () => {
  return (
    <Router>
     <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/about" element={<AboutSection/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
        
        <Route path="/products" element={<ProductListingPage/>} />
        <Route path="/product/:id" element={<ProductPage/>} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
