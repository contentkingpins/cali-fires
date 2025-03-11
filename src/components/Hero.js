import React, { useEffect, useRef } from 'react';
import '../styles/Hero.css';

const Hero = ({ scrollToEligibility }) => {
  const heroRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      },
      { threshold: 0.1 }
    );
    
    const currentHeroRef = heroRef.current;
    
    if (currentHeroRef) {
      observer.observe(currentHeroRef);
    }
    
    return () => {
      if (currentHeroRef) {
        observer.unobserve(currentHeroRef);
      }
    };
  }, []);
  
  return (
    <section className="hero-section" ref={heroRef}>
      <div className="hero-overlay"></div>
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">Affected by the 2025 California Wildfires?</h1>
          <h2 className="hero-subtitle">We're Here to Help.</h2>
          <p className="hero-description">
            Our compassionate team of legal experts is dedicated to helping victims of the Palisades, Eaton, Hurst, Lidia, Sunset, and Kenneth wildfires get the compensation they deserve.
          </p>
          <button 
            className="btn btn-primary hero-cta"
            onClick={scrollToEligibility}
          >
            Check Eligibility Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero; 