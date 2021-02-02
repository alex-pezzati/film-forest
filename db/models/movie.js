'use strict';
module.exports = (sequelize, DataTypes) => {
  const Movie = sequelize.define('Movie', {
    title: DataTypes.STRING,
    genre: DataTypes.STRING,
    releaseDate: DataTypes.DATE,
    description: DataTypes.STRING,
    totalRating: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    reviewId: DataTypes.INTEGER
  }, {});
  Movie.associate = function(models) {
	  Movie.hasMany(models.Review, { foreignKey: 'moviesId' });
		Movie.hasMany(models.Vote, { foreignKey: 'moviesId' });
    Movie.hasMany(models.MoviesDashboard, { foreignKey: 'moviesId' });
    };
  return Movie;
};
