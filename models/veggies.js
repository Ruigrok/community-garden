'use strict';
module.exports = function(sequelize, DataTypes) {
  var Veggies = sequelize.define('Veggies', {
    name: DataTypes.STRING,
    loc: DataTypes.STRING,
    quantity: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Veggies;
};