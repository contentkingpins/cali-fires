import React from 'react';

const WildfireSelection = ({ formData, handleInputChange, nextStep }) => {
  const handleContinue = () => {
    if (formData.wildfire) {
      nextStep();
    } else {
      alert('Please select a wildfire event');
    }
  };
  
  return (
    <div>
      <h3 className="form-question">Which 2023 California wildfire were you affected by?</h3>
      <p className="form-description">Select the wildfire that impacted you or your property.</p>
      
      <div className="radio-group">
        <div className="radio-item">
          <input 
            type="radio" 
            id="palisades" 
            name="wildfire" 
            value="palisades" 
            checked={formData.wildfire === 'palisades'} 
            onChange={() => handleInputChange('wildfire', 'palisades')} 
          />
          <label htmlFor="palisades">Palisades Fire</label>
        </div>
        
        <div className="radio-item">
          <input 
            type="radio" 
            id="eaton" 
            name="wildfire" 
            value="eaton" 
            checked={formData.wildfire === 'eaton'} 
            onChange={() => handleInputChange('wildfire', 'eaton')} 
          />
          <label htmlFor="eaton">Eaton Fire</label>
        </div>
        
        <div className="radio-item">
          <input 
            type="radio" 
            id="hurst" 
            name="wildfire" 
            value="hurst" 
            checked={formData.wildfire === 'hurst'} 
            onChange={() => handleInputChange('wildfire', 'hurst')} 
          />
          <label htmlFor="hurst">Hurst Fire</label>
        </div>
        
        <div className="radio-item">
          <input 
            type="radio" 
            id="lidia" 
            name="wildfire" 
            value="lidia" 
            checked={formData.wildfire === 'lidia'} 
            onChange={() => handleInputChange('wildfire', 'lidia')} 
          />
          <label htmlFor="lidia">Lidia Fire</label>
        </div>
        
        <div className="radio-item">
          <input 
            type="radio" 
            id="sunset" 
            name="wildfire" 
            value="sunset" 
            checked={formData.wildfire === 'sunset'} 
            onChange={() => handleInputChange('wildfire', 'sunset')} 
          />
          <label htmlFor="sunset">Sunset Fire</label>
        </div>
        
        <div className="radio-item">
          <input 
            type="radio" 
            id="kenneth" 
            name="wildfire" 
            value="kenneth" 
            checked={formData.wildfire === 'kenneth'} 
            onChange={() => handleInputChange('wildfire', 'kenneth')} 
          />
          <label htmlFor="kenneth">Kenneth Fire</label>
        </div>
        
        <div className="radio-item">
          <input 
            type="radio" 
            id="other" 
            name="wildfire" 
            value="other" 
            checked={formData.wildfire === 'other'} 
            onChange={() => handleInputChange('wildfire', 'other')} 
          />
          <label htmlFor="other">Other California Wildfire</label>
        </div>
      </div>
      
      <div className="form-buttons">
        <div></div> {/* Empty div for spacing */}
        <button className="btn btn-primary" onClick={handleContinue}>Continue</button>
      </div>
    </div>
  );
};

export default WildfireSelection; 