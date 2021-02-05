'use strict';

const bcrypt = require("bcryptjs")
const faker = require("faker")

module.exports = {
    up: async(queryInterface, Sequelize) => {
        const hashedDemoPassword = await bcrypt.hash('demopassword', 10)
        const usersArray = [{
            firstName: "Demo",
            lastName: "Demo",
            hashedPassword: hashedDemoPassword,
            email: "demo@demo.com",
            createdAt: new Date(),
            updatedAt: new Date()
        }];
        for (let i = 2; i < 6; i++) {
            const hashedPassword = await bcrypt.hash(`password${i}`, 10);
            let fakeUser = {
                firstName: faker.name.firstName(),
                lastName: faker.name.lastName(),
                hashedPassword: hashedPassword,
                email: faker.internet.email(),
                createdAt: new Date(),
                updatedAt: new Date()
            }
            usersArray.push(fakeUser)
        }

        return queryInterface.bulkInsert('Users', usersArray);
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Users', null, {});
    }
};