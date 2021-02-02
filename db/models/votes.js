'use strict';
module.exports = (sequelize, DataTypes) => {
  const votes = sequelize.define('votes', {
    upvoteRating: DataTypes.BOOLEAN,
    downvoteRating: DataTypes.BOOLEAN
  }, {});
  votes.associate = function(models) {
    // associations can be defined here
  };
  return votes;
};