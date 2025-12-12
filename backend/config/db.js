const {Sequelize} = require('sequelize');
require('dotenv').config();

console.log("--- DEBUG ENV ---");
console.log("DB_USER:", process.env.DB_USER);
console.log("DB_PASS:", process.env.DB_PASS);
console.log("DB_NAME:", process.env.DB_NAME);
console.log("-----------------");

const sequelize = new Sequelize(
    process.env.DB_NAME, 
    process.env.DB_USER, 
    process.env.DB_PASSWORD, 
    {
        host: process.env.DB_HOST,
        dialect: 'mysql',
        logging: false,
    }
);

const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Đã kết nối đến cơ sở dữ liệu thành công.');
    }
    catch (error) {
        console.error('Không thể kết nối đến cơ sở dữ liệu:', error);
    }
};

module.exports = {sequelize, connectDB};