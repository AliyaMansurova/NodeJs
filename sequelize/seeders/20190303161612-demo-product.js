module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Products', [{
    name: 'Product1',
    createdAt: '2019-03-03 00:00:00',
    updatedAt: '2019-03-03 00:00:00',
  },
  {
    name: 'Product2',
    createdAt: '2019-03-03 00:00:00',
    updatedAt: '2019-03-03 00:00:00',
  },
  {
    name: 'Product3',
    createdAt: '2019-03-03 00:00:00',
    updatedAt: '2019-03-03 00:00:00',
  },
  {
    name: 'Product4',
    createdAt: '2019-03-03 00:00:00',
    updatedAt: '2019-03-03 00:00:00',
  },
  {
    name: 'Product5',
    createdAt: '2019-03-03 00:00:00',
    updatedAt: '2019-03-03 00:00:00',
  }], {}),

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  },
};
