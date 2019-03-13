import passport from 'passport';
import { Strategy as FacebookStrategy } from 'passport-facebook';

passport.use(
  new FacebookStrategy({
    clientID: 'FACEBOOK_APP_ID',
    clientSecret: 'FACEBOOK_APP_SECRET',
    callbackURL: 'http://127.0.0.1:8080/facebook/callback',
  },
  (accessToken, refreshToken, profile, done) => done(null, profile._json, accessToken)),
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
