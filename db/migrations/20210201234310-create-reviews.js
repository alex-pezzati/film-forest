'use strict';
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('reviews', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			review: {
				//'allowNull: false' is not included here since it is my understanding that an empty review is acceptable.
				type: Sequelize.TEXT(500),
			},
			movieId: {
				allowNull: false,
				references: { model: 'movies' },
				type: Sequelize.TEXT,
			},
			userId: {
				allowNull: false,
				references: { model: 'users' },
				type: Sequelize.TEXT,
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
		return queryInterface.dropTable('reviews');
	},
};
