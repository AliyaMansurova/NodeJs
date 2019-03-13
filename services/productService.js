const Models = require('../sequelize/models');

export const getAll = () => Models.Product.findAll({ where: {} });

export const getOne = productId => Models.Product.findAll({
  where: {
    id: productId,
  },
});

export const create = (data) => {
  Models.Product.create(data);
};

export const getReviews = productId => Models.Review.findAll({
  where: {
    productId,
  },
});
