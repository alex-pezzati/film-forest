'use strict';
module.exports = (sequelize, DataTypes) => {
    const Movie = sequelize.define('Movie', {
        title: DataTypes.STRING,
        genre: DataTypes.STRING,
        releaseDate: DataTypes.DATE,
        description: DataTypes.STRING,
        totalRating: DataTypes.NUMERIC,
        movieUrl: DataTypes.STRING
    }, {});
    Movie.associate = function(models) {
        Movie.hasMany(models.Review, { foreignKey: 'movieId' });
        Movie.hasMany(models.Vote, { foreignKey: 'movieId' });
        Movie.hasMany(models.MoviesDashboard, { foreignKey: 'movieId' });
    };
    return Movie;
};
