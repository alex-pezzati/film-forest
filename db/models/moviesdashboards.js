'use strict';
module.exports = (sequelize, DataTypes) => {
  const moviesDashboards = sequelize.define('moviesDashboards', {
    dashboardId: DataTypes.INTEGER,
    movieId: DataTypes.INTEGER
  }, {});
  moviesDashboards.associate = function(models) {
    // associations can be defined here
  };
  return moviesDashboards;
};