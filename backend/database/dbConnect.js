const {Sequelize} = require('sequelize');
const dotenv = require('dotenv')
dotenv.config();

DB_NAME = process.env.DB_NAME
DB_USER = process.env.DB_USER
DB_PASS = process.env.DB_PASS
DB_HOST = process.env.DB_HOST

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
    host: DB_HOST,
    dialect: 'mysql'
});

module.exports = sequelize;