import React, { useState, useEffect, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { EligibilityContext } from '../context/EligibilityContext';
import '../styles/EligibilityForm.css';

// Form steps components
import WildfireSelection from './form-steps/WildfireSelection';
import LossType from './form-steps/LossType';
import InsuranceVerification from './form-steps/InsuranceVerification';
import MedicalAttention from './form-steps/MedicalAttention';
import LossAmount from './form-steps/LossAmount';
import LegalRepresentation from './form-steps/LegalRepresentation';
import UtilityProvider from './form-steps/UtilityProvider';
import ContactInfo from './form-steps/ContactInfo';

const EligibilityForm = ({ scrollToResults }) => {
  const { setEligibilityResult } = useContext(EligibilityContext);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    wildfire: '',
    lossTypes: [],
    hasInsurance: null,
    soughtMedicalAttention: null,
    medicalTimeframe: null,
    lossAmount: null,
    hasLegalRepresentation: null,
    utilityProvider: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    zipCode: ''
  });
  
  const totalSteps = 8;
  
  const handleInputChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value
    });
  };
  
  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };
  
  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Determine eligibility based on form data
    const isEligible = determineEligibility(formData);
    
    // Set the eligibility result in context
    setEligibilityResult({
      isEligible,
      formData
    });
    
    // Scroll to results section
    scrollToResults();
  };
  
  const determineEligibility = (data) => {
    // Check if the user has selected a valid wildfire
    if (!data.wildfire) return false;
    
    // Check if the user has selected at least one loss type
    if (data.lossTypes.length === 0) return false;
    
    // For property claims, check insurance
    const hasPropertyClaim = data.lossTypes.includes('property');
    if (hasPropertyClaim && !data.hasInsurance) return false;
    
    // For injury claims, check medical attention
    const hasInjuryClaim = data.lossTypes.includes('injury');
    if (hasInjuryClaim && (!data.soughtMedicalAttention || data.medicalTimeframe !== 'within10days')) return false;
    
    // Check loss amount
    if (data.lossAmount !== 'over50k') return false;
    
    // Check legal representation
    if (data.hasLegalRepresentation) return false;
    
    // If all checks pass, the user is eligible
    return true;
  };
  
  // Conditional rendering based on current step
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <WildfireSelection 
            formData={formData} 
            handleInputChange={handleInputChange} 
            nextStep={nextStep} 
          />
        );
      case 2:
        return (
          <LossType 
            formData={formData} 
            handleInputChange={handleInputChange} 
            nextStep={nextStep} 
            prevStep={prevStep} 
          />
        );
      case 3:
        // Only show insurance verification if property loss is selected
        if (formData.lossTypes.includes('property')) {
          return (
            <InsuranceVerification 
              formData={formData} 
              handleInputChange={handleInputChange} 
              nextStep={nextStep} 
              prevStep={prevStep} 
            />
          );
        } else {
          // Skip to next step
          setCurrentStep(4);
          return null;
        }
      case 4:
        // Only show medical attention if injury is selected
        if (formData.lossTypes.includes('injury')) {
          return (
            <MedicalAttention 
              formData={formData} 
              handleInputChange={handleInputChange} 
              nextStep={nextStep} 
              prevStep={prevStep} 
            />
          );
        } else {
          // Skip to next step
          setCurrentStep(5);
          return null;
        }
      case 5:
        return (
          <LossAmount 
            formData={formData} 
            handleInputChange={handleInputChange} 
            nextStep={nextStep} 
            prevStep={prevStep} 
          />
        );
      case 6:
        return (
          <LegalRepresentation 
            formData={formData} 
            handleInputChange={handleInputChange} 
            nextStep={nextStep} 
            prevStep={prevStep} 
          />
        );
      case 7:
        return (
          <UtilityProvider 
            formData={formData} 
            handleInputChange={handleInputChange} 
            nextStep={nextStep} 
            prevStep={prevStep} 
          />
        );
      case 8:
        return (
          <ContactInfo 
            formData={formData} 
            handleInputChange={handleInputChange} 
            prevStep={prevStep} 
            handleSubmit={handleSubmit} 
          />
        );
      default:
        return null;
    }
  };
  
  return (
    <section className="eligibility-section" id="eligibility-form">
      <div className="container">
        <div className="eligibility-header">
          <h2>Check Your Eligibility</h2>
          <p>Answer a few questions to see if you qualify for legal representation</p>
        </div>
        
        <div className="progress-bar-container">
          <div 
            className="progress-bar" 
            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
          ></div>
        </div>
        
        <div className="form-container">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="form-step"
            >
              {renderStep()}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default EligibilityForm; 