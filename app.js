// const fs = require('fs');
const chalklib = require('chalk');
const getNotes = require('./notes.js');
const yargs = require('yargs');

const myFunction = getNotes();
console.log(myFunction);
const mymessage = chalklib.red.underline.inverse('You win!');
console.log(mymessage);

// Create add command
yargs.command({
    command: 'add',
    describe: 'Adds a new note',
    handler: function () {
        console.log('Adding note');
    }
})

// Creates remove command

yargs.command({
    command: 'remove',
    describe: 'Removes a note',
    handler: function () {
        console.log('Removing note');
    }
})

// Creates listing command

yargs.command({
    command: 'list',
    describe: 'Creates notes list',
    handler: function () {
        console.log('Listing notes');
    }
})

// Creates reading command

yargs.command({
    command: 'read',
    describe: 'Reads notes',
    handler: function () {
        console.log('Reading note');
    }
})


console.log(yargs.argv);


// fs.writeFileSync('mynotes.txt', 'Step two');
// fs.appendFileSync('mynotes.txt', 'Step one and two');