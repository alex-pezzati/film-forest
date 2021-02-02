'use strict';
module.exports = (sequelize, DataTypes) => {
	const movies = sequelize.define(
		'movies',
		{
			title: DataTypes.TEXT,
			genre: DataTypes.TEXT,
			releaseDate: DataTypes.DATE,
			description: DataTypes.TEXT,
			rating: DataTypes.INTEGER,
		},
		{}
	);
	movies.associate = function (models) {
		movies.hasMany(models.reviews, { foreignKey: 'moviesId' });
		movies.hasMany(models.votes, { foreignKey: 'moviesId' });
		movies.hasMany(models.moviesDashboards, { foreignKey: 'moviesId' });
	};
	return movies;
};
