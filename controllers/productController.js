import fs from 'fs';
import uuidv1 from 'uuid/v1';

const productsPath = 'data/products.json';
const reviewsPath = 'data/reviews.json';

const getAllProducts = (req, res) => {
  fs.createReadStream(productsPath)
    .pipe(res);
};

const createProduct = (req, res) => {
  const newProduct = req.body;
  const products = JSON.parse(fs.readFileSync(productsPath).toString());
  newProduct.id = uuidv1();
  products.push(newProduct);
  fs.writeFileSync(productsPath, JSON.stringify(products), 'utf8');
  res.send(newProduct);
};

const getProductById = (req, res) => {
  const productId = req.params.id;
  const products = JSON.parse(fs.readFileSync(productsPath).toString());
  const product = products.find(item => item.id === productId);

  if (product) {
    res.send(product);
  } else {
    res.send('Product doesn`t exist');
  }
};

const getReviewByProduct = (req, res) => {
  const productId = req.params.id;
  const reviews = JSON.parse(fs.readFileSync(reviewsPath).toString());
  const productReviews = reviews.filter(item => item.productId === productId);
  if (productReviews.length) {
    res.send(productReviews);
  } else {
    res.send('Reviews doesn`t exist for this product');
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  getReviewByProduct
};

