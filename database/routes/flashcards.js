var Question = require('../models/question');

module.exports = (app) => {
  let limit = 2;

  app.get('/flashcards', (req, res) => {
    Question.find().sort([['question_pos', 'ascending']]).limit(limit).exec(function(err, questions) {
      if (err) console.log(err);
      res.json({
        questions: questions,
        top: limit + 1
      });
    });
  });

  app.post('/flashcards/next', (req, res) => {
    var right = [], wrong = [];
    var promise = new Promise(
      function(resolve, reject) {
        req.body.questions.forEach(question => {
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
      Question.findOne({question_pos: req.body.top}, function(err, newQ) {
        if (err) console.log(err);
        if (newQ) wrong.push(newQ);
        let result = wrong.concat(right);
        res.json({
          questions: result,
          top: req.body.top + 1
        });
      });
    })
  });
}
