var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Create a new userschema object
var ArticleSchema = new Schema({
    // Require a title to save with article
    title: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },

    //  Object used to gather note id.
    note: {
        type: Schema.Types.ObjectId,
        ref: "Note"
    }
});

// Create model using Mongoose's method.
var Article = mongoose.model("Article", ArticleSchema);

// Export the Article model to be used elsewhere.
module.exports = Article;