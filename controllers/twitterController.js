import passport from 'passport';
import '../config/passportTwitterStrategy';

export const twitterAuth = (req, res, next) => {
  passport.authenticate('twitter')(req, res, next);
};

export const twitterRedirect = (req, res, next) => {
  passport.authenticate('twitter',
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
