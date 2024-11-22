// Import necessary modules
import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';

// Initialize express app
const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// Define a route to serve the HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`MigSpace server is running at http://localhost:${port}`);
});