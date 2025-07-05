require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3252;

app.get('/', (req, res) => {
  res.send('Welcome to the TikTok Automation App!');
});

app.get('/terms', (req, res) => {
  res.send(`
    <h1>Terms of Service</h1>
    <p>These are the terms of service for using our TikTok automation application. By using this service, you agree to comply with all TikTok policies and applicable laws.</p>
    <p>We do not guarantee uninterrupted service and reserve the right to revoke access at any time.</p>
    <p>Use at your own risk.</p>
  `);
});

app.get('/privacy', (req, res) => {
  res.send(`
    <h1>Privacy Policy</h1>
    <p>This application does not collect personal data from users.</p>
    <p>We only interact with TikTok APIs to provide automation functionality as authorized by the user.</p>
    <p>No data is stored, shared, or sold to third parties.</p>
  `);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
