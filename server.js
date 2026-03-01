const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

// Enable CORS so your static site can call this API
app.use(cors());

// Simple API to roll dice
// Example: GET /roll?dice=1d6
app.get('/roll', (req, res) => {
    // For now, only handle 1d6
    const roll = Math.floor(Math.random() * 6) + 1;
    res.json({ result: roll });
});

// Start server
app.listen(port, () => {
    console.log(`Dice roller server running on port ${port}`);
});