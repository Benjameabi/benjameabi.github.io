const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const path = require('path');

// Path to the data file
const dataFilePath = path.join(__dirname, '..', '..', 'data', 'todos.json');

// Read data from the file
const getData = () => {
    return new Promise((resolve, reject) => {
        fs.readFile(dataFilePath, 'utf8', (err, data) => {
            if (err) {
                console.error('Error reading data from file:', err);
                reject(err);
                return;
            }
            try {
                resolve(JSON.parse(data));
            } catch (parseError) {
                console.error('Error parsing JSON data:', parseError);
                reject(parseError);
            }
        });
    });
};

// Write data to the file
const writeData = (data) => {
    fs.writeFile(dataFilePath, JSON.stringify(data, null, 2), 'utf8', (err) => {
        if (err) {
            console.error('Error writing data to file:', err);
        }
    });
};

exports.getAllTodos = async (req, res) => {
    try {
        const todos = await getData();
        console.log('Retrieved todos:', todos); // Add this line for logging
        res.json(todos);
    } catch (error) {
        console.error('Error retrieving todos:', error); // Add this line for error logging
        res.status(500).json({ error: 'Failed to retrieve todos' });
    }
};

exports.getTodoById = (req, res) => {
    const todos = getData();
    const { id } = req.params;
    const todo = todos.find(todo => todo.id === id);
    if (!todo) {
        return res.status(404).json({ error: 'Todo not found' });
    }
    res.json(todo);
};

exports.createTodo = async (req, res) => {
    try {
        const todos = await getData();
        const { title, completed } = req.body;
        const todo = {
            id: uuidv4(), // Using UUID for ID
            title,
            completed
        };
        todos.push(todo);
        writeData(todos);
        res.status(201).json(todo);
    } catch (error) {
        console.error('Error creating todo:', error);
        res.status(500).json({ error: 'Failed to create todo' });
    }
};

exports.updateTodo = (req, res) => {
    const todos = getData();
    const { id } = req.params;
    const { title, completed } = req.body;
    const todoIndex = todos.findIndex(todo => todo.id === id);
    if (todoIndex === -1) {
        return res.status(404).json({ error: 'Todo not found' });
    }
    todos[todoIndex] = {
        ...todos[todoIndex],
        title: title || todos[todoIndex].title,
        completed: completed !== undefined ? completed : todos[todoIndex].completed
    };
    writeData(todos);
    res.json(todos[todoIndex]);
};

exports.deleteTodo = (req, res) => {
    const todos = getData();
    const { id } = req.params;
    const todoIndex = todos.findIndex(todo => todo.id === id);
    if (todoIndex === -1) {
        return res.status(404).json({ error: 'Todo not found' });
    }
    const deletedTodo = todos.splice(todoIndex, 1);
    writeData(todos);
    res.json({ message: `Todo with ID ${id} has been deleted` });
};


