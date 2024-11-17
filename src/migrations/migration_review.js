"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Reviews", {
      reviewID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userID: {
        type: Sequelize.INTEGER,
        references: {
          model: "User", // Khớp với bảng "Users"
          key: "id", // Khóa chính trong bảng "Users
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      courseID: {
        type: Sequelize.INTEGER,
        references: {
          model: "Course", // Khớp với bảng "Courses"
          key: "id", // Khóa chính trong bảng "Courses"
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      review: {
        type: Sequelize.TEXT,
      },
      rating: {
        type: Sequelize.INTEGER,
        validate: {
          min: 1,
          max: 5, // Rating từ 1 đến 5
        },
      },
      time: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Reviews");
  },
};
