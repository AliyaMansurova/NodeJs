import express from 'express';
import products from '../controllers/productController';
import users from '../controllers/userController';
import auth from '../controllers/auth';
import checkToken from '../middlewares/check-token';

const router = express.Router();

router.route('/auth')
  .post(auth.authenticate);

router.route('/products')
  .get(checkToken, products.getAllProducts)
  .post(checkToken, products.createProduct);

router.route('/products/:id')
  .get(checkToken, products.getProductById);

router.route('/products/:id/reviews')
  .get(checkToken, products.getReviewByProduct);

router.route('/users')
  .get(checkToken, users.getUsers);

module.exports = router;
