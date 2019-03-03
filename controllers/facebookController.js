import passport from 'passport';
import '../config/passportFacebookSrategy';

export const facebookAuth = (req, res, next) => {
  passport.authenticate('facebook')(req, res, next);
};

export const facebookRedirect = (req, res, next) => {
  passport.authenticate('facebook',
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
