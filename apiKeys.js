const express = require('express');
const router = express.Router();

let apiKeys = ["3", "5", "11"];

router.get('/', (req, res) => {
  res.json(apiKeys); 
});

router.post('/', (req, res) => {
  const newApiKey = req.body.apiKey;
  apiKeys.push(newApiKey);
  res.status(201).json({ message: 'API key added successfully' });
});

module.exports = router;
