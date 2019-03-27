import {
  getAll,
  getOne,
  getReviews,
  create,
  removeOne,
} from '../services/productService';
import { getLastModifiedDate } from '../../helpers/utils';

export const getAllProducts = async (req, res, next) => {
  try {
    const products = await getAll();
    return res.json(products);
  } catch (err) {
    return next(err);
  }
};

export const createProduct = async (req, res, next) => {
  try {
    const product = req.body;
    await create({ lastModifiedDate: getLastModifiedDate(), ...product });
    return res.json(product);
  } catch (err) {
    return next(err);
  }
};

export const getProductById = async (req, res, next) => {
  try {
    let productId = req.params.id;
    if (req.swagger && req.swagger.params) {
      productId = req.swagger.params.productId.value;
    }
    const product = await getOne(productId);
    return res.json(product);
  } catch (err) {
    return next(err);
  }
};

export const removeProduct = async (req, res, next) => {
  try {
    let productId = req.params.id;
    if (req.swagger && req.swagger.params) {
      productId = req.swagger.params.productId.value;
    }
    const product = await removeOne(productId);
    return res.json(product);
  } catch (err) {
    return next(err);
  }
};

export const getReviewByProduct = async (req, res, next) => {
  try {
    const productId = req.params.id;
    const reviews = await getReviews(productId);
    return res.json(reviews);
  } catch (err) {
    return next(err);
  }
};
