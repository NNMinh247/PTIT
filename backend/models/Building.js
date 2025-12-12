const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Building = sequelize.define('Building', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true,
        },
    modelPath: {
        type: DataTypes.STRING,
        allowNull: true
    },
    position: {
        type: DataTypes.JSON,
        allowNull: true
    }
});

module.exports = Building;