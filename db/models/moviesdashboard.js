'use strict';
module.exports = (sequelize, DataTypes) => {
    const MoviesDashboard = sequelize.define(
        'MoviesDashboard', {
            dashboardId: DataTypes.INTEGER,
            movieId: DataTypes.INTEGER,
        }, {}
    );
    MoviesDashboard.associate = function(models) {
        MoviesDashboard.belongsTo(models.Dashboard, { foreignKey: 'dashboardId' });
        MoviesDashboard.belongsTo(models.Movie, { foreignKey: 'movieId' });
    };
    return MoviesDashboard;
};