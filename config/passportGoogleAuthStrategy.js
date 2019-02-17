import passport from 'passport';
import { OAuth2Strategy as GoogleStrategy } from 'passport-google-oauth';

passport.use(
  new GoogleStrategy({
      clientID: 'GOOGLE_CLIENT_ID',
      consumerSecret: 'GOOGLE_CONSUMER_SECRET',
      callbackURL: "http://127.0.0.1:8080/google/callback"
    },
    (accessToken, refreshToken, profile, done) => {
      return done(null, profile._json, accessToken);
    })
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});