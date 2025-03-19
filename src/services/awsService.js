import { v4 as uuidv4 } from 'uuid';

// Function to submit form data to the specified API endpoint
export const submitToDynamoDB = async (formData) => {
  try {
    // Generate a unique lead ID
    const lead_id = uuidv4();
    
    // Format the date as required (YYYY-MM-DD HH:MM:SS)
    const formatDate = () => {
      const now = new Date();
      const pad2 = num => num.toString().padStart(2, '0');
      return `${now.getFullYear()}-${pad2(now.getMonth()+1)}-${pad2(now.getDate())} ` +
             `${pad2(now.getHours())}:${pad2(now.getMinutes())}:${pad2(now.getSeconds())}`;
    };
    
    // Get client IP address (in development, this will be a fallback value)
    const getIpAddress = async () => {
      try {
        // Try to get the IP from an external service
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        return data.ip;
      } catch (error) {
        console.log('Could not get IP address, using fallback value');
        return '127.0.0.1';
      }
    };
    
    // Get IP address
    const ipAddress = await getIpAddress();
    
    // Get TrustedForm certificate URL
    const trustedFormCertUrl = document.getElementById('xxTrustedFormCertUrl')?.value || '';
    
    // Get user agent
    const userAgent = navigator.userAgent;
    
    // Map wildfire selection to required format
    const mapWildfire = (wildfire) => {
      switch (wildfire) {
        case 'Palisades Fire': return 'Palisades';
        case 'Eaton Fire': return 'Eaton';
        case 'Hurst Fire': return 'Hurst';
        case 'Lidia Fire': return 'Lidia';
        case 'Sunset Fire': return 'Sunset';
        case 'Kenneth Fire': return 'Kenneth';
        default: return wildfire;
      }
    };
    
    // Map loss types to the required damage format
    const mapDamage = (lossTypes) => {
      if (lossTypes.includes('property')) {
        return 'Residential Property (Home was damaged or destroyed)';
      } else if (lossTypes.includes('business')) {
        return 'Commercial Property (Business property was damaged or destroyed)';
      } else if (lossTypes.includes('income')) {
        return 'Loss of Income over 50k (Unable to work due to the fire)';
      } else if (lossTypes.includes('injury')) {
        return 'Personal Injury (Required Hospitalization or Medical Treatment Within 10 Days) Death of a Family Member';
      } else if (lossTypes.includes('emotional')) {
        return 'First responder at the Eaton Fire (sought treatment within 10 days for PTSD or mental health injuries)';
      } else {
        return 'Personal Property over 50k (Cars, furniture, valuables, etc.)';
      }
    };
    
    // Map insurance to yes/no
    const mapYesNo = (value) => value ? 'Yes' : 'No';
    
    // Map loss amount to required format
    const mapEstimate = (lossAmount) => {
      if (lossAmount === '50kto199k') {
        return '$50k to $199k';
      } else if (lossAmount === '200kto299k') {
        return '$200k to $299k';
      } else if (lossAmount === '300kplus') {
        return '$300k or more';
      } else {
        // Default to a valid option if none selected
        return '$50k to $199k';
      }
    };
    
    // Check if this is a test submission
    const isTestSubmission = formData.email === 'test@test.com' || 
                            window.location.search.includes('test=true');
    
    // Process phone number - for tests, ensure it starts with 619962
    let phoneNumber = formData.phone.replace(/\D/g, ''); // Strip non-numeric characters
    if (isTestSubmission && !phoneNumber.startsWith('619962')) {
      // If it's a test submission, ensure the phone starts with 619962
      phoneNumber = '619962' + phoneNumber.substring(6);
    }
    
    // Email address - for tests, use test@test.com
    const emailAddress = isTestSubmission ? 'test@test.com' : formData.email;
    
    // Create the payload according to the specified format
    const payload = {
      date: formatDate(),
      ip: ipAddress,
      uniqueid: lead_id,
      s1: 'califireclaimcenter', // Tracking source
      user_agent: userAgent,
      xxTrustedFormCertUrl: trustedFormCertUrl,
      fname: formData.firstName,
      lname: formData.lastName,
      phone: phoneNumber,
      email: emailAddress,
      fire: mapWildfire(formData.wildfire),
      damage: mapDamage(formData.lossTypes),
      own: "Yes", // Defaulting to Yes as it's not explicitly collected in our form
      insurance: mapYesNo(formData.hasInsurance),
      estimate: mapEstimate(formData.lossAmount),
      felony: "No", // Defaulting to No as it's not explicitly collected in our form
      attorney: mapYesNo(formData.hasLegalRepresentation)
    };

    // Log if this is a test submission
    if (isTestSubmission) {
      console.log('📝 TEST SUBMISSION DETECTED - Using test email and phone format');
    }
    
    // Log data being sent
    console.log('Preparing to submit data to endpoint:', payload);
    console.log('TrustedForm certificate URL:', trustedFormCertUrl);

    // For testing development only, uncomment to skip actual API call
    const isDevelopment = false; // Set to true during local testing, false for production
    
    if (isDevelopment) {
      console.log('Development mode - skipping actual API submission');
      
      // Simulate a delay
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Return success response
      return { 
        success: true, 
        lead_id: lead_id,
        message: 'Test mode - Form submitted successfully (simulated)'
      };
    }

    // Make the actual API call to the specified endpoint
    console.log('Submitting lead data to API endpoint');
    const apiUrl = 'https://hook.us1.make.celonis.com/uhbp12uhjkrxowrncu8o1hm17q3if59f';
    
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    // Get the response text
    const responseText = await response.text();
    console.log('API Response:', responseText);

    if (!response.ok) {
      console.error('API Error Response:', responseText);
      throw new Error(`Failed to submit form data: ${response.status} ${response.statusText}`);
    }

    // Check for specific response messages
    if (responseText.includes('Lead Accepted')) {
      console.log('Lead was accepted successfully!');
      return { 
        success: true, 
        lead_id: lead_id,
        message: 'Lead Accepted'
      };
    } else if (responseText.includes('Accepted')) {
      console.log('Data was received but lead status is pending');
      return { 
        success: true, 
        lead_id: lead_id,
        message: 'Data Accepted - In Testing Mode'
      };
    } else if (responseText.includes('Rejected')) {
      console.log('Lead was rejected:', responseText);
      return { 
        success: false, 
        error: responseText
      };
    }

    // Default success response if we can't determine specific message
    return { 
      success: true, 
      lead_id: lead_id,
      message: responseText
    };
  } catch (error) {
    console.error('Error submitting form data:', error);
    return { success: false, error: error.message };
  }
}; 