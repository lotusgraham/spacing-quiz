var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var progressSchema = new Schema({
  googleID: { type: String, index: true },
  progress: [ // new progress obj per day
    {
      date: { type: Date, default: Date.now },
      scores: [ // start empty?????
        {
          questions_id: Schema.Types.ObjectId,
          times_answered: Number
        }
      ]
    }
  ]
});

/*
{
  id:
  allScores: [{date, [scores]}, {date, [scores]}]
}
*/
