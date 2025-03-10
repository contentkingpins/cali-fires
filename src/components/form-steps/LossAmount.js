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
      <h3 className="form-question">What is the estimated total value of your losses?</h3>
      <p className="form-description">Please provide your best estimate of the total damages.</p>
      
      <div className="radio-group">
        <div className="radio-item">
          <input 
            type="radio" 
            id="loss-under10k" 
            name="lossAmount" 
            checked={formData.lossAmount === 'under10k'} 
            onChange={() => handleInputChange('lossAmount', 'under10k')} 
          />
          <label htmlFor="loss-under10k">Less than $10,000</label>
        </div>
        
        <div className="radio-item">
          <input 
            type="radio" 
            id="loss-10kto25k" 
            name="lossAmount" 
            checked={formData.lossAmount === '10kto25k'} 
            onChange={() => handleInputChange('lossAmount', '10kto25k')} 
          />
          <label htmlFor="loss-10kto25k">$10,000 - $25,000</label>
        </div>
        
        <div className="radio-item">
          <input 
            type="radio" 
            id="loss-25kto50k" 
            name="lossAmount" 
            checked={formData.lossAmount === '25kto50k'} 
            onChange={() => handleInputChange('lossAmount', '25kto50k')} 
          />
          <label htmlFor="loss-25kto50k">$25,000 - $50,000</label>
        </div>
        
        <div className="radio-item">
          <input 
            type="radio" 
            id="loss-over50k" 
            name="lossAmount" 
            checked={formData.lossAmount === 'over50k'} 
            onChange={() => handleInputChange('lossAmount', 'over50k')} 
          />
          <label htmlFor="loss-over50k">More than $50,000</label>
        </div>
        
        <div className="radio-item">
          <input 
            type="radio" 
            id="loss-unsure" 
            name="lossAmount" 
            checked={formData.lossAmount === 'unsure'} 
            onChange={() => handleInputChange('lossAmount', 'unsure')} 
          />
          <label htmlFor="loss-unsure">I'm not sure</label>
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