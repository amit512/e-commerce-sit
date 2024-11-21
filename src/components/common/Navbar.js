import React, { useState } from 'react';
import { FaBars, FaTimes, FaSearch,FaUser,  FaShoppingCart } from 'react-icons/fa';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  

  return (
    <nav className="navbar">
      <div className="navbar-logo">
      <Link to="/"><h2>Simple Product</h2></Link>
      </div>

      {/* Desktop Menu */}
      <ul className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      {/* Search and Icons */}
      <div className="navbar-icons">
        <div className="search-bar">
          <input type="text" placeholder="Search products..." />
          <button><FaSearch /></button>
        </div>
        
        <FaUser className="icon" title="Profile"/>
        <Link to="/cart" className="icon" >
        <FaShoppingCart className="icon shopping-cart" title="Cart"/>
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="mobile-menu-icon" onClick={handleMobileMenuToggle}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;

