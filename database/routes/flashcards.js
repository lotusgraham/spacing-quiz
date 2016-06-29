var Question = require('../models/question');

module.exports = (app) => {
  app.get('/flashcards', (req, res) => {
    Question.find().sort([['question_pos', 'ascending']]).limit(2).exec(function(err, questions) {
      if (err) console.log(err);
      res.json(questions);
    });
  });

  app.post('/flashcards/next', (req, res) => {
    var top = 0, right = [], wrong = [];
    var promise = new Promise(
      function(resolve, reject) {
        req.body.forEach(question => {
          if (question.question_pos > top) {
            top = question.question_pos;
          }
          if (question.correct && question.memorization < 3) {
            question.correct = false;
            question.memorization += 1;
            right.push(question);
          }
          else if (!question.correct) {
            question.memorization = 0;
            wrong.push(question);
          }
        });
        resolve();
      }
    ).then(() => {
      Question.findOne({question_pos: top + 1}, function(err, newQ) {
        if (err) console.log(err);
        wrong.push(newQ);
        let result = wrong.concat(right);
        res.json(result);
      });
    })
  });
}
