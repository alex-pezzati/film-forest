'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Votes', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			upvoteRating: {
				type: Sequelize.BOOLEAN,
			},
			downvoteRating: {
				type: Sequelize.BOOLEAN,
			},
			userId: {
				allowNull: false,
				references: { model: 'Users' },
				type: Sequelize.INTEGER,
			},
			movieId: {
				allowNull: false,
				references: { model: 'Movies' },
				type: Sequelize.INTEGER,
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
    return queryInterface.dropTable('Votes');
  }
};
