import passport from 'passport';
import '../config/passportGoogleAuthStrategy';

export const googleAuth = (req, res, next) => {
  passport.authenticate('google',
    {
      scope: ['profile'],
    })(req, res, next);
};

export const googleRedirect = (req, res, next) => {
  passport.authenticate('google',
    {
      successRedirect: '/',
      failureRedirect: '/auth',
    },
    (err, user) => {
      if (err) res.send(err);

      req.login(user, (error) => {
        if (error) res.send(error);

        res.redirect('/');
      });
    })(req, res, next);
};
