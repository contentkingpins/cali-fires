const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const AWS = require('aws-sdk');
const { v4: uuidv4 } = require('uuid');
const fireClaimRoutes = require('./api/fire-claim');

// Configure AWS SDK
AWS.config.update({
  region: 'us-east-1',
  // For local development, you can use environment variables or a local credentials file
  // In production, use IAM roles
});

// Create DynamoDB document client
const dynamoDB = new AWS.DynamoDB.DocumentClient();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// API endpoint to submit lead data to DynamoDB
app.post('/api/submit-lead', async (req, res) => {
  try {
    const data = req.body;
    
    // Ensure lead_id is present
    if (!data.lead_id) {
      data.lead_id = uuidv4();
    }

    console.log('Submitting lead data to DynamoDB:', data);

    // In development mode, we can just log the data instead of actually submitting to DynamoDB
    if (process.env.NODE_ENV === 'production') {
      // Prepare the item for DynamoDB
      const params = {
        TableName: 'rideshare-mva',
        Item: data
      };

      // Put the item in DynamoDB
      await dynamoDB.put(params).promise();
    } else {
      console.log('Development mode: Skipping actual DynamoDB submission');
    }

    // Return success response
    return res.status(200).json({ 
      success: true, 
      lead_id: data.lead_id,
      message: 'Lead data successfully processed'
    });
  } catch (error) {
    console.error('Error processing lead data:', error);
    return res.status(500).json({ 
      error: 'Failed to process lead data',
      details: error.message 
    });
  }
});

// Use fire claim routes
app.use('/api', fireClaimRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
