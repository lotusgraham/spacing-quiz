var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var questionSchema = new Schema({
  question_pos: Number,
  german: String,
  english: String,
  definition: String,
  correct: {Boolean, default: false}
});

var Question = mongoose.model('Question', questionSchema);

module.exports = Question;
