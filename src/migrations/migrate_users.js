'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('User', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userName: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.BLOB("long")
      },
      description: {
        type: Sequelize.STRING
      },
      phone:{
        type: Sequelize.STRING
      },
      address:{
        type: Sequelize.STRING
      },
      title:{
        type: Sequelize.STRING    // tiểu sử của người dùng
      },
      roleID: {
        type: Sequelize.INTEGER
      },
      projectID: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('User');
  }
};

// npx sequelize-cli db:migrate --to migrate_users.js  