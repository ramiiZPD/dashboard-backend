// NodeJS Libraries
var express = require('express');
    bodyParser = require('body-parser');
    cors = require('cors'),
    mongoose = require('mongoose');

// Connect to the mongodb server
mongoose.connect('mongodb://localhost/dashboard');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Database Connected");
});

// Uses following custom libraries
var config = require('./config');

// Initializing ExpressJS
var app = express();

// Central Router
app.use(cors());
var controller_index = require('./controllers/index.js');

// Central router
app.use(bodyParser.json());
app.use('/api', controller_index);

// Server Startup
app.listen(config.server.port, function(error) {
    if (error) {
        console.log("Error");
    }
    console.log("API is Running on http:://localhost/8080");
});

module.exports = app;
