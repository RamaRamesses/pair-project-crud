'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Part extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Part.belongsTo(models.Computer, {
        foreignKey: "ComputerId",
        targetKey: "id"
      })
    }
  };
  Part.init({
    motherboard: DataTypes.STRING,
    ram: DataTypes.STRING,
    gpu: DataTypes.STRING,
    psu: DataTypes.STRING,
    processor: DataTypes.STRING,
    harddisk: DataTypes.STRING,
    dvd_drive: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Part',
  });
  return Part;
};