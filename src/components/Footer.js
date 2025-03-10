import React from 'react';
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
            <p><i className="fas fa-phone"></i> (800) 555-1234</p>
            <p><i className="fas fa-envelope"></i> info@wildfireclaimslawyers.com</p>
            <p><i className="fas fa-map-marker-alt"></i> 123 Legal Street, Los Angeles, CA 90001</p>
          </div>
          
          <div className="footer-section links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Resources</a></li>
              <li><a href="#">Contact</a></li>
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
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Disclaimer</a>
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