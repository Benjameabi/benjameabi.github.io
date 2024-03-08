const axios = require('axios');

const baseUrl = 'http://localhost:3000/api/todos'; 

// Function to handle API requests
const makeRequest = async (method, url, data = null) => {
    try {
        const response = await axios({ method, url, data });
        console.log('Received response:', response.data); // Log the response data
        return response.data;
    } catch (error) {
        if (error.response) {
            console.error('Error:', error.response.data.error);
        } else {
            console.error('Error:', error.message);
        }
        return null;
    }
};



module.exports = { makeRequest };
