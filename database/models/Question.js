var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var questionSchema = new Schema({
  german: String,
  english: String,
  definition: String,
  image: String
});

var Question = mongoose.model('Question', questionSchema);

module.exports = Question;
