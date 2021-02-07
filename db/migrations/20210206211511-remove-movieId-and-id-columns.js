'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.removeColumn('Dashboards','movieId')
    },

    down: (queryInterface, Sequelize) => {

    }
};
