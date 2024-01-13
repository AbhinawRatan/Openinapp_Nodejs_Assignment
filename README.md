<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
    <h1>Node.js Email Automation Project</h1>
    
  <p>This Node.js application automates responding to emails via Gmail. It's designed for users who need to manage incoming emails during their absence, such as during vacation periods.</p>
    
  <h2>Table of Contents</h2>
    <ul>
        <li><a href="#background">Background</a></li>
        <li><a href="#setup">Setup and Installation</a></li>
        <li><a href="#usage">Usage</a></li>
        <li><a href="#configuration">Configuration</a></li>
        <li><a href="#faq">FAQ</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#license">License</a></li>
    </ul>

  <h2 id="background">Background</h2>
  <p>The project uses Node.js and the Gmail API to check for new emails
  <h2 id="setup">Setup and Installation</h2>
<p>Setting up this application involves several steps:</p>
<ol>
    <li>Clone the repository: <code>git clone https://github.com/your-username/your-repo-name.git</code></li>
    <li>Navigate to the project directory: <code>cd your-repo-name</code></li>
    <li>Install dependencies: <code>npm install</code></li>
    <li>Create a <code>.env</code> file in the root directory with the following content:</li>
    <ul>
        <li><code>GOOGLE_CLIENT_ID=your_google_client_id</code></li>
        <li><code>GOOGLE_CLIENT_SECRET=your_google_client_secret</code></li>
        <li><code>GOOGLE_REDIRECT_URI=your_redirect_uri</code></li>
    </ul>
    <li>Configure the Google Cloud Console with the same redirect URI and obtain your client ID and secret.</li>
    <li>Start the server: <code>npm start</code></li>
</ol>

<h2 id="usage">Usage</h2>
<p>The application can be used as follows:</p>
<ol>
    <li>Start the application: <code>npm start</code>.</li>
    <li>Authenticate with Google by visiting: <code>http://localhost:3000/start</code></li>
    <li>Once authenticated, the application will begin monitoring your Gmail account for new emails.</li>
    <li>To stop the application, visit: <code>http://localhost:3000/stop</code></li>
</ol>

<h2 id="configuration">Configuration</h2>
<p>You can configure the auto-reply message and other settings in the respective modules of the application. Please refer to the module documentation for more details.</p>

<h2 id="faq">FAQ</h2>
<dl>
    <dt>How does the application determine which emails to respond to?</dt>
    <dd>The application checks for unread emails in the inbox and sends responses to those without prior replies.</dd>
    <dt>Can I customize the auto-reply message?</dt>
    <dd>Yes, you can customize the message in the <code>emailHandler.js</code> module.</dd>
    <dt>Is it secure to use this application?</dt>
    <dd>Yes, the application uses OAuth for authentication and does not store your Gmail credentials.</dd>
</dl>


