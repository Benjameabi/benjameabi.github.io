const yargs = require('yargs');
const {
    listCommand,
    addCommand,
    updateCommand,
    deleteCommand,
    endCommand
} = require('./commands');

// Add commands to yargs
yargs.command(listCommand);
yargs.command(addCommand);
yargs.command(updateCommand);
yargs.command(deleteCommand);
yargs.command(endCommand);

// Parse arguments
yargs.parse();

