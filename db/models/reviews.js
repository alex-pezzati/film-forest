'use strict';
module.exports = (sequelize, DataTypes) => {
  const reviews = sequelize.define('reviews', {
    review: DataTypes.TEXT
  }, {});
  reviews.associate = function(models) {
    // associations can be defined here
  };
  return reviews;
};