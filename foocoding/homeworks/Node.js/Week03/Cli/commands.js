const { makeRequest } = require('./api');

const baseUrl = 'http://localhost:3000/api/todos';

const listCommand = {
    command: 'list',
    describe: 'List all Todos',
    handler: async () => {
        try {
            console.log('Making request to:', baseUrl);
            const todos = await makeRequest('GET', baseUrl);
            console.log('Received Todos:', todos);
            if (todos) {
                todos.forEach(todo => {
                    console.log(`${todo.id}: ${todo.title} - Completed: ${todo.completed}`);
                });
            } else {
                console.log('No Todos found.');
            }
        } catch (error) {
            console.error('Error:', error.message);
        }
    }
};


const addCommand = {
    command: 'add',
    describe: 'Add a new Todo',
    handler: async () => {
        const inquirer = await import('inquirer').then(mod => mod.default);

        const { title } = await inquirer.prompt([
            {
                type: 'input',
                name: 'title',
                message: 'Enter the title of the Todo:',
                validate: input => input.trim() !== '' ? true : 'Title cannot be empty'
            }
        ]);
        const newTodo = await makeRequest('POST', baseUrl, { title, completed: false });
        if (newTodo) {
            console.log('Todo added successfully:', newTodo);
        }
    }
};

const updateCommand = {
    command: 'update <id>',
    describe: 'Update a Todo',
    builder: {
        todo: {
            describe: 'New Todo text',
            type: 'string'
        }
    },
    handler: async (argv) => {
        const inquirer = await import('inquirer').then(mod => mod.default);

        const { todo } = await inquirer.prompt([
            {
                type: 'input',
                name: 'todo',
                message: 'Enter the new text for the Todo:',
                validate: input => input.trim() !== '' ? true : 'Todo text cannot be empty'
            }
        ]);
        const updatedTodo = await makeRequest('PUT', `${baseUrl}/${argv.id}`, { title: todo });
        if (updatedTodo) {
            console.log('Todo updated successfully:', updatedTodo);
        }
    }
};

const deleteCommand = {
    command: 'delete <id>',
    describe: 'Delete a Todo',
    handler: async (argv) => {
        const inquirer = await import('inquirer').then(mod => mod.default);

        const confirmation = await inquirer.prompt([
            {
                type: 'confirm',
                name: 'confirm',
                message: 'Are you sure you want to delete this Todo?'
            }
        ]);
        if (confirmation.confirm) {
            const deletedTodo = await makeRequest('DELETE', `${baseUrl}/${argv.id}`);
            if (deletedTodo) {
                console.log('Todo deleted successfully');
            }
        } else {
            console.log('Deletion aborted');
        }
    }
};

const endCommand = {
    command: 'end',
    describe: 'Exit the CLI application',
    handler: () => {
        console.log('Exiting CLI application');
        process.exit(0);
    }
};

module.exports = { listCommand, addCommand, updateCommand, deleteCommand, endCommand };
