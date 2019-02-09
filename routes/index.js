import express from 'express';
import products from '../controllers/productController';
import users from '../controllers/userController';

const router = express.Router();

router.route('/products')
  .get(products.getAllProducts)
  .post(products.createProduct);

router.route('/products/:id')
  .get(products.getProductById);

router.route('/products/:id/reviews')
  .get(products.getReviewByProduct);

router.route('/users')
  .get(users.getUsers);

module.exports = router;
