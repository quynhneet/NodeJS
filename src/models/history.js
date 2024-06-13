'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class History extends Model {

    static associate(models) {

    }
  };
  History.init({
    clientID: DataTypes.INTEGER,
    spa_speID: DataTypes.INTEGER,
    files: DataTypes.TEXT,
    description: DataTypes.TEXT
  }, 
  {
    sequelize,
    modelName: 'Histories',
  });
  return History;
};