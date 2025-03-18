import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section about">
            <h3>About Us</h3>
            <p>
              Our firm specializes in representing victims of California wildfires. 
              We are dedicated to helping individuals and families recover the compensation they deserve.
            </p>
          </div>
          
          <div className="footer-section contact">
            <h3>Contact Us</h3>
            <p>Please use our eligibility form to get in touch with our team regarding wildfire claims.</p>
            <p><Link to="/#eligibility-form" className="contact-cta">Check Your Eligibility Now →</Link></p>
          </div>
          
          <div className="footer-section links">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/resources">Resources</Link></li>
              <li><Link to="/wildfire-info">2025 Wildfires</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-legal">
          <div className="legal-disclaimers">
            <p>
              <strong>Attorney Advertising</strong> – Prior outcomes do not guarantee future results. 
              Submitting this form does not establish an attorney-client relationship.
            </p>
            <p>
              All information submitted is confidential and protected under California Privacy Laws (CCPA compliant).
            </p>
          </div>
          
          <div className="footer-bottom">
            <div className="footer-links">
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/terms">Terms of Service</Link>
              <Link to="/disclaimer">Disclaimer</Link>
            </div>
            <p className="copyright">
              &copy; {new Date().getFullYear()} California Wildfire Claims Lawyers. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 