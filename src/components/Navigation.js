import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navigation.css';

const Navigation = () => {
  const location = useLocation();
  
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
              <Link to="/#eligibility-form" className="btn btn-primary">Check Eligibility</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 