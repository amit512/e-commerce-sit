import React from "react";
import styles from "../../styles/landing/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Company Info */}
        <div className={styles.column}>
          <h3>About Us</h3>
          <p>
            We are an innovative eCommerce platform committed to delivering the
            best online shopping experience. Shop with confidence!
          </p>
        </div>

        {/* Useful Links */}
        <div className={styles.column}>
          <h3>Useful Links</h3>
          <ul>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms of Service</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className={styles.column}>
          <h3>Contact Us</h3>
          <ul>
            <li>Email: rautamit930@gmail.com</li>
            <li>Phone: +977 9812402806</li>
            <li>Address: Nepalgunj-12,Banka,Nepal
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div className={styles.column}>
          <h3>Follow Us</h3>
          <div className={styles.socialIcons}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="/assets/icons/facebook-brands-solid.svg" alt="Facebook" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src="/assets/icons/twitter-brands-solid.svg" alt="Twitter" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="/assets/icons/instagram-brands-solid.svg" alt="Instagram" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src="/assets/icons/linkedin-in-brands-solid.svg" alt="LinkedIn" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className={styles.copyright}>
        <p>&copy; {new Date().getFullYear()} eCommerce Platform. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
