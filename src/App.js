// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import Navbar from './components/common/Navbar';
import ProductListingPage from './pages/ProductPage';



const App = () => {
  return (
    <Router>
     <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/products" element={<ProductListingPage/>} />
      </Routes>
    </Router>
  );
};

export default App;
