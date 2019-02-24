import jwt from 'jsonwebtoken';
import { secret } from '../config/config.json';

const checkToken = (req, res, next) => {
  let token = req.headers['x-access-token'];
  if (token) {
    jwt.verify(token, secret, (err, encoded) => {
      if (err) {
        res.status(403).send({success: false, message: 'Failed to authenticate token.'})
      } else {
        next();
      }
    })
  } else {
    res.status(403).send({success: false, message: 'No token provided.'})
  }
};

module.exports = checkToken;