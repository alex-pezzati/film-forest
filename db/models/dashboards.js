'use strict';
module.exports = (sequelize, DataTypes) => {
  const dashboards = sequelize.define('dashboards', {
    name: DataTypes.TEXT
  }, {});
  dashboards.associate = function(models) {
    // associations can be defined here
  };
  return dashboards;
};