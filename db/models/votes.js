'use strict';
module.exports = (sequelize, DataTypes) => {
	const votes = sequelize.define(
		'votes',
		{
			upvoteRating: DataTypes.BOOLEAN,
			downvoteRating: DataTypes.BOOLEAN,
			userId: DataTypes.INTEGER,
			movieId: DataTypes.INTEGER,
		},
		{}
	);
	votes.associate = function (models) {
		votes.hasOne(models.movies, { foreignKey: 'movieId' });
		votes.belongsTo(models.users, { foreignKey: 'userId' });
	};
	return votes;
};
