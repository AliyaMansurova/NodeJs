import passport from 'passport';
import '../config/passportTwitterStrategy';

export const twitterAuth = (req, res, next) => {
  passport.authenticate('twitter')(req, res, next);
};

export const twitterRedirect = (req, res, next) => {
  passport.authenticate('twitter',
    (err, user) => {
      if (err || !user) {
        return res.redirect('/auth');
      }
      req.login(user.name, (error) => {
        if (error) res.send(error);

        res.redirect('/');

        next();
      });
    })(req, res, next);
};
