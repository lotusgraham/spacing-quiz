var Progress = require('../models/progress');

module.exports = (app) => {

  app.get('/flashcards/:id', (req, res) => {
    Progress.find({'user': req.params.id}).populate('scores.question').exec((err, q) => {
      q = q[0].scores.sort((a, b) => {
        if (a.mem_score > b.mem_score) {
          return 1;
        }
        if (a.mem_score < b.mem_score) {
          return -1;
        }
        return 0;
      });
      res.json({
        german: q[0].question.german,
        definition: q[0].question.definition,
        image: q[0].question.image
      });
    });
  });

  app.post('/flashcards/check/:id', (req, res) => {
    Progress.findOne({'user': req.params.id}).populate('scores.question').exec((err, x) => {
      x.scores.forEach(q => {
        // console.log(q.question.english);
        if (q.question.german === req.body.german) {
          if (q.question.english === req.body.english) {
            q.mem_score += 1
            x.save();
            res.send(true);
          }
          else {
            q.mem_score -= 1
            x.save();
            res.send(false);
          }
        }
      })
    })
  })

  //  The old and over complicated Al.....
  // app.post('/flashcards/next', (req, res) => { // subsequent for next questions.
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
