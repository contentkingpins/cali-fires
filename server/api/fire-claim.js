const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

// Fire claim submission endpoint
router.post('/submit-fire-claim', async (req, res) => {
  try {
    const formData = req.body;
    
    console.log('Received fire claim submission:', formData);
    
    // Forward the data to the third-party API
    const response = await fetch('https://hook.us1.make.celonis.com/uhbp12uhjkrxowrncu8o1hm17q3if59f', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });
    
    const resultText = await response.text();
    console.log('Third-party API response:', resultText);
    
    // Return the response from the third-party API
    if (resultText.includes('Lead Accepted')) {
      return res.status(200).json({ 
        success: true, 
        message: 'Lead accepted',
        responseText: resultText
      });
    } else if (resultText.includes('Duplicate')) {
      return res.status(409).json({
        success: false,
        error: 'duplicate',
        message: 'Duplicate submission',
        responseText: resultText
      });
    } else if (resultText.includes('Invalid Phone')) {
      return res.status(400).json({
        success: false,
        error: 'invalid_phone',
        message: 'Invalid phone number provided',
        responseText: resultText
      });
    } else if (resultText.includes('Disqualified')) {
      return res.status(400).json({
        success: false,
        error: 'disqualified',
        message: 'Lead disqualified based on provided information',
        responseText: resultText
      });
    } else {
      return res.status(400).json({
        success: false,
        error: 'rejected',
        message: 'Lead rejected',
        responseText: resultText
      });
    }
  } catch (error) {
    console.error('Error processing fire claim submission:', error);
    return res.status(500).json({ 
      success: false, 
      error: 'server_error',
      message: 'Failed to process submission',
      details: error.message 
    });
  }
});

module.exports = router; 