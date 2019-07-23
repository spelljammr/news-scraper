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

app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));