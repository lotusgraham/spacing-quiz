var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy,
    User = require('../models/user'),
    Question = require('../models/question'),
    Progress = require('../models/progress'),
    path = require('path'),
    BearerStrategy = require('passport-http-bearer');

let question_page = path.resolve('question-page.html');

module.exports = (app, passport) => {
  // Received a serialize error....solution found on stack overflow. Honestly, can't say i understand it...but it works.
  passport.serializeUser(function(user, done) {
      done(null, user);
  });

  passport.deserializeUser(function(user, done) {
      done(null, user);
  });
  // BearerStrategy for returning user details
  passport.use(new BearerStrategy(
    function(token, done) {
      User.findOne({ accessToken: token },
        function(err, user) {
          if(err) {
              return done(err)
          }
          if(!user) {
              return done(null, false)
          }
          return done(null, user, { scope: ['https://www.googleapis.com/auth/plus.login'] })
        }
      );
    }
  ))
  // Using Googles Oauth 2.0
  passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_SECRET,
        callbackURL: 'http://localhost:3000/login/return'
    },
    function(accessToken, refreshToken, profile, done) {
        User.findOneAndUpdate({ // If user doesn't exist, then create. Otherwise, do nothing.
            googleID: profile.id
        }, {
            fullName: profile.displayName,
            firstName: profile.name.givenName,
            avatar: profile.photos[0].value,
            accessToken: accessToken
        }, {
            upsert: true,
            new: true,
            setDefaultsOnInsert: true
        }, function(err, user) {
            return done(err, user);
        })
    })
  );

  // app.get('/quizstart', function(req, res) {
  //   res.status()
  // })

  app.get('/userdetails', passport.authenticate('bearer', { session: false }),
    function(req, res) {
      res.json(req.user);
    }
  )

  app.get('/login', passport.authenticate('google', {
      scope: ['https://www.googleapis.com/auth/plus.login'] // scope relates to the info you want back from google.
    })
  );

  app.get('/login/return', passport.authenticate('google', {
        failureRedirect: '/'
    }),
    function(req, res) {
      Progress.findOne({user: req.user._id}).populate('user').populate('scores.question').exec(function(err, prog) {
        if (err) console.log(err);
        if (prog) { // if user already has a progress....
          res.redirect('/quizstart?accessToken=' + req.user.accessToken);
        }
        else {
          Question.find({}, function(err, questions) { // otherwise create relationship for the user
            let newProg = new Progress({
              user: req.user._id
            });
            questions.forEach(q => {
              newProg.scores.push({
                question: q._id,
              });
            })
            newProg.save()
          });
          res.redirect('/test-route?accessToken=' + req.user.accessToken);
        }
      })
    }
  );
};
