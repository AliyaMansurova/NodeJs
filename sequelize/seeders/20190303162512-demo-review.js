module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Reviews', [{
    productId: 2,
    review: 'review1',
    createdAt: '2019-03-03 00:00:00',
    updatedAt: '2019-03-03 00:00:00',
  },
  {
    productId: 5,
    review: 'review2',
    createdAt: '2019-03-03 00:00:00',
    updatedAt: '2019-03-03 00:00:00',
  },
  {
    productId: 1,
    review: 'review3',
    createdAt: '2019-03-03 00:00:00',
    updatedAt: '2019-03-03 00:00:00',
  },
  {
    productId: 3,
    review: 'review4',
    createdAt: '2019-03-03 00:00:00',
    updatedAt: '2019-03-03 00:00:00',
  },
  {
    productId: 4,
    review: 'review5',
    createdAt: '2019-03-03 00:00:00',
    updatedAt: '2019-03-03 00:00:00',
  },
  {
    productId: 5,
    review: 'review6',
    createdAt: '2019-03-03 00:00:00',
    updatedAt: '2019-03-03 00:00:00',
  },
  {
    productId: 2,
    review: 'review7',
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
