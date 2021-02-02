'use strict';
module.exports = (sequelize, DataTypes) => {
	const moviesDashboards = sequelize.define(
		'moviesDashboards',
		{
			dashboardId: DataTypes.INTEGER,
			movieId: DataTypes.INTEGER,
		},
		{}
	);
	moviesDashboards.associate = function (models) {
		moviesDashboards.belongsTo(models.dashboards, { foreignKey: 'dashboardId' });
		moviesDashboards.belongsTo(models.movies, { foreignKey: 'movieId' });
	};
	return moviesDashboards;
};
