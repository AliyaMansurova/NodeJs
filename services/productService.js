const Models = require('../sequelize/models');

export async function getAll() {
  return Models.Product.findAll({ where: {}});
}

export async function getOne(productId) {
  return Models.Product.findAll({
    where: {
      id: productId,
    },
  });
}

export async function create(data) {
  console.log(data);
  Models.Product.create(data);
}

export async function getReviews(productId) {
  return Models.Review.findAll({
    where: {
      product_id: productId,
    },
  });
}
