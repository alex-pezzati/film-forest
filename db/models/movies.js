'use strict';
module.exports = (sequelize, DataTypes) => {
  const movies = sequelize.define('movies', {
    title: DataTypes.TEXT,
    genre: DataTypes.TEXT,
    releaseDate: DataTypes.DATE,
    description: DataTypes.TEXT,
    rating: DataTypes.INTEGER
  }, {});
  movies.associate = function(models) {
    // associations can be defined here
  };
  return movies;
};