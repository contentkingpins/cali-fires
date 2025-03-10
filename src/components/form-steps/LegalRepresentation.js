import React from 'react';

const LegalRepresentation = ({ formData, handleInputChange, nextStep, prevStep }) => {
  const handleContinue = () => {
    if (formData.hasLegalRepresentation !== null) {
      nextStep();
    } else {
      alert('Please select an option');
    }
  };
  
  return (
    <div>
      <h3 className="form-question">Are you currently represented by another attorney for this claim?</h3>
      <p className="form-description">We need to know if you already have legal representation.</p>
      
      <div className="radio-group">
        <div className="radio-item">
          <input 
            type="radio" 
            id="legal-yes" 
            name="legalRepresentation" 
            checked={formData.hasLegalRepresentation === true} 
            onChange={() => handleInputChange('hasLegalRepresentation', true)} 
          />
          <label htmlFor="legal-yes">Yes, I am currently represented by another attorney</label>
        </div>
        
        <div className="radio-item">
          <input 
            type="radio" 
            id="legal-no" 
            name="legalRepresentation" 
            checked={formData.hasLegalRepresentation === false} 
            onChange={() => handleInputChange('hasLegalRepresentation', false)} 
          />
          <label htmlFor="legal-no">No, I do not have legal representation</label>
        </div>
      </div>
      
      <div className="form-buttons">
        <button className="btn btn-prev" onClick={prevStep}>Back</button>
        <button className="btn btn-primary" onClick={handleContinue}>Continue</button>
      </div>
    </div>
  );
};

export default LegalRepresentation; 