const { google } = require('googleapis');
const base64url = require('base64url');

/**
 * Create a Gmail API client.
 */
function getGmailClient(auth) {
    return google.gmail({ version: 'v1', auth });
}

/**
 * List recent unread emails.
 */
async function listUnreadEmails(auth) {
    const gmail = getGmailClient(auth);
    const res = await gmail.users.messages.list({
        userId: 'me',
        labelIds: ['INBOX', 'UNREAD'],
        maxResults: 10,
    });
    return res.data.messages;
}

/**
 * Get the details of a specific email.
 */
async function getEmail(auth, messageId) {
    const gmail = getGmailClient(auth);
    const res = await gmail.users.messages.get({
        userId: 'me',
        id: messageId,
    });
    return res.data;
}

/**
 * Send an email reply.
 */
async function sendEmail(auth, to, subject, messageText, threadId) {
    const gmail = getGmailClient(auth);
    const rawMessage = createRawMessage(to, subject, messageText, threadId);

    await gmail.users.messages.send({
        userId: 'me',
        requestBody: {
            raw: rawMessage,
        },
    });
}

/**
 * Create a raw MIME message.
 */
function createRawMessage(to, subject, messageText, threadId) {
    const messageParts = [
        `From: "Me" <abhigenrex@gmail.com>`, // Replace with your email
        `To: ${to}`,
        'Content-Type: text/plain; charset="UTF-8"',
        'MIME-Version: 1.0',
        `Subject: ${subject}`,
        '',
        messageText,
    ];
    const message = messageParts.join('\n');
    return base64url.fromBase64(Buffer.from(message).toString('base64'));
}

/**
 * Generates the auto-reply message text.
 */
function getAutoReplyMessage() {
    return `
        Hello,

        Thank you for your email. I am currently out of the office with limited access to email. I will return on [Your Return Date].

        If this matter is urgent, please contact [Alternate Contact Name] at [Alternate Contact Email] for immediate assistance.

        Best regards,
        Abhinaw
    `;
}

module.exports = {
    listUnreadEmails,
    getEmail,
    sendEmail,
    getAutoReplyMessage,
};
