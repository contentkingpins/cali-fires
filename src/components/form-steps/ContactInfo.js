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
  
  // Custom styled inputs without radio buttons
  const renderInputField = (id, label, type, value, placeholder = '') => (
    <div className="input-field-container" style={{marginBottom: '20px'}}>
      <label htmlFor={id} style={{display: 'block', marginBottom: '8px'}}>{label}</label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={(e) => handleInputChange(id, e.target.value)}
        placeholder={placeholder}
        style={{
          width: '100%',
          padding: '12px',
          border: '1px solid #ddd',
          borderRadius: '4px',
          fontSize: '1rem'
        }}
        className={errors[id] ? 'error' : ''}
      />
      {errors[id] && <div className="error-message" style={{color: 'red', marginTop: '5px'}}>{errors[id]}</div>}
    </div>
  );
  
  return (
    <div className="contact-form-container">
      <h3 className="form-question">Contact Information</h3>
      <p className="form-description">Please provide your contact details so we can get in touch with you about your claim.</p>
      
      <form onSubmit={onSubmit} className="contact-info-form" style={{width: '100%', maxWidth: '450px'}}>
        {renderInputField('firstName', 'First Name', 'text', formData.firstName)}
        {renderInputField('lastName', 'Last Name', 'text', formData.lastName)}
        {renderInputField('email', 'Email Address', 'email', formData.email)}
        {renderInputField('phone', 'Phone Number', 'tel', formData.phone, '(123) 456-7890')}
        {renderInputField('zipCode', 'ZIP Code', 'text', formData.zipCode)}
        
        {submitError && (
          <div className="submit-error-message" style={{
            backgroundColor: '#ffebee', 
            color: '#c62828', 
            padding: '10px 15px', 
            borderRadius: '4px', 
            marginBottom: '20px',
            marginTop: '10px'
          }}>
            <p>{submitError}</p>
            <p>Please try again or call us directly at (800) 555-1234 for assistance.</p>
          </div>
        )}
        
        <div className="privacy-notice" style={{marginBottom: '20px', fontSize: '0.9rem', color: '#666'}}>
          <p>
            By submitting this form, you agree to our <a href="/privacy" target="_blank">Privacy Policy</a> and{' '}
            <a href="/terms" target="_blank">Terms of Service</a>. We will use your information to evaluate your 
            potential claim and contact you about legal representation.
          </p>
        </div>
        
        <div className="form-buttons" style={{display: 'flex', justifyContent: 'space-between'}}>
          <button 
            type="button" 
            className="btn btn-secondary" 
            onClick={prevStep}
            style={{
              padding: '10px 20px',
              backgroundColor: '#f5f5f5',
              border: '1px solid #ddd',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Back
          </button>
          <button 
            type="submit" 
            className="btn btn-primary"
            disabled={isSubmitting}
            style={{
              padding: '10px 20px',
              backgroundColor: '#d32f2f',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: isSubmitting ? 'not-allowed' : 'pointer'
            }}
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactInfo; 