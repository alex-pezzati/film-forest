'use strict';
module.exports = (sequelize, DataTypes) => {
  const Vote = sequelize.define('Vote', {
    upvoteRating: DataTypes.BOOLEAN,
    downvoteRating: DataTypes.BOOLEAN,
    userId: DataTypes.INTEGER,
    movieId: DataTypes.INTEGER
  }, {});
  Vote.associate = function(models) {
		Vote.hasOne(models.Movie, { foreignKey: 'movieId' });
    Vote.belongsTo(models.User, { foreignKey: 'userId' });
  };
  return Vote;
};
