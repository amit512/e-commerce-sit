// src/components/pages/ContactPage.js

import React, { useState } from "react";
import "./ContactPage.css"; // Import the CSS file for styling

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here (e.g., API call)
    alert("Thank you for contacting us! We will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="contact-page">
      <div className="contact-container">
        {/* Left Section - Contact Form */}
        <div className="contact-form">
          <h2>Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message"
                required
              />
            </div>
            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
        </div>

        {/* Right Section - Contact Information */}
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>
            Have any questions or feedback? We'd love to hear from you. You can
            reach us at:
          </p>
          <ul>
            <li>📍 Address: Nepalgunj-12,Banka,Nepal</li>
            <li>📧 Email: rautamit930@gamil.com</li>
            <li>📞 Phone: +977 9766925212</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
