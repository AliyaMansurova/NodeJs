module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Users', [{
    name: 'User1',
    createdAt: '2019-03-03 00:00:00',
    updatedAt: '2019-03-03 00:00:00',
  },
  {
    name: 'User2',
    createdAt: '2019-03-03 00:00:00',
    updatedAt: '2019-03-03 00:00:00',
  },
  {
    name: 'User3',
    createdAt: '2019-03-03 00:00:00',
    updatedAt: '2019-03-03 00:00:00',
  }], {}),
};
