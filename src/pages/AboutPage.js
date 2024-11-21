// src/components/pages/AboutSection.js

import React from "react";
import "./AboutSection.css"; // Import the CSS file for styling

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        {/* Left Side - Image */}
        <div className="about-image">
          <img
            src="/assets/images/about-us.png" // Replace with your image path
            alt="About Us"
          />
        </div>

        {/* Right Side - Content */}
        <div className="about-content">
          <h2>About Us</h2>
          <p>
            Welcome to <strong>Simple Product</strong>, your one-stop platform for all your shopping
            needs. We are committed to delivering the best quality products at
            competitive prices.
          </p>
          <p>
            Our mission is to provide a seamless online shopping experience by
            combining innovation, technology, and customer satisfaction.
          </p>
          <ul>
            <li>💡 Wide variety of products from trusted sellers</li>
            <li>🚚 Fast and reliable delivery</li>
            <li>💳 Secure payment options</li>
            <li>⭐ 24/7 customer support</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
