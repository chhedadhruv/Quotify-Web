import React from 'react';
import { HiStar, HiHeart } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="footer-logo">
              <span className="logo-icon"><HiStar /></span>
              Quotify
            </h3>
            <p className="footer-description">
              Your daily companion for inspiration and motivation. 
              Discover beautiful quotes that uplift your spirit and brighten your day.
            </p>
          </div>
          
          <div className="footer-links">
            <div className="link-group">
              <h4>Product</h4>
              <ul>
                <li><a href="#features">Features</a></li>
                <li><a href="#quote-generator">Quote Generator</a></li>
                <li><a href="#download">Download</a></li>
                <li><a href="#">Widgets</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} Quotify. All rights reserved.</p>
            <div className="footer-legal">
              <Link to="/privacy-policy" className="footer-link">Privacy Policy</Link>
              <span className="footer-separator">•</span>
              <span>Made with <HiHeart style={{ color: '#e74c3c', display: 'inline' }} /> for daily inspiration</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 