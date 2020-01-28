const fs = require('fs');


const addNote = function (title, body) {
    const notes = loadNotes();
    const duplicateNotes = notes.filter(function(note){
        return note.title === title;
    });

    if(duplicateNotes.length === 0){   
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes);
        console.log('New note added');
    } else {
        console.log("Note title taken, try again plz")
    }

};

const removeNote = function (title) {
    const notes = loadNotes();

    const notesToKeep = notes.filter(function(note) {
       return note.title !== title 
    });

    saveNotes(notesToKeep);

}

// We stringify the object for a json file to be able to save it
const saveNotes = function (notes) {
    const JSONdata = JSON.stringify(notes);
    // Then we sabe it in the json file
    fs.writeFileSync('notes.json', JSONdata)
}

const loadNotes = function () {
    try{
        const data = fs.readFileSync('notes.json');
        const JSONdata = data.toString();
         return JSON.parse(JSONdata);

    } 
    // If there is no file yet, then return an array where you start to push an object
    catch (e){
        return [];

    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote

}