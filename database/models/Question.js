var mongoose = require('mongoose');

var questionSchema = new mongoose.Schema({
    question_pos: {
        type: Number,
        unique: true
    },
    german: String,
    english: String,
    definition: String,
    correct: {
        type: Boolean,
        default: false
    }
});

var Question = mongoose.model('Question', questionSchema);

exports.Question = Question;
