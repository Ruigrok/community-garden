'use strict';
module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define('User', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  User.associate = function (models) {
    // Associating Order with User
    User.hasMany(models.Order, {
      onDelete: "cascade"
    });
  };

  return User;
};