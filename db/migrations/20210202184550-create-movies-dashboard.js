'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('MoviesDashboards', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			dashboardId: {
				allowNull: false,
				references: { model: 'Dashboards' },
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
    return queryInterface.dropTable('MoviesDashboards');
  }
};
