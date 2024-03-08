const express = require('express');
const routes = require('./source/routes.js');
const validationMiddleware = require('./source/middleware/validation.js'); 

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Routes with request body validation using Joi middleware
app.use('/api', validationMiddleware, routes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});