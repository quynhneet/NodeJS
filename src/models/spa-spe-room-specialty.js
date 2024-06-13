'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Spa extends Model {

    static associate(models) {

    }
  };
  Spa.init({
    spa_speID: DataTypes.INTEGER,
    roomID: DataTypes.INTEGER,
    specialtyID: DataTypes.INTEGER

  }, 
  {
    sequelize,
    modelName: 'Spa',
  });
  return Spa;
};