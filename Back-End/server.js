// server.js
const express = require('express');
const bodyParser = require('body-parser');
const { Permit } = require('permitio');  // Import Permit.io SDK

const app = express();
const port = 5000;

// Initialize the Permit.io SDK with the necessary credentials
const permit = new Permit({
  pdp: 'https://cloudpdp.api.permit.io',  // Your Permit.io PDP URL
  token: 'AxA6tQhO3bzDAuxdG0rrpeSDsKH9Y3Ha3Qrc0aq9BMTQHV4QANukVzBFdRPFmTXJfiLyS5YvVh0vrfP9aqYdvy',  // Your API key from Permit.io
});

app.use(bodyParser.json());

// Sample user (In a real app, this will come from your user session or JWT token)
const userId = 'user2345'; // Hardcoded for now, replace with actual user ID from session/JWT

// Endpoint to check if the user has permission to access a resource
app.post('/api/check-permission', async (req, res) => {
  const { resource } = req.body;  // resource can be 'admin-dashboard', 'student-dashboard', etc.

  try {
    // Check if the user has permission to access the given resource
    const permitted = await permit.check(userId, 'view', resource);

    // Send the response back to the client with the result
    if (permitted) {
      res.json({ permitted: true });
    } else {
      res.json({ permitted: false });
    }
  } catch (error) {
    console.error('Error checking permission:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
