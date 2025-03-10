import React, { useRef } from 'react';
import Hero from '../components/Hero';
import EligibilityForm from '../components/EligibilityForm';
import ResultsDisplay from '../components/ResultsDisplay';
import TrustSection from '../components/TrustSection';
import Footer from '../components/Footer';
import '../styles/LandingPage.css';

const LandingPage = () => {
  const eligibilityFormRef = useRef(null);
  const resultsRef = useRef(null);
  
  const scrollToEligibility = () => {
    eligibilityFormRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  
  const scrollToResults = () => {
    resultsRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <div className="landing-page">
      <Hero scrollToEligibility={scrollToEligibility} />
      <div ref={eligibilityFormRef}>
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