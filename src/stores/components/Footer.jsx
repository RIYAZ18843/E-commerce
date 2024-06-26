// src/components/Footer.js

import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section about">
            <h2>About Us</h2>
            <p>
              We are a leading e-commerce store providing the best products for
              our customers. Our mission is to offer high-quality items at
              affordable prices.
            </p>
          </div>
          <div className="footer-section links">
            <h2>Quick Links</h2>
            <ul>
              <li><a href="/">Linkdin</a></li>
              <li><a href="/">Github</a></li>
              
            </ul>
          </div>
          <div className="footer-section contact">
            <h2>Contact Us</h2>
            <p>
              <strong>Email:</strong> Riyaz@ecommerce.com
            </p>
            <p>
              <strong>Phone:</strong> +9948135827
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          &copy; {new Date().getFullYear()} E-commerce Store | Designed by Mohammad Riyaz Qureshi
        </div>
      </div>
    </footer>
  );
};

export default Footer;
