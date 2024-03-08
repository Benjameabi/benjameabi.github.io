const fs = require('fs');
const axios = require('axios');

// Function to get data for the 'list' command
const getListData = async () => {
    try {
        const response = await axios.get('http://localhost:3000/api/todos');
        return response.data;
    } catch (error) {
        console.error('Error fetching Todos:', error.message);
        return null;
    }
};

// Function to get data for the 'add' command
const getAddData = (todo) => {
    const newData = {
        title: todo,
        completed: false // 
    };

    return newData;
};

// Function to get data for the 'update' command
const getUpdateData = (id, todo) => {
    const updateData = {
        id: id, 
        title: todo 
    };
    return updateData;
};


// Function to get data for the 'delete' command
const getDeleteData = (id) => {
    return id;
};

// Function to write data to the file system
const writeData = (data) => {
    const jsonData = JSON.stringify(data);

    fs.writeFile('todos.json', jsonData, (err) => {
        if (err) {
            console.error('Error writing data to file:', err);
        } else {
            console.log('Data has been written to file successfully.');
        }
    });
};

module.exports = { getListData, getAddData, getUpdateData, getDeleteData, writeData };
