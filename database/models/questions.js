var mongoose = require('mongoose');

var questionSchema = new Schema({
  question_pos: {Number, unique: true},
  german: String,
  english: String,
  definition: String,
  correct: {Boolean, default: false}
});

var Question = mongoose.model('Question', questionSchema);

exports.Question = Question;
