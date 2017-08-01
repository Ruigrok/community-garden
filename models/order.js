'use strict';
module.exports = function (sequelize, DataTypes) {
  var Order = sequelize.define('Order', {
    veggies: {
      type: DataTypes.STRING,
      allowNull: false
    },
    collected: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });

  Order.associate = function (models) {
    // Order should belong to a User
    // An Order can't be created without a User due to the foreign key constraint
    Order.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Order;
};