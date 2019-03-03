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
    (err, user) => {
      if (err || !user) {
        return res.redirect('/auth');
      }

      req.login(user.displayName, { session: false }, (err) => {
        if (err) res.send(err);

        res.redirect('/');

        next();
      });
    })(req, res, next);
};
