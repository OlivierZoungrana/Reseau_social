'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Commentaires', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      comment: {
        allowNull:false,
        type: Sequelize.STRING
      },
      messageId: {
        allowNull: true,
        type: Sequelize.INTEGER,
        references:{
          model:'Messages',
          key:'id'
        }

      },
      userId: {
        allowNull:false,
        type: Sequelize.INTEGER,
        references:{
          model:'Users',
          key:'id'
        }

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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Commentaires');
  }
};