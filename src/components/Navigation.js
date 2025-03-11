import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../styles/Navigation.css';

const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const handleEligibilityClick = (e) => {
    e.preventDefault();
    
    // If we're already on the home page, just scroll to the eligibility form
    if (location.pathname === '/') {
      const eligibilityElement = document.querySelector('[data-id="eligibility-form"]');
      if (eligibilityElement) {
        eligibilityElement.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If we're on another page, navigate to home page and then scroll
      navigate('/', { state: { scrollToEligibility: true } });
    }
  };
  
  return (
    <nav className="main-navigation">
      <div className="container">
        <div className="nav-container">
          <div className="logo">
            <Link to="/">California Wildfire Claims</Link>
          </div>
          <ul className="nav-links">
            <li className={location.pathname === '/' ? 'active' : ''}>
              <Link to="/">Home</Link>
            </li>
            <li className={location.pathname === '/about' ? 'active' : ''}>
              <Link to="/about">About Us</Link>
            </li>
            <li className={location.pathname === '/services' ? 'active' : ''}>
              <Link to="/services">Services</Link>
            </li>
            <li className={location.pathname === '/resources' ? 'active' : ''}>
              <Link to="/resources">Resources</Link>
            </li>
            <li className="cta-button">
              <a href="#eligibility-form" className="btn btn-primary" onClick={handleEligibilityClick}>Check Eligibility</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 