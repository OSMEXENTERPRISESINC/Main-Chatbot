const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3000;

// XAI API Configuration
const XAI_API_KEY = 'xai-XhVtDqnHob0FWaqL4VDk6VXtsu4pbvAjo4PMUHEW6C89K8wi5nCy6hIcpbYeSgX76lvhOXnrr8wFH80A';
const XAI_API_URL = 'https://api.x.ai/v1/chat/completions';

// Middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.post('/chat', async (req, res) => {
  if (!req.body.message) {
    return res.status(400).json({ error: 'Message is required' });
  }

  try {
    console.log('Processing chat request:', req.body.message);
    
    const response = await axios.post(
      XAI_API_URL,
      {
        messages: [
          {
            role: "system",
            content: "You are a helpful assistant."
          },
          {
            role: "user",
            content: req.body.message
          }
        ],
        model: "grok-3-latest",
        stream: false,
        temperature: 0
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${XAI_API_KEY}`
        }
      }
    );

    console.log('Chat response received');
    res.json(response.data);
  } catch (error) {
    console.error('Error details:', {
      message: error.message,
      response: error.response?.data,
      status: error.response?.status
    });
    
    res.status(error.response?.status || 500).json({ 
      error: 'Failed to process request',
      details: error.response?.data || error.message
    });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ error: 'Internal server error' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
  console.log('XAI API Key configured and ready');
}); 