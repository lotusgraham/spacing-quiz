require('./database/db/connect');
require('dotenv').config();

var express = require('express'),
    mongoose = require('mongoose'),
    app = express(),
    path = require('path'),
    Question = require('./database/models/Question').Question,
    passport = require('passport'),
    User = require('./database/models/user');

app.use(express.static(path.join(__dirname, 'build/')));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(passport.initialize())

app.get('/', function(req, res) {
    res.sendFile(indexRoute);
})
app.get('/questions/', function(req, res) {
     Question.find({}, function(err, questions) {
         res.json(questions);
     });
});

app.get('/questions/:question_pos', function(req, res) {
    var params = {'question_pos': req.params.question_pos};
    Question.findOne(params, function(err, question) {
        res.send(question)
    });
});

require('./database/routes/userAuth')(app, passport);

app.get('/users', function(req, res) {
    User.find({}, function(err, user) {
        res.json(user);
    })
})

app.set('port', process.env.NODE_PORT || 3000);

app.listen(app.get('port'), function() {
    console.log("Listeing on Port " + app.get('port'));
});
