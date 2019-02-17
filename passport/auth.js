import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';

const hardcodedUser = {
  "id": "1",
  "name": "User1",
  "email": "email1@mail.ru",
  "password": "password1"
};

passport.use(
  new LocalStrategy({
      usernameField: 'name',
      passwordField: 'password',
      session: false
    }, (username, password, done) => {
      return (username === hardcodedUser.name && password === hardcodedUser.password)
        ? done(null, hardcodedUser, {message: 'Logged In Successfully'})
        : done(null, false, {message: 'Incorrect login or password'});
    })
);