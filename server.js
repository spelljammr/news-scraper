// Server, database, and scraping tools
const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');
const axios = require('axios');
const cheerio = require('cheerio');

// Model dependency
const db = require('./models');

// Port setup
const PORT = process.env.PORT || 3000;

// Init express
const app = express();

// Middleware configuration
app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Connect to MongoDB
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/mongoHeadlines';
mongoose.connect(MONGODB_URI);

// A GET route for scraping the news website.
app.get("/scrape", function(req, res) {
    // First, we grab the body of the html with axios
    axios.get('https://www.reddit.com/').then(function(response) {
        // Then, we load that into cheerio and save it to $ for a shorthand selector
        var $ = cheerio.load(response.data);
        console.log(response.data);
        // Now, we grab every h2 within an article tag, and do the following:
        $('article h2').each(function(i, element) {
            // Save an empty result object
            var result = {};
            // Add the text and href of every link, and save them as properties of the result object
            result.title = $(this)
                .children('a')
                .text();
            result.link = $(this)
                .children('a')
                .attr('href');
            // Create a new Article using the `result` object built from scraping
            db.Article.create(result)
                .then(function(dbArticle) {
                    // View the added result in the console
                    console.log(dbArticle);
                })
                .catch(function(err) {
                    // Log any errors
                    console.log(err);
                });
        });

        // Send a message to the client
        res.send('Scrape Finished');
    });
});


// Route for getting all Articles from the db
app.get('/articles', function(req, res) {
    // Grab every document in the Articles collection
    db.Article.find()
        .then(function(dbArticle) {
            // If we were able to successfully find Articles, send them back to the client
            res.json(dbArticle);
        })
        .catch(function(err) {
            // If an error occurred, send it to the client
            res.json(err);
        });
});
// Route for grabbing a specific Article by id, populate it with it's note
app.get('/articles/:id', function(req, res) {
    // Prepare a query to find article by id.
    db.Article.findOne({ _id: req.params.id })
        // Populate with related notes
        .populate('note')
        .then(function(dbArticle) {
            // Send back results of successful query to client
            res.json(dbArticle);
        })
        .catch(function(err) {
            // If an error occurred, send it to the client
            res.json(err);
        });
});
// POST route to save/update an articles note
app.post('/articles/:id', function(req, res) {
    // Create a new note
    db.Note.create(req.body)
        .then(function(dbNote) {
            return db.Article.findOneAndUpdate({ _id: req.params.id }, { note: dbNote._id }, { new: true });
        })
        .then(function(dbArticle) {
            // Send updated article back to client
            res.json(dbArticle);
        })
        .catch(function(err) {
            // Otherwise send the resulting error to the client
            res.json(err);
        });
});
// Start the server
app.listen(PORT, function() {
    console.log(`App running on port ${PORT}`);
});