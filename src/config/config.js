require('dotenv').config();

const config = {
    googleClientId: process.env.CLIENT_ID,
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
    googleRedirectUri: process.env.GOOGLE_REDIRECT_URI,
    googleScopes: ['https://www.googleapis.com/auth/gmail.modify'],
    emailFrom: process.env.EMAIL_FROM, // Your email address
};

module.exports = config;
