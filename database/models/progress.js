var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var progressSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  scores: [
    {
      question: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question'
      },
      mem_score: {
        type: Number,
        default: 0
      }
    }
  ]
});

var Progress = mongoose.model('Progress', progressSchema);

module.exports = Progress;
