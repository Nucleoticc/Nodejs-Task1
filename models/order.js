const Sequelize = require('sequelize');

const sequelize = require('../utils/database');

const Order = sequelize.define('order', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    product_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    total: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    stripe_id: {
        type: Sequelize.STRING,
        allowNull: false
    },
    status: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Order;