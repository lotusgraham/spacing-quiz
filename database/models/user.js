var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  googleID: { type: String, index: true },
  fullName: String,
  firstName: String,
  avatar: String,
  score: { type: Number, default: 0 }
});

var User = mongoose.model('User', userSchema);

module.exports = User;
