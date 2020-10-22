'use strict';
module.exports = {
  up:  (queryInterface, Sequelize) => {
    return queryInterface.createTable('Parts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      motherboard: {
        type: Sequelize.STRING
      },
      ram: {
        type: Sequelize.STRING
      },
      gpu: {
        type: Sequelize.STRING
      },
      psu: {
        type: Sequelize.STRING
      },
      processor: {
        type: Sequelize.STRING
      },
      harddisk: {
        type: Sequelize.STRING
      },
      dvd_drive: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Parts');
  }
};