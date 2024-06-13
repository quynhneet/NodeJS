'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SpaRoom extends Model {

    static associate(models) {

    }
  };
  SpaRoom.init({
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    image: DataTypes.STRING,
    description:DataTypes.TEXT
  }, 
  {
    sequelize,
    modelName: 'spaRooms',
  });
  return SpaRoom;
};