module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    productId: DataTypes.INTEGER,
    review: DataTypes.STRING,
  }, {});
  // Review.associate = function (models) {
  //   // associations can be defined here
  // };
  return Review;
};
