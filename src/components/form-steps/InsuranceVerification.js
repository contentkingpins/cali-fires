import React from 'react';

const InsuranceVerification = ({ formData, handleInputChange, nextStep, prevStep }) => {
  const handleContinue = () => {
    if (formData.hasInsurance !== null) {
      nextStep();
    } else {
      alert('Please select an option');
    }
  };
  
  return (
    <div>
      <h3 className="form-question">Did you have active insurance at the time of the fire?</h3>
      <p className="form-description">This information helps us understand your coverage situation.</p>
      
      <div className="radio-group">
        <div className="radio-item">
          <input 
            type="radio" 
            id="insurance-yes" 
            name="insurance" 
            checked={formData.hasInsurance === true} 
            onChange={() => handleInputChange('hasInsurance', true)} 
          />
          <label htmlFor="insurance-yes">Yes, I had active insurance</label>
        </div>
        
        <div className="radio-item">
          <input 
            type="radio" 
            id="insurance-no" 
            name="insurance" 
            checked={formData.hasInsurance === false} 
            onChange={() => handleInputChange('hasInsurance', false)} 
          />
          <label htmlFor="insurance-no">No, I did not have insurance</label>
        </div>
        
        <div className="radio-item">
          <input 
            type="radio" 
            id="insurance-unsure" 
            name="insurance" 
            checked={formData.hasInsurance === 'unsure'} 
            onChange={() => handleInputChange('hasInsurance', 'unsure')} 
          />
          <label htmlFor="insurance-unsure">I'm not sure</label>
        </div>
      </div>
      
      <div className="form-buttons">
        <button className="btn btn-prev" onClick={prevStep}>Back</button>
        <button className="btn btn-primary" onClick={handleContinue}>Continue</button>
      </div>
    </div>
  );
};

export default InsuranceVerification; 