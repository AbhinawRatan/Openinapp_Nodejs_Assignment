const { google } = require('googleapis');
const OAuth2 = google.auth.OAuth2;

const CLIENT_ID = "318629277395-q7rrh0e3755cv38chjgp0ock83sjd6vp.apps.googleusercontent.com";
const CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
const REDIRECT_URI = 'http://localhost:3000'; // Set this to the redirect URI in Google Cloud Console
const SCOPES = ['https://www.googleapis.com/auth/gmail.modify']; // Scope for reading, sending, deleting, and managing emails

/**
 * Create a new OAuth2 client with the provided credentials
 */
const createOAuthClient = () => {
    return new OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
};

/**
 * Generate a URL for users to authorize the application
 */
const generateAuthUrl = (oauth2Client) => {
    const authUrl = oauth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: SCOPES,
    });
    console.log('Authorize this app by visiting this url:', authUrl);
    return authUrl;
};

/**
 * Exchange the code received from Google after user consent for an access token
 */
const getAccessToken = async (oauth2Client, code) => {
    const { tokens } = await oauth2Client.getToken(code);
    oauth2Client.setCredentials(tokens);
    console.log('Access Token:', tokens.access_token);
    return tokens;
};

module.exports = {
    createOAuthClient,
    generateAuthUrl,
    getAccessToken,
};
