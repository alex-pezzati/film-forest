'use strict';
module.exports = (sequelize, DataTypes) => {
	const users = sequelize.define(
		'users',
		{
			firstName: DataTypes.TEXT,
			lastName: DataTypes.TEXT,
			dateOfBirth: DataTypes.TEXT,
			emailAddress: DataTypes.TEXT,
			hashedPassword: DataTypes.STRING.BINARY,
		},
		{}
	);
	users.associate = function (models) {
		users.hasMany(models.votes, { foreignKey: 'userId' });
		users.hasMany(models.reviews, { foreignKey: 'userId' });
		users.hasOne(models.dashboards, { foreignKey: 'userId' });
	};
	return users;
};
