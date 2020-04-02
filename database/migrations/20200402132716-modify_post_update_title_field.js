'use strict';

module.exports = {
  /**
   * title: {
      type: DataTypes.STRING,
      required: true,
      allowNull: false,

    }
   */
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });


    */
   return queryInterface.changeColumn(
    "Posts",
    "title",
    {
        type: Sequelize.STRING,
        required: true,
        allowNull: false,
    }
);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
   return queryInterface.changeColumn(
    "Posts",
    "title",
    {
        type: Sequelize.STRING,
    }
);
  }
};
