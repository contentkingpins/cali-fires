import React from 'react';

const LossAmount = ({ formData, handleInputChange, nextStep, prevStep }) => {
  const handleContinue = () => {
    if (formData.lossAmount !== null) {
      nextStep();
    } else {
      alert('Please select an option');
    }
  };
  
  return (
    <div>
      <h3 className="form-question">What would you estimate the total cost of damages that the fire caused, including damage to your home, vehicles, and valuables?</h3>
      <p className="form-description">Please provide your best estimate of the total damages.</p>
      
      <div className="radio-group">
        <div className="radio-item">
          <input 
            type="radio" 
            id="loss-50kto199k" 
            name="lossAmount" 
            checked={formData.lossAmount === '50kto199k'} 
            onChange={() => handleInputChange('lossAmount', '50kto199k')} 
          />
          <label htmlFor="loss-50kto199k">$50k to $199k</label>
        </div>
        
        <div className="radio-item">
          <input 
            type="radio" 
            id="loss-200kto299k" 
            name="lossAmount" 
            checked={formData.lossAmount === '200kto299k'} 
            onChange={() => handleInputChange('lossAmount', '200kto299k')} 
          />
          <label htmlFor="loss-200kto299k">$200k to $299k</label>
        </div>
        
        <div className="radio-item">
          <input 
            type="radio" 
            id="loss-300kplus" 
            name="lossAmount" 
            checked={formData.lossAmount === '300kplus'} 
            onChange={() => handleInputChange('lossAmount', '300kplus')} 
          />
          <label htmlFor="loss-300kplus">$300k or more</label>
        </div>
      </div>
      
      <div className="form-buttons">
        <button className="btn btn-prev" onClick={prevStep}>Back</button>
        <button className="btn btn-primary" onClick={handleContinue}>Continue</button>
      </div>
    </div>
  );
};

export default LossAmount; 