import React from 'react';

const UtilityProvider = ({ formData, handleInputChange, nextStep, prevStep }) => {
  const handleContinue = () => {
    // This step is optional, so we can proceed regardless of selection
    nextStep();
  };
  
  return (
    <div>
      <h3 className="form-question">Who is your utility provider?</h3>
      <p className="form-description">This information may be relevant to your claim. (Optional)</p>
      
      <div className="radio-group">
        <div className="radio-item">
          <input 
            type="radio" 
            id="utility-pge" 
            name="utilityProvider" 
            checked={formData.utilityProvider === 'pge'} 
            onChange={() => handleInputChange('utilityProvider', 'pge')} 
          />
          <label htmlFor="utility-pge">Pacific Gas & Electric (PG&E)</label>
        </div>
        
        <div className="radio-item">
          <input 
            type="radio" 
            id="utility-sce" 
            name="utilityProvider" 
            checked={formData.utilityProvider === 'sce'} 
            onChange={() => handleInputChange('utilityProvider', 'sce')} 
          />
          <label htmlFor="utility-sce">Southern California Edison (SCE)</label>
        </div>
        
        <div className="radio-item">
          <input 
            type="radio" 
            id="utility-sdge" 
            name="utilityProvider" 
            checked={formData.utilityProvider === 'sdge'} 
            onChange={() => handleInputChange('utilityProvider', 'sdge')} 
          />
          <label htmlFor="utility-sdge">San Diego Gas & Electric (SDG&E)</label>
        </div>
        
        <div className="radio-item">
          <input 
            type="radio" 
            id="utility-ladwp" 
            name="utilityProvider" 
            checked={formData.utilityProvider === 'ladwp'} 
            onChange={() => handleInputChange('utilityProvider', 'ladwp')} 
          />
          <label htmlFor="utility-ladwp">Los Angeles Department of Water and Power (LADWP)</label>
        </div>
        
        <div className="radio-item">
          <input 
            type="radio" 
            id="utility-other" 
            name="utilityProvider" 
            checked={formData.utilityProvider === 'other'} 
            onChange={() => handleInputChange('utilityProvider', 'other')} 
          />
          <label htmlFor="utility-other">Other utility provider</label>
        </div>
        
        <div className="radio-item">
          <input 
            type="radio" 
            id="utility-unknown" 
            name="utilityProvider" 
            checked={formData.utilityProvider === 'unknown'} 
            onChange={() => handleInputChange('utilityProvider', 'unknown')} 
          />
          <label htmlFor="utility-unknown">I don't know</label>
        </div>
      </div>
      
      <div className="form-buttons">
        <button className="btn btn-prev" onClick={prevStep}>Back</button>
        <button className="btn btn-primary" onClick={handleContinue}>Continue</button>
      </div>
    </div>
  );
};

export default UtilityProvider; 