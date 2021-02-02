'use strict';
module.exports = (sequelize, DataTypes) => {
	const dashboards = sequelize.define(
		'dashboards',
		{
			name: DataTypes.TEXT,
			userId: DataTypes.INTEGER,
		},
		{}
	);
	dashboards.associate = function (models) {
		dashboards.belongsTo(models.users, { foreignKey: 'userId' });
		dashboards.hasMany(models.moviesDashboards, { foreignKey: 'dashboardId' });
	};
	return dashboards;
};
