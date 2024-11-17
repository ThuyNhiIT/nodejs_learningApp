'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserFollow extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  UserFollow.init({
    userID: DataTypes.INTEGER,
    courseID: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UserFollow',
  });
  return UserFollow;
};