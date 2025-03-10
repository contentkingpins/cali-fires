import React from 'react';

const LossType = ({ formData, handleInputChange, nextStep, prevStep }) => {
  const handleCheckboxChange = (value) => {
    const currentLossTypes = [...formData.lossTypes];
    
    if (currentLossTypes.includes(value)) {
      // Remove the value if it's already selected
      const updatedLossTypes = currentLossTypes.filter(type => type !== value);
      handleInputChange('lossTypes', updatedLossTypes);
    } else {
      // Add the value if it's not selected
      handleInputChange('lossTypes', [...currentLossTypes, value]);
    }
  };
  
  const handleContinue = () => {
    if (formData.lossTypes.length > 0) {
      nextStep();
    } else {
      alert('Please select at least one type of loss');
    }
  };
  
  return (
    <div>
      <h3 className="form-question">What type of loss or damage did you experience?</h3>
      <p className="form-description">Select all that apply to your situation.</p>
      
      <div className="checkbox-group">
        <div className="checkbox-item">
          <input 
            type="checkbox" 
            id="property" 
            checked={formData.lossTypes.includes('property')} 
            onChange={() => handleCheckboxChange('property')} 
          />
          <label htmlFor="property">Property damage or destruction</label>
        </div>
        
        <div className="checkbox-item">
          <input 
            type="checkbox" 
            id="injury" 
            checked={formData.lossTypes.includes('injury')} 
            onChange={() => handleCheckboxChange('injury')} 
          />
          <label htmlFor="injury">Personal injury</label>
        </div>
        
        <div className="checkbox-item">
          <input 
            type="checkbox" 
            id="business" 
            checked={formData.lossTypes.includes('business')} 
            onChange={() => handleCheckboxChange('business')} 
          />
          <label htmlFor="business">Business interruption</label>
        </div>
        
        <div className="checkbox-item">
          <input 
            type="checkbox" 
            id="income" 
            checked={formData.lossTypes.includes('income')} 
            onChange={() => handleCheckboxChange('income')} 
          />
          <label htmlFor="income">Lost income</label>
        </div>
        
        <div className="checkbox-item">
          <input 
            type="checkbox" 
            id="evacuation" 
            checked={formData.lossTypes.includes('evacuation')} 
            onChange={() => handleCheckboxChange('evacuation')} 
          />
          <label htmlFor="evacuation">Evacuation expenses</label>
        </div>
        
        <div className="checkbox-item">
          <input 
            type="checkbox" 
            id="emotional" 
            checked={formData.lossTypes.includes('emotional')} 
            onChange={() => handleCheckboxChange('emotional')} 
          />
          <label htmlFor="emotional">Emotional distress</label>
        </div>
        
        <div className="checkbox-item">
          <input 
            type="checkbox" 
            id="other" 
            checked={formData.lossTypes.includes('other')} 
            onChange={() => handleCheckboxChange('other')} 
          />
          <label htmlFor="other">Other losses</label>
        </div>
      </div>
      
      <div className="form-buttons">
        <button className="btn btn-prev" onClick={prevStep}>Back</button>
        <button className="btn btn-primary" onClick={handleContinue}>Continue</button>
      </div>
    </div>
  );
};

export default LossType; 