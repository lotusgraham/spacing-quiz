var Progress = require('../models/progress');

module.exports = (app) => {

  app.get('/flashcards/:id', (req, res) => {
    // if match
    Progress.find({'user': req.params.id}).populate('scores.question').exec((err, q) => {
      q = q[0].scores.sort((a, b) => {
        return a.mem_score - b.mem_score;
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
        // TODO: Make this better!!!!!!
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
}
