const User = require('../database/models/userModel');
const registerUser = (req, res)=>{
    res.send('Register User')
};

const loginUser = (req, res)=>{
    res.send('Login User')
};

const logoutUser = (req, res)=>{
    res.send('User Loggout')
};

const getUserProfile = (req, res)=>{
    res.send('User Profile')
};

const updateUserProfile = (req, res)=>{
    res.send('Profile Updated')
};

module.exports = {
    registerUser,
    loginUser,
    logoutUser,
    getUserProfile,
    updateUserProfile
}