var express = require('express'),
    app = express(),
    path = require('path');

var indexRoute = path.join(__dirname, 'build/index.html');

app.use(express.static(path.join(__dirname, 'build/')));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function(req, res) {
  res.sendFile(indexRoute);
});

app.set('port', process.env.NODE_PORT || 3000);

app.listen(app.get('port'),function() {
  console.log("Listeing on Port " + app.get('port'));
});
