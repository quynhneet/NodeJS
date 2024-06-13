'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {

    static associate(models) {

    }
  };
  Booking.init({
    statusId: DataTypes.STRING,
    spa_speId: DataTypes.INTEGER,
    clientId: DataTypes.INTEGER,
    date: DataTypes.DATE,
    timeType: DataTypes.STRING,

  }, 
  {
    sequelize,
    modelName: 'Booking',
  });
  return Booking;
};