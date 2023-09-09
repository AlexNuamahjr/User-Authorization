const {Sequelize, DataTypes} = require('sequelize');
const sequelize = require('../dbConnect');

const User = sequelize.define('Users', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name:{
        type: DataTypes.STRING,
        required: true
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        required: true
    },
    password: {
        type: DataTypes.STRING,
        required: true
    }
});

User.sync();

module.exports = User;