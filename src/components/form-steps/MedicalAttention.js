import React from 'react';

const MedicalAttention = ({ formData, handleInputChange, nextStep, prevStep }) => {
  const handleContinue = () => {
    if (formData.soughtMedicalAttention !== null && 
        (formData.soughtMedicalAttention === false || formData.medicalTimeframe !== null)) {
      nextStep();
    } else {
      alert('Please answer all questions');
    }
  };
  
  return (
    <div>
      <h3 className="form-question">Did you seek medical attention for your injuries?</h3>
      <p className="form-description">This information helps us understand the severity of your injuries.</p>
      
      <div className="radio-group">
        <div className="radio-item">
          <input 
            type="radio" 
            id="medical-yes" 
            name="medical" 
            checked={formData.soughtMedicalAttention === true} 
            onChange={() => handleInputChange('soughtMedicalAttention', true)} 
          />
          <label htmlFor="medical-yes">Yes, I sought medical attention</label>
        </div>
        
        <div className="radio-item">
          <input 
            type="radio" 
            id="medical-no" 
            name="medical" 
            checked={formData.soughtMedicalAttention === false} 
            onChange={() => handleInputChange('soughtMedicalAttention', false)} 
          />
          <label htmlFor="medical-no">No, I did not seek medical attention</label>
        </div>
      </div>
      
      {formData.soughtMedicalAttention === true && (
        <div className="form-group">
          <h3 className="form-question">When did you seek medical attention?</h3>
          <div className="radio-group">
            <div className="radio-item">
              <input 
                type="radio" 
                id="timeframe-within10days" 
                name="timeframe" 
                checked={formData.medicalTimeframe === 'within10days'} 
                onChange={() => handleInputChange('medicalTimeframe', 'within10days')} 
              />
              <label htmlFor="timeframe-within10days">Within 10 days of the incident</label>
            </div>
            
            <div className="radio-item">
              <input 
                type="radio" 
                id="timeframe-within30days" 
                name="timeframe" 
                checked={formData.medicalTimeframe === 'within30days'} 
                onChange={() => handleInputChange('medicalTimeframe', 'within30days')} 
              />
              <label htmlFor="timeframe-within30days">Within 30 days of the incident</label>
            </div>
            
            <div className="radio-item">
              <input 
                type="radio" 
                id="timeframe-after30days" 
                name="timeframe" 
                checked={formData.medicalTimeframe === 'after30days'} 
                onChange={() => handleInputChange('medicalTimeframe', 'after30days')} 
              />
              <label htmlFor="timeframe-after30days">More than 30 days after the incident</label>
            </div>
          </div>
        </div>
      )}
      
      <div className="form-buttons">
        <button className="btn btn-prev" onClick={prevStep}>Back</button>
        <button className="btn btn-primary" onClick={handleContinue}>Continue</button>
      </div>
    </div>
  );
};

export default MedicalAttention; 