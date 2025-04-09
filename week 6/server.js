const express = require('express');
const mongoose = require('mongoose');
const formRoutes = require('./route/formRoute'); // Corrected path for formRoute

// Initialize the Express app
const app = express();

// Middleware to parse JSON data
app.use(express.json());

// MongoDB Atlas connection string
const mongoDB_URI = 'mongodb+srv://akindadatolu:sutxL46GArZfpzrm@sit725-wks4.fhqunqp.mongodb.net/';

// Connect to MongoDB Atlas
mongoose.connect(mongoDB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  ssl: true, // Enforce SSL/TLS connection
  tls: true, // Ensure TLS
  tlsAllowInvalidCertificates: true, // Allow invalid certificates (for development only)
}).then(() => {
  console.log("MongoDB connected successfully");
}).catch((err) => {
  console.error("Error connecting to MongoDB:", err);
});

// Set up the routes (use the correct routes from formRoute.js)
app.use('/api', formRoutes); // This is where form routes are prefixed with `/api`

// Basic route to check if the server is running
app.get('/', (req, res) => {
  res.send('Welcome to the API! You can visit /api for available routes.');
});

// Add two numbers route
app.get('/addTwoNumbers/:firstNumber/:secondNumber', function(req, res, next) {
  var firstNumber = parseInt(req.params.firstNumber);
  var secondNumber = parseInt(req.params.secondNumber);
  var result = firstNumber + secondNumber;

  if (isNaN(result)) {
    res.status(400).json({ result: null, statusCode: 400 });
  } else {
    res.status(200).json({ result: result, statusCode: 200 });
  }
});

// Start the server on port 8000
const port = 8000;
app.listen(port, () => {
  console.log(`App listening on port: ${port}`);
});
