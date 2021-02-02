'use strict';
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        hashedPassword: DataTypes.STRING,
        email: DataTypes.STRING,
        dateOfBirth: DataTypes.STRING
    }, {});
    User.associate = function(models) {
        User.hasMany(models.Review, { foreignKey: 'userId' })
        User.hasMany(models.Vote, { foreignKey: 'userId' })
        User.hasOne(models.Dashboard, { foreignKey: 'userId' })
    };
    return User;
};