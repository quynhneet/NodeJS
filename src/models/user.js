'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {

    static associate(models) {

    }
  };
  Users.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    address: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    gender: DataTypes.BOOLEAN,
    image: DataTypes.STRING,
    roleID: DataTypes.STRING,
    positionID: DataTypes.STRING,
  }, 
  {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};