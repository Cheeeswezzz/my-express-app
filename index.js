const express = require('express');
const app = express();
const port = 3000;

// Serve static files from the 'public' folder
app.use(express.static('public'));

// Define a route for the home page
app.get('/about', (req, res) => {
  res.send('About Us');
});

// Middleware to parse JSON bodies
app.use(express.json()); 

// POST route to handle form submission
app.post('/submit', (req, res) => {
    const data = req.body;
    res.send(`Received: ${JSON.stringify(data)}`);
});

// Start the server
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

// Middleware for logging requests
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Route to fetch items
app.get('/items', (req, res) => {
    res.json(items);
});

const items = ['apple', 'Banana', 'Orange'];

// POST route to add items
app.post('/items', (req, res) => {
    const { item } = req.body;
    if (item) {
        items.push(item);
        res.json(items);   
    } else {
        res.status(400).send('Item is required');
    }
});
