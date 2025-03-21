/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/FireClaimForm.css';
import { v4 as uuidv4 } from 'uuid';

const FireClaimForm = () => {
  // Form state
  const [formData, setFormData] = useState({
    // Hidden fields (populated automatically)
    date: '',
    ip: '',
    uniqueid: '',
    user_agent: '',
    xxTrustedFormCertUrl: '',
    // User visible fields
    fname: '',
    lname: '',
    phone: '',
    email: '',
    fire: '',
    damage: '',
    own: '',
    insurance: '',
    estimate: '',
    felony: '',
    attorney: ''
  });

  // Form status states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState(null);
  const [submitError, setSubmitError] = useState(null);

  // Get IP address on component mount
  useEffect(() => {
    // Set user agent
    setFormData(prev => ({
      ...prev,
      user_agent: navigator.userAgent
    }));

    // Generate unique ID
    const uniqueId = uuidv4();
    setFormData(prev => ({
      ...prev,
      uniqueid: uniqueId
    }));

    // Get IP address from ipify API
    fetch('https://api.ipify.org?format=json')
      .then(response => response.json())
      .then(data => {
        setFormData(prev => ({
          ...prev,
          ip: data.ip
        }));
      })
      .catch(error => {
        console.error('Error fetching IP address:', error);
      });

    // Add TrustedForm script if needed
    // This would normally be added in the head of your HTML document
    // and would populate the xxTrustedFormCertUrl field
  }, []);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Format date for API submission
  const formatDate = () => {
    const now = new Date();
    const pad2 = num => num.toString().padStart(2, '0');
    return `${now.getFullYear()}-${pad2(now.getMonth()+1)}-${pad2(now.getDate())} ` +
           `${pad2(now.getHours())}:${pad2(now.getMinutes())}:${pad2(now.getSeconds())}`;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Perform client-side validation
    if (!validateForm()) {
      return;
    }

    // Set submission state
    setIsSubmitting(true);
    setSubmitResult(null);
    setSubmitError(null);

    // Update timestamp
    const currentFormData = {
      ...formData,
      date: formatDate()
    };

    try {
      // Send POST request to our server API endpoint
      const response = await fetch('/api/submit-fire-claim', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(currentFormData)
      });

      const result = await response.json();
      
      // Handle API response
      if (response.ok && result.success) {
        // Lead was accepted - show success message
        setSubmitResult('success');
        
        // Track conversion in Google Tag Manager
        if (typeof window !== 'undefined' && window.dataLayer) {
          try {
            window.dataLayer.push({
              event: 'leadSubmission',
              leadStatus: 'accepted'
            });
          } catch (e) {
            console.error('Error pushing to dataLayer:', e);
          }
        }
        
        // Track conversion in Facebook Pixel
        if (typeof window !== 'undefined' && typeof fbq === 'function') {
          fbq('track', 'Lead');
        }
        
        // Reset form
        resetForm();
      } else {
        // Lead was rejected - determine reason
        if (result.error === 'duplicate') {
          setSubmitError('It looks like you have already submitted this information.');
        } else if (result.error === 'invalid_phone') {
          setSubmitError('Please enter a valid 10-digit phone number.');
        } else if (result.error === 'disqualified') {
          setSubmitError('Sorry, based on your answers, you do not qualify.');
        } else {
          setSubmitError('Sorry, your submission was not accepted. Please check your information and try again.');
        }
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError('An error occurred while submitting your information. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Validate form data
  const validateForm = () => {
    // Check if all required fields are filled
    for (const [key, value] of Object.entries(formData)) {
      // Skip validation for hidden fields that are populated automatically
      if (['date', 'ip', 'uniqueid', 'user_agent', 'xxTrustedFormCertUrl'].includes(key)) {
        continue;
      }
      
      if (!value) {
        setSubmitError(`Please complete all fields before submitting.`);
        return false;
      }
    }

    // Validate phone (must be 10 digits)
    if (!/^\d{10}$/.test(formData.phone)) {
      setSubmitError('Please enter a valid 10-digit phone number (numbers only).');
      return false;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitError('Please enter a valid email address.');
      return false;
    }

    return true;
  };

  // Reset form after successful submission
  const resetForm = () => {
    setFormData({
      ...formData,
      fname: '',
      lname: '',
      phone: '',
      email: '',
      fire: '',
      damage: '',
      own: '',
      insurance: '',
      estimate: '',
      felony: '',
      attorney: ''
    });
  };

  return (
    <div className="fire-claim-form-container">
      <h2>California Wildfire Damage Claim</h2>
      <p className="form-description">
        Complete this form to see if you qualify for compensation for damages caused by recent California wildfires.
      </p>
      
      {submitResult === 'success' ? (
        <div className="success-message">
          <h3>Thank you for your submission!</h3>
          <p>Your information has been received. A representative will contact you shortly.</p>
        </div>
      ) : (
        <form id="fireClaimForm" onSubmit={handleSubmit}>
          {submitError && (
            <div className="error-message">
              {submitError}
            </div>
          )}
          
          <div className="form-section">
            <h3>Your Contact Information</h3>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="fname">First Name</label>
                <input 
                  type="text" 
                  id="fname" 
                  name="fname" 
                  value={formData.fname}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="lname">Last Name</label>
                <input 
                  type="text" 
                  id="lname" 
                  name="lname" 
                  value={formData.lname}
                  onChange={handleInputChange}
                  required 
                />
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">Phone Number (10 digits)</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  pattern="\\d{10}"
                  placeholder="1234567890"
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required 
                />
              </div>
            </div>
          </div>
          
          <div className="form-section">
            <h3>Wildfire Impact Information</h3>
            
            <div className="form-group">
              <label htmlFor="fire">Which of the wildfires were you impacted by?</label>
              <select 
                id="fire" 
                name="fire"
                value={formData.fire}
                onChange={handleInputChange}
                required
              >
                <option value="" disabled>Select one</option>
                <option value="Palisades">Palisades</option>
                <option value="Eaton">Eaton</option>
                <option value="Hurst">Hurst</option>
                <option value="Lidia">Lidia</option>
                <option value="Sunset">Sunset</option>
                <option value="Kenneth">Kenneth</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="damage">What was damaged by the fire?</label>
              <select 
                id="damage" 
                name="damage"
                value={formData.damage}
                onChange={handleInputChange}
                required
              >
                <option value="" disabled>Select one</option>
                <option value="Residential Property (Home was damaged or destroyed)">
                  Residential Property (Home was damaged or destroyed)
                </option>
                <option value="Commercial Property (Business property was damaged or destroyed)">
                  Commercial Property (Business property was damaged or destroyed)
                </option>
                <option value="Personal Property over 50k (Cars, furniture, valuables, etc.)">
                  Personal Property over 50k (Cars, furniture, valuables, etc.)
                </option>
                <option value="Loss of Income over 50k (Unable to work due to the fire)">
                  Loss of Income over 50k (Unable to work due to the fire)
                </option>
                <option value="Personal Injury (Required Hospitalization or Medical Treatment Within 10 Days) Death of a Family Member">
                  Personal Injury (Hospitalization or Medical Treatment Within 10 Days / Death of a Family Member)
                </option>
                <option value="First responder at the Eaton Fire (sought treatment within 10 days for PTSD or mental health injuries)">
                  First responder at the Eaton Fire (sought treatment within 10 days for PTSD or other injuries)
                </option>
              </select>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="own">Do you own the home that was damaged?</label>
                <select 
                  id="own" 
                  name="own"
                  value={formData.own}
                  onChange={handleInputChange}
                  required
                >
                  <option value="" disabled>Select one</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="insurance">Do you have insurance for the damaged home/valuables?</label>
                <select 
                  id="insurance" 
                  name="insurance"
                  value={formData.insurance}
                  onChange={handleInputChange}
                  required
                >
                  <option value="" disabled>Select one</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="estimate">Estimated total cost of damages:</label>
              <select 
                id="estimate" 
                name="estimate"
                value={formData.estimate}
                onChange={handleInputChange}
                required
              >
                <option value="" disabled>Select one</option>
                <option value="$50k to $199k">$50k to $199k</option>
                <option value="$200k to $299k">$200k to $299k</option>
                <option value="$300k or more">$300k or more</option>
              </select>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="felony">Have you been convicted of a felony?</label>
                <select 
                  id="felony" 
                  name="felony"
                  value={formData.felony}
                  onChange={handleInputChange}
                  required
                >
                  <option value="" disabled>Select one</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="attorney">Are you currently working with an attorney?</label>
                <select 
                  id="attorney" 
                  name="attorney"
                  value={formData.attorney}
                  onChange={handleInputChange}
                  required
                >
                  <option value="" disabled>Select one</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
            </div>
          </div>
          
          <div className="form-actions">
            {/* TCPA Compliance Checkbox */}
            <div className="form-group tcpa-consent" style={{ marginBottom: '20px', textAlign: 'left' }}>
              <label style={{ display: 'flex', alignItems: 'flex-start', cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  id="fire-claim-tcpa-checkbox"
                  className="tcpa-consent-input"
                  name="tcpaConsent"
                  required
                  style={{ 
                    marginRight: '10px', 
                    marginTop: '3px',
                    width: '20px',
                    height: '20px',
                    minWidth: '20px',
                    display: 'inline-block',
                    visibility: 'visible',
                    opacity: 1,
                    position: 'static'
                  }}
                />
                <span style={{ fontSize: '0.9rem', lineHeight: '1.4' }}>
                  I consent to be contacted by automated technology regarding my inquiry. I understand this is not a condition of purchase.
                </span>
              </label>
            </div>
            
            <button 
              type="submit" 
              className="submit-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit My Claim'}
            </button>
          </div>
          
          <p className="legal-disclaimer">
            By submitting this form, you agree to be contacted by phone, email, or text 
            message regarding your claim. You understand this is not a formal legal 
            engagement and an attorney will review your case before representation.
          </p>
        </form>
      )}
    </div>
  );
};

export default FireClaimForm; 