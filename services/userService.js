const Models = require('../sequelize/models');

export async function getAll() {
  return Models.User.findAll({ where: {}});
}

export async function getOne(userId) {
  return Models.User.findAll({
    where: {
      id: userId,
    },
  });
}