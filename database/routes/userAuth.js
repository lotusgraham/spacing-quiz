var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy,
    User = require('../models/user');

module.exports = (app, passport) => {
  // Received a serialize error....solution found on stack overflow. Honestly, can't say i understand it...but it works.
  passport.serializeUser(function(user, done) {
      done(null, user);
  });

  passport.deserializeUser(function(user, done) {
      done(null, user);
  });
  // Using Googles Oauth 2.0
  passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_SECRET,
        callbackURL: 'http://localhost:3000/quiz-time'
    },
    function(accessToken, refreshToken, profile, done) {
        User.findOneAndUpdate({ // If user doesn't exist, then create. Otherwise, do nothing.
            googleID: profile.id
        }, {
            fullName: profile.displayName,
            firstName: profile.name.givenName,
            avatar: profile.photos[0].value
        }, {
            upsert: true,
            new: true,
            setDefaultsOnInsert: true
        }, function(err, user) {
            return done(err, user);
        })
    })
  );

  app.get('/login', passport.authenticate('google', {
      scope: ['https://www.googleapis.com/auth/plus.login'] // scope relates to the info you want back from google.
    })
  );

  app.get('/quiz-time', passport.authenticate('google', {
        failureRedirect: '/'
    }),
    function(req, res) {
        res.send('Logged in!');
    }
  );
};
