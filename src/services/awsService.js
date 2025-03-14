import { v4 as uuidv4 } from 'uuid';

// Function to submit form data to DynamoDB
export const submitToDynamoDB = async (formData) => {
  try {
    // Generate a unique lead ID
    const lead_id = uuidv4();
    
    // Current timestamp
    const timestamp = new Date().toISOString();
    
    // Create a dynamic payload based on the form data
    // This ensures we only send fields that have values
    const payload = {
      lead_id,
      timestamp,
      lead_source: 'califireclaimcenter',
      lead_type: 'wildfire_claim',
      
      // Only include fields that have values
      ...(formData.wildfire && { wildfire_event: formData.wildfire }),
      ...(formData.lossTypes && formData.lossTypes.length > 0 && { 
        loss_types: formData.lossTypes,
        has_property_loss: formData.lossTypes.includes('property'),
        has_injury: formData.lossTypes.includes('injury'),
        has_business_loss: formData.lossTypes.includes('business'),
        has_income_loss: formData.lossTypes.includes('income'),
        has_emotional_distress: formData.lossTypes.includes('emotional')
      }),
      ...(formData.hasInsurance !== null && { has_insurance: formData.hasInsurance }),
      ...(formData.soughtMedicalAttention !== null && { sought_medical_attention: formData.soughtMedicalAttention }),
      ...(formData.medicalTimeframe && { medical_timeframe: formData.medicalTimeframe }),
      ...(formData.lossAmount && { loss_amount: formData.lossAmount }),
      ...(formData.hasLegalRepresentation !== null && { has_legal_representation: formData.hasLegalRepresentation }),
      ...(formData.utilityProvider && { utility_provider: formData.utilityProvider }),
      
      // Contact information
      ...(formData.firstName && { first_name: formData.firstName }),
      ...(formData.lastName && { last_name: formData.lastName }),
      ...(formData.email && { email: formData.email }),
      ...(formData.phone && { phone: formData.phone }),
      ...(formData.zipCode && { zip_code: formData.zipCode })
    };

    // Make API call to your backend service that will interact with DynamoDB
    const response = await fetch('/api/submit-lead', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error('Failed to submit form data');
    }

    const data = await response.json();
    return { success: true, lead_id: data.lead_id };
  } catch (error) {
    console.error('Error submitting form data:', error);
    return { success: false, error: error.message };
  }
}; 