'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			firstName: {
				allowNull: false,
				type: Sequelize.STRING(50),
			},
			lastName: {
				allowNull: false,
				type: Sequelize.STRING(50),
			},
			hashedPassword: {
        		allowNull: false,
        		type: Sequelize.STRING.BINARY,
			},
			emailAddress: {
				allowNull: false,
				type: Sequelize.STRING(50),
			},
			dateOfBirth: {
				allowNull: false,
				type: Sequelize.DATE,
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
    return queryInterface.dropTable('Users');
  }
};
