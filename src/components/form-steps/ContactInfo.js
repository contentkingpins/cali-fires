import React, { useState } from 'react';

const ContactInfo = ({ formData, handleInputChange, prevStep, handleSubmit, isSubmitting, submitError }) => {
  const [errors, setErrors] = useState({});
  
  const validateForm = () => {
    const newErrors = {};
    
    // Validate first name
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    
    // Validate last name
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    // Validate phone
    const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    
    // Validate zip code
    const zipRegex = /^\d{5}(-\d{4})?$/;
    if (!formData.zipCode.trim()) {
      newErrors.zipCode = 'ZIP code is required';
    } else if (!zipRegex.test(formData.zipCode)) {
      newErrors.zipCode = 'Please enter a valid ZIP code';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const onSubmit = (e) => {
    if (validateForm()) {
      handleSubmit(e);
    } else {
      e.preventDefault();
    }
  };
  
  return (
    <div>
      <h3 className="form-question">Contact Information</h3>
      <p className="form-description">Please provide your contact details so we can get in touch with you about your claim.</p>
      
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input 
            type="text" 
            id="firstName" 
            value={formData.firstName} 
            onChange={(e) => handleInputChange('firstName', e.target.value)} 
            className={errors.firstName ? 'error' : ''}
          />
          {errors.firstName && <div className="error-message">{errors.firstName}</div>}
        </div>
        
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input 
            type="text" 
            id="lastName" 
            value={formData.lastName} 
            onChange={(e) => handleInputChange('lastName', e.target.value)} 
            className={errors.lastName ? 'error' : ''}
          />
          {errors.lastName && <div className="error-message">{errors.lastName}</div>}
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input 
            type="email" 
            id="email" 
            value={formData.email} 
            onChange={(e) => handleInputChange('email', e.target.value)} 
            className={errors.email ? 'error' : ''}
          />
          {errors.email && <div className="error-message">{errors.email}</div>}
        </div>
        
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input 
            type="tel" 
            id="phone" 
            value={formData.phone} 
            onChange={(e) => handleInputChange('phone', e.target.value)} 
            placeholder="(123) 456-7890"
            className={errors.phone ? 'error' : ''}
          />
          {errors.phone && <div className="error-message">{errors.phone}</div>}
        </div>
        
        <div className="form-group">
          <label htmlFor="zipCode">ZIP Code</label>
          <input 
            type="text" 
            id="zipCode" 
            value={formData.zipCode} 
            onChange={(e) => handleInputChange('zipCode', e.target.value)} 
            className={errors.zipCode ? 'error' : ''}
          />
          {errors.zipCode && <div className="error-message">{errors.zipCode}</div>}
        </div>
        
        {submitError && (
          <div className="submit-error-message">
            <p>{submitError}</p>
            <p>Please try again or call us directly at (800) 555-1234 for assistance.</p>
          </div>
        )}
        
        <div className="privacy-notice">
          <p>
            By submitting this form, you agree to our <a href="/privacy" target="_blank">Privacy Policy</a> and 
            <a href="/terms" target="_blank">Terms of Service</a>. We will use your information to evaluate your 
            potential claim and contact you about legal representation.
          </p>
        </div>
        
        <div className="form-buttons">
          <button type="button" className="btn btn-secondary" onClick={prevStep}>Back</button>
          <button 
            type="submit" 
            className="btn btn-primary"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactInfo; 