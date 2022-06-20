const sequelize = require('sequelize');

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('BlogPosts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING(255)
      },
      content: {
        type: Sequelize.STRING(255)
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'Users',
          key: 'id',
        },
      },
      published: {
        allowNull: false,
        type: "TIMESTAMP",
        defaultValue: sequelize.literal('NOW()'),
      },
      updated: {
        allowNull: false,
        type: "TIMESTAMP",
        defaultValue: sequelize.literal('NOW()'),
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('BlogPosts');
  }
};
