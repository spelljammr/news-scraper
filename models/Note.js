var mongoose = require('mongoose');

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Create note schema model. Create object with title and body.
var NoteSchema = new Schema({
    title: String,
    body: String
});

// Create model in mongoose method
var Note = mongoose.model('Note', NoteSchema);

// Export the Note model to be used elsewhere.
module.exports = Note;