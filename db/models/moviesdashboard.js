'use strict';
module.exports = (sequelize, DataTypes) => {
	const MoviesDashboard = sequelize.define(
		'MoviesDashboard',
		{
			dashboardId: DataTypes.INTEGER,
			movieId: DataTypes.INTEGER,
		},
		{}
	);
	MoviesDashboard.associate = function (models) {
		moviesDashboard.belongsTo(models.Dashboard, { foreignKey: 'dashboardId' });
		moviesDashboard.belongsTo(models.Movie, { foreignKey: 'movieId' });
	};
	return MoviesDashboard;
};
