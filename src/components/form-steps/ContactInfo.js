import React from 'react';

const ContactInfo = ({ formData, handleInputChange, prevStep, handleSubmit }) => {
  const validateForm = () => {
    // Basic validation
    if (!formData.firstName.trim()) {
      alert('Please enter your first name');
      return false;
    }
    
    if (!formData.lastName.trim()) {
      alert('Please enter your last name');
      return false;
    }
    
    if (!formData.email.trim() || !isValidEmail(formData.email)) {
      alert('Please enter a valid email address');
      return false;
    }
    
    if (!formData.phone.trim() || !isValidPhone(formData.phone)) {
      alert('Please enter a valid phone number');
      return false;
    }
    
    if (!formData.zipCode.trim() || !isValidZipCode(formData.zipCode)) {
      alert('Please enter a valid ZIP code');
      return false;
    }
    
    return true;
  };
  
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  const isValidPhone = (phone) => {
    const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    return phoneRegex.test(phone);
  };
  
  const isValidZipCode = (zipCode) => {
    const zipCodeRegex = /^\d{5}(-\d{4})?$/;
    return zipCodeRegex.test(zipCode);
  };
  
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      handleSubmit(e);
    }
  };
  
  return (
    <div>
      <h3 className="form-question">Contact Information</h3>
      <p className="form-description">Please provide your contact details so we can reach out to you.</p>
      
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input 
            type="text" 
            id="firstName" 
            className="form-control" 
            value={formData.firstName} 
            onChange={(e) => handleInputChange('firstName', e.target.value)} 
            required 
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input 
            type="text" 
            id="lastName" 
            className="form-control" 
            value={formData.lastName} 
            onChange={(e) => handleInputChange('lastName', e.target.value)} 
            required 
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input 
            type="email" 
            id="email" 
            className="form-control" 
            value={formData.email} 
            onChange={(e) => handleInputChange('email', e.target.value)} 
            required 
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input 
            type="tel" 
            id="phone" 
            className="form-control" 
            value={formData.phone} 
            onChange={(e) => handleInputChange('phone', e.target.value)} 
            placeholder="(123) 456-7890" 
            required 
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="zipCode">ZIP Code</label>
          <input 
            type="text" 
            id="zipCode" 
            className="form-control" 
            value={formData.zipCode} 
            onChange={(e) => handleInputChange('zipCode', e.target.value)} 
            placeholder="12345" 
            required 
          />
        </div>
        
        <div className="form-group">
          <div className="checkbox-item">
            <input 
              type="checkbox" 
              id="consent" 
              required 
            />
            <label htmlFor="consent">
              I consent to being contacted by phone, email, or text message. I understand that submitting this form does not establish an attorney-client relationship.
            </label>
          </div>
        </div>
        
        <div className="form-buttons">
          <button type="button" className="btn btn-prev" onClick={prevStep}>Back</button>
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ContactInfo; 