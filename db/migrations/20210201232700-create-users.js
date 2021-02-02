'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			firstName: {
				allowNull: false,
				type: Sequelize.TEXT(50),
			},
			lastName: {
				allowNull: false,
				type: Sequelize.TEXT(50),
			},
			dateOfBirth: {
				allowNull: false,
				type: Sequelize.DATEONLY,
			},
			emailAddress: {
				allowNull: false,
				isEmail: true,
				type: Sequelize.TEXT(50),
			},
			hashedPassword: {
				allowNull: false,
				types: Sequelize.STRING.BINARY,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
};
