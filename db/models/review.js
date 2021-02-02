'use strict';
module.exports = (sequelize, DataTypes) => {
    const Review = sequelize.define('Review', {
        review: DataTypes.STRING,
        userId: DataTypes.INTEGER,
        movieId: DataTypes.INTEGER
    }, {});
    Review.associate = function(models) {
        Review.belongsTo(models.User, { foreignKey: 'userId' });
        Review.hasOne(models.Movie, { foreignKey: 'movieId' });
    };;
    return Review;
};