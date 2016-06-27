var mongoose = require('mongoose');
var env = require('./environment');
var config = require('./config');

mongoose.connect(config[env].url);


mongoose.connection.on('error', function(err) {
    console.error('Could not connect.  Error:', err);
});

// mongoose.connection.once('open', function() {
//
// });
