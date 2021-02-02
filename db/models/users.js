'use strict';
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    firstName: DataTypes.TEXT,
    lastName: DataTypes.TEXT,
    dateOfBirth: DataTypes.TEXT,
    emailAddress: DataTypes.TEXT
  }, {});
  users.associate = function(models) {
    // associations can be defined here
  };
  return users;
};