const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files from the 'public' folder
app.use(express.static('public'));

// Simple API endpoint
app.get('/api', (req, res) => {
    res.send({ message: 'Hello, this is a simple API endpoint!' });
});

// GET API to add two numbers
app.get('/add', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).send({ error: 'Invalid numbers provided' });
    }

    const sum = num1 + num2;
    res.send({ num1, num2, sum });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
