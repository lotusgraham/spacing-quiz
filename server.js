require('./database/db/connect');
// require('dotenv').config();

var express = require('express'),
    mongoose = require('mongoose'),
    app = express(),
    path = require('path'),
    passport = require('passport'),
    Progress = require('./database/models/progress'),
    bodyParser = require('body-parser'),
    index = path.join(__dirname, 'build/index.html');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'build/')));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(passport.initialize());

require('./database/routes/flashcards')(app);
require('./database/routes/userAuth')(app, passport);

app.get('/getInfo', function(req, res) {
    Progress.find({}).populate('user').populate('scores.question').exec((err, info) => {
      res.json(info);
    });
});

app.get('/*', function(req, res) {
  res.sendFile(index);
}) // return index page on all unhandled routes

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), function() {
    console.log("Listeing on Port " + app.get('port'));
});
