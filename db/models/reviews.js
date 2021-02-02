'use strict';
module.exports = (sequelize, DataTypes) => {
	const reviews = sequelize.define(
		'reviews',
		{
			review: DataTypes.TEXT,
			movieId: DataTypes.INTEGER,
			userId: DataTypes.INTEGER,
		},
		{}
	);
	reviews.associate = function (models) {
		reviews.belongsTo(models.users, { foreignKey: 'userId' });
		reviews.hasOne(models.movies, { foreignKey: 'movieId' });
	};
	return reviews;
};
