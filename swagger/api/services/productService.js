import Products from '../models/Product';
import Reviews from '../models/Review';

export const getAll = () => Products.find({});

export const getOne = productId => Products.find({ id: productId });

export const removeOne = productId => Products.deleteOne({ id: productId });

export const create = (data) => {
  const product = new Products(data);
  return product.save();
};

export const getReviews = productId => Reviews.find({ productId });
