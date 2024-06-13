'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        firstName: 'Diem',
        lastName: 'Quynh',
        email: 'hoangphongbaka@gmail.com',
        password: '123456789',
        address:'Ha Noi',
        gender:0,
        typeRole:'ROLE',
        keyRole:'R1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
