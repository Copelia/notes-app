// const fs = require('fs');
const chalklib = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');

// Customize yargs version
yargs.version('1.1.0')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Adds a new note',
    builder: {
      title: {
          describe: 'Note title',
          // Require argument or not, it's false for default
          demandOption: true,
          type: 'string'
      },
      body: {
          describe: 'Note content',
          demandOption: true,
          type: 'string'
      }
    },
    handler: function (argv) {
        notes.addNote(argv.title, argv.body)
    }
})

// Creates remove command

yargs.command({
    command: 'remove',
    describe: 'Removes a note',
    builder: {
      title: {
          describe: 'Note title',
          demandOption: true,
          type: 'string'
      }
    },
    handler: function (argv) {
        notes.removeNote(argv.title)
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


yargs.parse();
