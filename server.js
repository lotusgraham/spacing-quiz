require('./database/db/connect');
require('dotenv').config();

var express = require('express'),
    mongoose = require('mongoose'),
    app = express(),
    path = require('path'),
    passport = require('passport'),
    User = require('./database/models/user'),
    bodyParser = require('body-parser');

// app.use(express.static(path.join(__dirname, 'build/')));

var index = path.join(__dirname, 'test-index.html');

app.get('/', function(req, res) {
  res.sendFile(index);
})

app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(passport.initialize());

require('./database/routes/flashcards')(app);
require('./database/routes/userAuth')(app, passport);

app.get('/users', function(req, res) {
    User.find({}, function(err, user) {
        res.json(user);
    });
});

app.set('port', process.env.NODE_PORT || 3000);

app.listen(app.get('port'), function() {
    console.log("Listeing on Port " + app.get('port'));
});
