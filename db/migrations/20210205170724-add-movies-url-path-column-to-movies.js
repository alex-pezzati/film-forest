'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.addColumn('Movies',
        'movieUrl',
        {
          type: Sequelize.STRING,
        }
      );
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.removeColumn('Movies', 'movieUrl');
  }
};
