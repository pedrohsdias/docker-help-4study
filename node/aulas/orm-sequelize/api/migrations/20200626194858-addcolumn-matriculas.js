'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Matriculas','deletedAt', {
      allowNull: true,
      type: Sequelize.DATE
  });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Matriculas','deletedAt');
  }
};