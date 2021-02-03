'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Movies', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            title: {
                allowNull: false,
                type: Sequelize.STRING(50)
            },
            genre: {
                allowNull: false,
                type: Sequelize.STRING(50)
            },
            releaseDate: {
                allowNull: false,
                type: Sequelize.DATE
            },
            description: {
                allowNull: false,
                type: Sequelize.STRING(500)
            },
            totalRating: {
                type: Sequelize.NUMERIC(2, 2)
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Movies');
    }
};