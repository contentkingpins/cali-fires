import React, { useState, useEffect } from 'react';

const ContactInfo = ({ formData, handleInputChange, prevStep, handleSubmit, isSubmitting, submitError }) => {
  const [errors, setErrors] = useState({});
  
  // Use Effect to inject CSS and remove radio buttons from DOM after render
  useEffect(() => {
    // Inject CSS directly into the head
    const style = document.createElement('style');
    style.innerHTML = `
      /* Hide all radio buttons in the contact form */
      .form-step input[type="radio"],
      .form-step [class*="radio"],
      .form-step [type="radio"] {
        display: none !important;
        visibility: hidden !important;
        opacity: 0 !important;
        position: absolute !important;
        pointer-events: none !important;
        z-index: -9999 !important;
        width: 0 !important;
        height: 0 !important;
      }
      
      /* Reset labels to not have circles */
      .form-step h3:contains("Contact Information") ~ * label::before,
      .form-step h3:contains("Contact Information") ~ * label::after,
      .form-step h3:contains("Contact Information") ~ div label::before,
      .form-step h3:contains("Contact Information") ~ div label::after,
      .form-step h3:contains("Contact Information") ~ form label::before,
      .form-step h3:contains("Contact Information") ~ form label::after {
        display: none !important;
        content: none !important;
      }
      
      /* Ensure proper label styling */
      #contactForm label {
        display: block !important;
        margin-bottom: 8px !important;
        padding-left: 0 !important;
        position: static !important;
      }
      
      /* Ensure proper input styling */
      #contactForm input {
        display: block !important;
        width: 100% !important;
        padding: 12px !important;
        border-radius: 4px !important;
        margin-bottom: 4px !important;
        position: static !important;
        opacity: 1 !important;
        visibility: visible !important;
      }
    `;
    document.head.appendChild(style);
    
    // NEW: Insert TrustedForm script with identifier and consent tags
    const insertTrustedFormScript = () => {
      // Create the TrustedForm script
      const tf = document.createElement('script');
      tf.type = 'text/javascript';
      tf.async = true;
      tf.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 
              'api.trustedform.com/trustedform.js?field=xxTrustedFormCertUrl&identifier=califireclaimcenter&use_tagged_consent=true&l=' + 
              new Date().getTime() + Math.random();
      
      // Insert script into page
      const s = document.getElementsByTagName('script')[0];
      if (s && s.parentNode) {
        s.parentNode.insertBefore(tf, s);
      } else {
        // Fallback if no script tags exist yet
        document.head.appendChild(tf);
      }
      
      // Also add the noscript version for fallback
      const noscript = document.createElement('noscript');
      const img = document.createElement('img');
      img.src = 'https://api.trustedform.com/ns.gif';
      noscript.appendChild(img);
      document.body.appendChild(noscript);
      
      console.log('TrustedForm script inserted with identifier and consent tags');
    };
    
    // Insert the TrustedForm script
    insertTrustedFormScript();
    
    // NEW: Super aggressive radio button removal
    const nukeRadioButtons = () => {
      console.log("Removing all radio buttons from contact form...");
      
      // First method: Query selector targeting
      const formStep = document.querySelector('.form-step');
      
      if (formStep) {
        // Find any heading that contains "Contact Information"
        const contactHeading = Array.from(formStep.querySelectorAll('h3')).find(
          h => h.textContent.includes('Contact Information')
        );
        
        if (contactHeading) {
          console.log("Found Contact Information heading");
          
          // Get the parent container of the heading
          let contactContainer = contactHeading;
          
          // Go up to find the main container
          while (contactContainer && !contactContainer.classList.contains('form-step')) {
            // Mark all siblings that might be radio buttons for removal
            const siblings = contactContainer.parentNode ? 
              Array.from(contactContainer.parentNode.children) : [];
            
            siblings.forEach(sib => {
              if (sib !== contactContainer) {
                // Check if it's a radio button or contains one
                const radioButtons = sib.querySelectorAll('input[type="radio"]');
                if (radioButtons.length > 0 || 
                    sib.tagName === 'INPUT' && sib.type === 'radio' ||
                    (sib.className && sib.className.includes('radio'))) {
                  console.log("Found radio element to remove:", sib);
                  sib.style.display = 'none';
                  sib.style.visibility = 'hidden';
                  sib.style.position = 'absolute';
                  sib.style.opacity = '0';
                  sib.style.pointerEvents = 'none';
                  // Extreme case: try to physically remove from DOM
                  if (sib.parentNode) {
                    try {
                      sib.parentNode.removeChild(sib);
                      console.log("Successfully removed radio element from DOM");
                    } catch (e) {
                      console.log("Could not remove from DOM:", e);
                    }
                  }
                }
              }
            });
            
            contactContainer = contactContainer.parentNode;
          }
        }
      }
      
      // Second method: Target by selector that's above input fields
      const allLabels = document.querySelectorAll('label');
      allLabels.forEach(label => {
        // Check if it's a label in the contact form (has input sibling)
        const nextInput = label.nextElementSibling;
        if (nextInput && (nextInput.tagName === 'INPUT' || 
                           nextInput.querySelector('input'))) {
          // This is likely a label in our form, reset its styling
          label.style.position = 'static';
          label.style.paddingLeft = '0';
          label.style.marginLeft = '0';
          
          // Remove any ::before or ::after pseudo-elements that could be circles
          const styleOverride = document.createElement('style');
          styleOverride.textContent = `
            #${label.htmlFor}::before, 
            #${label.htmlFor}::after, 
            #${label.htmlFor} + label::before, 
            #${label.htmlFor} + label::after,
            label[for="${label.htmlFor}"]::before,
            label[for="${label.htmlFor}"]::after {
              display: none !important;
              content: none !important;
              opacity: 0 !important;
              visibility: hidden !important;
            }
          `;
          document.head.appendChild(styleOverride);
        }
      });
      
      // Third method: Use MutationObserver to catch dynamically added radio buttons
      const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
          if (mutation.addedNodes.length) {
            mutation.addedNodes.forEach(node => {
              // Check if the added node is or contains a radio button
              if (node.nodeType === 1) { // Element node
                // Direct check if it's a radio button
                if (node.tagName === 'INPUT' && node.type === 'radio') {
                  console.log("Caught newly added radio button:", node);
                  node.style.display = 'none';
                  node.style.visibility = 'hidden';
                  node.style.opacity = '0';
                  if (node.parentNode) {
                    node.parentNode.removeChild(node);
                  }
                }
                
                // Check for radio buttons inside the node
                const radioButtons = node.querySelectorAll('input[type="radio"]');
                radioButtons.forEach(radio => {
                  console.log("Caught newly added radio button inside element:", radio);
                  radio.style.display = 'none';
                  radio.style.visibility = 'hidden';
                  radio.style.opacity = '0';
                  if (radio.parentNode) {
                    radio.parentNode.removeChild(radio);
                  }
                });
              }
            });
          }
        });
      });
      
      // Start observing the entire form step
      const formStepContainer = document.querySelector('.form-step');
      if (formStepContainer) {
        observer.observe(formStepContainer, {
          childList: true,
          subtree: true
        });
        console.log("Set up mutation observer for new radio buttons");
      }
      
      return observer; // Return observer for cleanup
    };
    
    // Function to remove radio buttons (original)
    const removeRadioButtons = () => {
      // Get form step element
      const formStep = document.querySelector('.form-step');
      if (!formStep) return;
      
      // Find all radio buttons inside form step
      const radioButtons = formStep.querySelectorAll('input[type="radio"]');
      radioButtons.forEach(radio => {
        // First hide with styling
        radio.style.display = 'none';
        radio.style.visibility = 'hidden';
        radio.style.position = 'absolute';
        radio.style.pointerEvents = 'none';
        radio.style.opacity = '0';
        
        // Then remove from DOM
        if (radio.parentNode) {
          radio.parentNode.removeChild(radio);
        }
      });
      
      // Also remove any elements with radio in their className
      const radioElements = formStep.querySelectorAll('[class*="radio"]');
      radioElements.forEach(elem => {
        elem.style.display = 'none';
        if (elem.parentNode) {
          elem.parentNode.removeChild(elem);
        }
      });
      
      // Also target any label::before or label::after elements
      const labels = formStep.querySelectorAll('label');
      labels.forEach(label => {
        // Reset label styling
        label.style.position = 'static';
        label.style.paddingLeft = '0';
        label.style.marginLeft = '0';
      });
    };
    
    // Run the function immediately
    removeRadioButtons();
    
    // Run the super aggressive method after a short delay
    const observer = nukeRadioButtons();
    
    // Also run it after a short delay to catch any dynamically added elements
    const timeoutId = setTimeout(removeRadioButtons, 100);
    
    // And one more timeout with the aggressive method
    const timeoutId2 = setTimeout(nukeRadioButtons, 500);
    
    // Clean up
    return () => {
      clearTimeout(timeoutId);
      clearTimeout(timeoutId2);
      if (observer) observer.disconnect();
      if (style.parentNode) {
        style.parentNode.removeChild(style);
      }
    };
  }, []);
  
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
    e.preventDefault();
    if (validateForm()) {
      handleSubmit(e);
    }
  };
  
  // Using direct HTML to avoid any React structure issues
  return (
    <div className="contact-form-wrapper" style={{ width: '100%', textAlign: 'center' }}>
      {/* Anti-radio button style tag */}
      <style dangerouslySetInnerHTML={{ __html: `
        /* Target contact form only */
        #contactForm label,
        #contactForm input,
        #contactForm button,
        #contactForm div {
          all: revert;
        }
        
        /* Aggressive style resets */
        .form-step input[type="radio"],
        .form-step input[type="radio"] + label::before,
        .form-step input[type="radio"] + label::after,
        .form-step input[type="radio"] ~ label::before,
        .form-step input[type="radio"] ~ label::after {
          display: none !important;
          visibility: hidden !important;
          opacity: 0 !important;
          content: none !important;
        }
        
        /* Remove radio button styling */
        #contactForm label::before,
        #contactForm label::after {
          display: none !important;
          content: none !important;
        }
      `}} />
      
      {/* TrustedForm script tag with identifier and consent tags */}
      <script type="text/javascript" dangerouslySetInnerHTML={{ __html: `
        (function() {
          var tf = document.createElement('script');
          tf.type = 'text/javascript';
          tf.async = true;
          tf.src = ('https:' == document.location.protocol ? 'https://' : 'http://') +
            'api.trustedform.com/trustedform.js?field=xxTrustedFormCertUrl&identifier=califireclaimcenter&use_tagged_consent=true&l=' +
            new Date().getTime() + Math.random();
          var s = document.getElementsByTagName('script')[0];
          s.parentNode.insertBefore(tf, s);
        })();
      `}} />
      
      {/* TrustedForm noscript tag for fallback */}
      <noscript>
        <img src="https://api.trustedform.com/ns.gif" />
      </noscript>
      
      <h3 style={{ textAlign: 'center', marginBottom: '15px' }}>Contact Information</h3>
      <p style={{ textAlign: 'center', marginBottom: '20px' }}>
        Please provide your contact details so we can get in touch with you about your claim.
      </p>
      
      <div style={{ maxWidth: '450px', margin: '0 auto', textAlign: 'left' }}>
        <form id="contactForm" onSubmit={onSubmit}>
          {/* Hidden TrustedForm field - will be populated by the script */}
          <input type="hidden" name="xxTrustedFormCertUrl" id="xxTrustedFormCertUrl" />
          
          {/* First Name Field */}
          <div style={{ marginBottom: '20px' }}>
            <label 
              htmlFor="firstName-input" 
              style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}
            >
              First Name
            </label>
            <input
              id="firstName-input"
              type="text"
              value={formData.firstName}
              onChange={(e) => handleInputChange('firstName', e.target.value)}
              style={{
                width: '100%',
                padding: '12px',
                border: errors.firstName ? '1px solid #d32f2f' : '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '1rem',
                boxSizing: 'border-box'
              }}
            />
            {errors.firstName && (
              <div style={{ color: '#d32f2f', fontSize: '0.875rem', marginTop: '4px' }}>
                {errors.firstName}
              </div>
            )}
          </div>
          
          {/* Last Name Field */}
          <div style={{ marginBottom: '20px' }}>
            <label 
              htmlFor="lastName-input" 
              style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}
            >
              Last Name
            </label>
            <input
              id="lastName-input"
              type="text"
              value={formData.lastName}
              onChange={(e) => handleInputChange('lastName', e.target.value)}
              style={{
                width: '100%',
                padding: '12px',
                border: errors.lastName ? '1px solid #d32f2f' : '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '1rem',
                boxSizing: 'border-box'
              }}
            />
            {errors.lastName && (
              <div style={{ color: '#d32f2f', fontSize: '0.875rem', marginTop: '4px' }}>
                {errors.lastName}
              </div>
            )}
          </div>
          
          {/* Email Address Field */}
          <div style={{ marginBottom: '20px' }}>
            <label 
              htmlFor="email-input" 
              style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}
            >
              Email Address
            </label>
            <input
              id="email-input"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              style={{
                width: '100%',
                padding: '12px',
                border: errors.email ? '1px solid #d32f2f' : '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '1rem',
                boxSizing: 'border-box'
              }}
            />
            {errors.email && (
              <div style={{ color: '#d32f2f', fontSize: '0.875rem', marginTop: '4px' }}>
                {errors.email}
              </div>
            )}
          </div>
          
          {/* Phone Number Field */}
          <div style={{ marginBottom: '20px' }}>
            <label 
              htmlFor="phone-input" 
              style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}
            >
              Phone Number
            </label>
            <input
              id="phone-input"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              placeholder="(123) 456-7890"
              style={{
                width: '100%',
                padding: '12px',
                border: errors.phone ? '1px solid #d32f2f' : '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '1rem',
                boxSizing: 'border-box'
              }}
            />
            {errors.phone && (
              <div style={{ color: '#d32f2f', fontSize: '0.875rem', marginTop: '4px' }}>
                {errors.phone}
              </div>
            )}
          </div>
          
          {/* ZIP Code Field */}
          <div style={{ marginBottom: '20px' }}>
            <label 
              htmlFor="zipCode-input" 
              style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}
            >
              ZIP Code
            </label>
            <input
              id="zipCode-input"
              type="text"
              value={formData.zipCode}
              onChange={(e) => handleInputChange('zipCode', e.target.value)}
              style={{
                width: '100%',
                padding: '12px',
                border: errors.zipCode ? '1px solid #d32f2f' : '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '1rem',
                boxSizing: 'border-box'
              }}
            />
            {errors.zipCode && (
              <div style={{ color: '#d32f2f', fontSize: '0.875rem', marginTop: '4px' }}>
                {errors.zipCode}
              </div>
            )}
          </div>
          
          {/* Error Message */}
          {submitError && (
            <div style={{
              backgroundColor: '#ffebee',
              color: '#c62828',
              padding: '15px',
              borderRadius: '4px',
              marginBottom: '20px'
            }}>
              <p style={{ margin: '0 0 8px 0' }}>{submitError}</p>
              <p style={{ margin: '0' }}>Please try again or call us directly at (800) 555-1234 for assistance.</p>
            </div>
          )}
          
          {/* Privacy Notice */}
          <div style={{ marginBottom: '20px', fontSize: '0.875rem', color: '#666' }}>
            <p>
              By submitting this form, you agree to our{' '}
              <a href="/privacy" target="_blank" style={{ color: '#d32f2f', textDecoration: 'none' }}>
                Privacy Policy
              </a>{' '}
              and{' '}
              <a href="/terms" target="_blank" style={{ color: '#d32f2f', textDecoration: 'none' }}>
                Terms of Service
              </a>. We will use your information to evaluate your potential claim and contact you about legal representation.
            </p>
          </div>
          
          {/* TCPA Compliance Checkbox */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'flex', alignItems: 'flex-start', cursor: 'pointer' }}>
              <input
                type="checkbox"
                required
                style={{ 
                  marginRight: '10px', 
                  marginTop: '3px',
                  width: 'auto',
                  padding: 0
                }}
              />
              <span style={{ fontSize: '0.875rem', lineHeight: '1.4' }}>
                I consent to be contacted by automated technology regarding my inquiry. I understand this is not a condition of purchase.
              </span>
            </label>
          </div>
          
          {/* Form Buttons */}
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <button
              type="button"
              onClick={prevStep}
              style={{
                padding: '12px 24px',
                backgroundColor: '#d32f2f',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                fontSize: '1rem',
                cursor: 'pointer'
              }}
            >
              Back
            </button>
            
            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                padding: '12px 24px',
                backgroundColor: '#d32f2f',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                fontSize: '1rem',
                cursor: isSubmitting ? 'not-allowed' : 'pointer',
                opacity: isSubmitting ? 0.7 : 1
              }}
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactInfo; 