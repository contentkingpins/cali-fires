import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { EligibilityContext } from '../context/EligibilityContext';
import '../styles/ResultsDisplay.css';

const ResultsDisplay = () => {
  const { eligibilityResult } = useContext(EligibilityContext);
  
  if (!eligibilityResult) {
    return null;
  }
  
  const { isEligible, formData } = eligibilityResult;
  
  return (
    <section className="results-section" id="results">
      <div className="container">
        {isEligible ? (
          <motion.div 
            className="results-container qualified"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="results-icon">
              <i className="fas fa-check-circle"></i>
            </div>
            <h2 className="results-title">You May Qualify for Compensation</h2>
            <p className="results-description">
              Based on your responses, you may be eligible to pursue a claim for the {formData.wildfire} Fire. 
              Our team of experienced wildfire attorneys is ready to help you get the compensation you deserve.
            </p>
            <div className="results-cta">
              <a href="tel:8005551234" className="btn btn-primary btn-lg">
                <i className="fas fa-phone-alt"></i> Call a Claim Specialist Now
              </a>
              <p className="results-disclaimer">
                Free consultation. No obligation. Available 24/7.
              </p>
            </div>
            <div className="results-next-steps">
              <h3>What Happens Next?</h3>
              <ol>
                <li>Speak with a claim specialist who will review your case details</li>
                <li>Get matched with an experienced wildfire attorney</li>
                <li>Receive a personalized case evaluation at no cost</li>
                <li>If you choose to proceed, we'll handle your case with no upfront fees</li>
              </ol>
            </div>
          </motion.div>
        ) : (
          <motion.div 
            className="results-container not-qualified"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="results-icon">
              <i className="fas fa-info-circle"></i>
            </div>
            <h2 className="results-title">We Need More Information</h2>
            <p className="results-description">
              Based on your responses, we need additional information to determine if we can assist with your claim. 
              Every situation is unique, and our team would like to learn more about your specific circumstances.
            </p>
            <div className="results-cta">
              <a href="tel:8005551234" className="btn btn-secondary btn-lg">
                <i className="fas fa-phone-alt"></i> Speak with a Specialist
              </a>
              <p className="results-disclaimer">
                We may still be able to help. Call for a free consultation.
              </p>
            </div>
            <div className="results-resources">
              <h3>Additional Resources</h3>
              <ul>
                <li><a href="#">California Wildfire Recovery Resources</a></li>
                <li><a href="#">FEMA Disaster Assistance</a></li>
                <li><a href="#">California Department of Insurance</a></li>
                <li><a href="#">Legal Aid Foundation of Los Angeles</a></li>
              </ul>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ResultsDisplay; 