const express = require('express');
const open = require('open');
const { google } = require('googleapis');
const scheduler = require('./src/utils/scheduler');
const { createOAuthClient, generateAuthUrl, getAccessToken } = require('./src/auth/auth');
const config = require('./src/config/config');

const app = express();
const port = 3000; // The default port for the application, can be configured as needed

// Initialize the OAuth2 client
const oAuth2Client = createOAuthClient();

// Redirect URI for OAuth2
app.get('/oauth2callback', async (req, res) => {
    const { code } = req.query;

    if (code) {
        try {
            // Exchange code for tokens
            const tokens = await getAccessToken(oAuth2Client, code);
            oAuth2Client.setCredentials(tokens);

            // Store the tokens securely
            // TODO: Implement a secure way to store and retrieve tokens

            // Start the scheduler to check emails
            scheduler.start();

            res.send('Authentication successful! You can now close this tab.');
        } catch (error) {
            console.error('Error retrieving access token', error);
            res.status(500).send('Authentication failed');
        }
    } else {
        res.status(400).send('Invalid request');
    }
});

app.get('/start', (req, res) => {
    // Generate an authentication URL and redirect the user to it
    const authUrl = generateAuthUrl(oAuth2Client);
    open(authUrl);
    res.send('Please authorize the application.');
});

// Endpoint to stop the email scheduler
app.get('/stop', (req, res) => {
    scheduler.stop();
    res.send('Scheduler stopped.');
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
    console.log('Visit http://localhost:3000/start to authenticate and start the email scheduler.');
});

module.exports = app;
