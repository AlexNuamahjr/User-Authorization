const User = require('../database/models/userModel');
const generateToken = require('../util/generateToken');
const bcrypt = require('bcrypt');

// Register User
const registerUser = async(req, res)=>{
    // res.send('Register User')
    const {name, email, password} = req.body;
    try {
        // Check if user exists
        const userExist = await User.findOne({where: {email: email}});
        if (userExist){
            res.status(400).json({message: "User already exists"});
        }

        // Hashing password
        const salt = 10
        const hashedPassword = await bcrypt.hash(password, salt)

        // Create new user
        const user = await User.create({
            name: name,
            email: email,
            password: hashedPassword
        });
        // Generate user token
        if (User){
            generateToken(res, user._id);
            res.status(200).json({
                id: user._id,
                name: user.name,
                email: user.email
            })
        }
    } catch (error) {
        res.status(500).json({message: "Something went wrong"});
    }
};

// Login User
const loginUser = async(req, res)=>{
    const {email, password} = req.body;
    try {
        // Check if user credentials are valid
        const userExist = await User.findOne({where: {email: email}});
        if (userExist){
            const matchPassword = await bcrypt.compare(password, userExist.password);
            if (matchPassword){
                generateToken(res, userExist)
                res.status(201).json({
                    id: userExist._id,
                    name: userExist.name,
                    email: userExist.email,
                    message: "Login successfully"
                })
            }else{
                res.status(401).json({message: "Invalid Credentials"})
            }
        }else{
            res.status(401).json({message: "Invalid Credentials"})
        }
        
    } catch (error) {
        console.log(error);
        return res.status(400).json({message: "Something went wrong"});
    }
    // res.send('Login User')
};

// Logout User
const logoutUser = async(req, res)=>{
    res.cookie('jwt', '', {
        httpOnly: true,
        expires: new Date(0)
    })
    res.status(200).json({message: "User logged out successfully"})
};

const getUserProfile = async(req, res)=>{
    const {id} = req.params;
    try {
        const {name, email} = req.body
        const user = await User.findOne({where: {id, email, name}})
        return res.status(200).json(user)
    } catch (error) {
        res.status(500).json({message: "Something went wrong"})
    }
    
};

const updateUserProfile = async(req, res)=>{
    res.send('Profile Updated')
};

module.exports = {
    registerUser,
    loginUser,
    logoutUser,
    getUserProfile,
    updateUserProfile
}