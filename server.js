require('./database/db/connect');
// require('dotenv').config();

var express = require('express'),
    mongoose = require('mongoose'),
    app = express(),
    path = require('path'),
    // passport = require('passport'),
    Progress = require('./database/models/progress'),
    bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname, 'build/')));

// var index = path.join(__dirname, 'test-index.html');

// app.get('/', function(req, res) {
//   res.sendFile(index);
// })

app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// app.use(passport.initialize());

require('./database/routes/flashcards')(app);
// require('./database/routes/userAuth')(app, passport);

app.get('/dummy', function(req,res){
    var dummydata = {
      "english": "Horsey",
      "definition": "A quadripedal animal which may or may not kick you to death.",
      "image": "http://buzzsharer.com/wp-content/uploads/2015/06/beautiful-running-horse.jpg"
  };
  res.json(dummydata);
});

app.get('/getInfo', function(req, res) {
    Progress.find({}).populate('user').populate('scores.question').exec((err, info) => {
      res.json(info);
    });
});

app.set('port', process.env.NODE_PORT || 3000);

app.listen(app.get('port'), function() {
    console.log("Listeing on Port " + app.get('port'));
});
