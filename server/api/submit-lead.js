const AWS = require('aws-sdk');

// Configure AWS SDK
AWS.config.update({
  region: 'us-east-1',
  // In production, use IAM roles or environment variables for credentials
  // For local development, you might need to provide credentials here
});

// Create DynamoDB document client
const dynamoDB = new AWS.DynamoDB.DocumentClient();

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const data = req.body;
    
    // Ensure lead_id is present
    if (!data.lead_id) {
      return res.status(400).json({ error: 'Missing lead_id' });
    }

    // Prepare the item for DynamoDB
    const params = {
      TableName: 'rideshare-mva',
      Item: data
    };

    // Put the item in DynamoDB
    await dynamoDB.put(params).promise();

    // Return success response
    return res.status(200).json({ 
      success: true, 
      lead_id: data.lead_id,
      message: 'Lead data successfully stored in DynamoDB'
    });
  } catch (error) {
    console.error('Error storing data in DynamoDB:', error);
    return res.status(500).json({ 
      error: 'Failed to store data in DynamoDB',
      details: error.message 
    });
  }
}; 