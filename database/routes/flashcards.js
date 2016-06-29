var Question = require('../models/question');

module.exports = (app) => {

  app.get('/flashcards/:id?', (req, res) => { // get the first 2 questions.
    if (req.params.id) {
      Question.find({question_pos: req.params.id}, function(err, question) {
        res.json(question);
      })
    }
    else {
      Question.find().sort([['question_pos', 'ascending']]).limit(1).exec(function(err, question) {
        if (err) console.log(err);
        res.json(question);
      });
    }
  });

  //app.post('/flashcards/next', (req, res) => { // subsequent for next questions.
  //   var right = [], wrong = []; // buckets for sorting
  //   var promise = new Promise(
  //     function(resolve, reject) {
  //       req.body.questions.forEach(question => {
  //         if (question.correct && question.memorization < 3) { // if the user got it right, but less than 3 times in a row (if it's more than 3, then it can be forgotten about)
  //           question.correct = false;                          // reset correct param.
  //           question.memorization += 1;                        // increase the memorization,
  //           right.push(question);                              // push to correct bucket
  //         }
  //         else if (!question.correct) {   // if user got question wrong...
  //           question.memorization = 0;    // reset memorization to 0 😠
  //           wrong.push(question);         // push to wrong bucket.
  //         }
  //       });
  //       resolve();
  //     }
  //   ).then(() => {
  //     Question.findOne({question_pos: req.body.top}, function(err, newQ) { // grab next question
  //       if (err) console.log(err);
  //       if (newQ) wrong.push(newQ);       // if it exists, push to the end of the wrong bucket
  //       let result = wrong.concat(right); // stick the questions user got correct to the backend of the wrong ones,
  //       res.json({
  //         questions: result,
  //         top: req.body.top + 1 // increase pointer for next round.
  //       });
  //     });
  //   })
  // });

}
