var mongoose = require('mongoose');
var env = require('./environment');
var config = require('./config');

console.log('Connected on ', config.config[env].url);

mongoose.connect(config.config[env].url);
