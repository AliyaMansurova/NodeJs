import express from 'express';
import {
  getAllProducts, getReviewByProduct, getProductById, createProduct,
} from '../controllers/productController';
import { getUserById, getUsers } from '../controllers/userController';
import auth from '../controllers/auth';
import checkToken from '../middlewares/check-token';
import { facebookAuth, facebookRedirect } from '../controllers/facebookController';
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
  .get(checkToken, getAllProducts)
  .post(checkToken, createProduct);

router.route('/products/:id')
  .get(checkToken, getProductById);

router.route('/products/:id/reviews')
  .get(checkToken, getReviewByProduct);

router.route('/users')
  .get(checkToken, getUsers);

router.route('/users/:id')
  .get(checkToken, getUserById);

module.exports = router;
