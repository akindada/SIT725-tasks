// server.js

const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware: Serve static files from the "public" folder.
app.use(express.static(path.join(__dirname, 'public')));

// API Endpoint: Responds with a simple message.
app.get('/api/hello', (req, res) => {
  res.send('Hello from the server!');
});

// Optional: Explicitly handle the root URL to serve index.html
// This ensures that even if express.static doesn't resolve the file,
// the root route (/ ) explicitly sends the index.html.
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server and listen on the defined PORT.
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
