import passport from 'passport';
import { Strategy as TwitterStrategy } from 'passport-twitter';

passport.use(
  new TwitterStrategy({
    consumerKey: 'TWITTER_CONSUMER_KEY',
    consumerSecret: 'TWITTER_CONSUMER_SECRET',
    callbackURL: 'http://127.0.0.1:8080/google/twitter',
  },
  (token, tokenSecret, profile, done) => done(null, profile._json, token)),
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
