var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy,
    User = require('../models/user');

module.exports = (app, passport) => {

  passport.serializeUser(function(user, done) {
      done(null, user);
  });

  passport.deserializeUser(function(user, done) {
      done(null, user);
  });

  passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_SECRET,
        callbackURL: 'http://localhost:3000/quiz-time'
    },
    function(accessToken, refreshToken, profile, done) {
        User.findOneAndUpdate({
            googleID: profile.id
        }, {
            fullName: profile.displayName,
            firstName: profile.name.givenName,
            avatar: profile.photos[0].value
        }, {
            upsert: true,
            new: true
        }, function(err, user) {
            return done(err, user);
        })
    })
  );

  app.get('/login', passport.authenticate('google', {
      scope: ['https://www.googleapis.com/auth/plus.login']
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
