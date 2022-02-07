const Sequelize = require('sequelize');

const sequelize = new Sequelize('product-database', 'root', 'password123', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;