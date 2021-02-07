'use strict';
module.exports = (sequelize, DataTypes) => {
  const Dashboard = sequelize.define('Dashboard', {
    name: DataTypes.STRING,
    userId: DataTypes.INTEGER,
  }, {});
  Dashboard.associate = function(models) {
		Dashboard.belongsTo(models.User, { foreignKey: 'userId' });
    Dashboard.hasMany(models.MoviesDashboard, { foreignKey: 'dashboardId' });
  };
  return Dashboard;
};
