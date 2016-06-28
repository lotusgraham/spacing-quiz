var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var questionSchema = new Schema({
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

module.exports = Question;
