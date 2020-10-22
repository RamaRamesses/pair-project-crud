'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Computer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Computer.hasOne(models.Part, {
        foreignKey: "ComputerId"
      })
    }
  };
  Computer.init({
    case_size: DataTypes.STRING,
    peripheral_devices: DataTypes.STRING,
    operating_system: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Computer',
  });
  return Computer;
};