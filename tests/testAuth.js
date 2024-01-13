const { createOAuthClient, generateAuthUrl } = require('../src/auth/auth');

const oauth2Client = createOAuthClient();
const url = generateAuthUrl(oauth2Client);

console.log('Visit the following URL to authenticate:', url);
// Instruct the user to visit the URL and get the code, then run another script to use the code to get the token.
