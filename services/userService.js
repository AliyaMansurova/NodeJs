const Models = require('../sequelize/models');

export const getAll = () => Models.User.findAll({ where: {} });

export const getOne = userId => Models.User.findAll({
  where: {
    id: userId,
  },
});
