import express from 'express';
import products from '../controllers/productController';
import users from '../controllers/userController';
import auth from '../controllers/auth';
import checkToken from '../middlewares/check-token';
import { facebookAuth, facebookRedirect} from '../controllers/facebookController';
import { googleAuth, googleRedirect } from '../controllers/googleController';
import { twitterAuth, twitterRedirect } from '../controllers/twitterController';

const router = express.Router();

router.route('/auth')
  .post(auth.authenticate);

router.get('/facebook', facebookAuth);
router.get('/facebook/callback', facebookRedirect);

router.get('/google', googleAuth);
router.get('/google/callback', googleRedirect);

router.get('/twitter', twitterAuth);
router.get('/twitter/callback', twitterRedirect);

router.route('/products')
  .get(checkToken, products.getAllProducts)
  .post(checkToken, products.createProduct);

router.route('/products/:id')
  .get(checkToken, products.getProductById);

router.route('/products/:id/reviews')
  .get(checkToken, products.getReviewByProduct);

router.route('/users')
  .get(checkToken, users.getUsers);

router.route('/users/:id')
  .get(checkToken, users.getUserById);

module.exports = router;
