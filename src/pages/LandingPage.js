import React, { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import EligibilityForm from '../components/EligibilityForm';
import ResultsDisplay from '../components/ResultsDisplay';
import TrustSection from '../components/TrustSection';
import Footer from '../components/Footer';
import '../styles/LandingPage.css';

const LandingPage = () => {
  const location = useLocation();
  const eligibilityFormRef = useRef(null);
  const resultsRef = useRef(null);
  
  const scrollToEligibility = () => {
    eligibilityFormRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  
  const scrollToResults = () => {
    resultsRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  // Handle navigation state when coming from another page
  useEffect(() => {
    if (location.state && location.state.scrollToEligibility) {
      setTimeout(() => {
        scrollToEligibility();
      }, 100); // Small delay to ensure the component is fully rendered
    }
  }, [location.state]);
  
  return (
    <div className="landing-page">
      <Hero scrollToEligibility={scrollToEligibility} />
      <div ref={eligibilityFormRef} data-id="eligibility-form">
        <EligibilityForm scrollToResults={scrollToResults} />
      </div>
      <div ref={resultsRef}>
        <ResultsDisplay />
      </div>
      <TrustSection />
      <Footer />
    </div>
  );
};

export default LandingPage; 