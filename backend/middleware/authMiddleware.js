const jwt = require('jsonwebtoken');
const User = require('../database/models/userModel');


const protect = async (req, res, next)=>{
    const token = req.cookies.jwt;

    if (token){
        try {
            const decoded = jwt.verify(token, process.env.SECRET_KEY);
            req.user = await User.findByPk(decoded._id).select('-password');
            next();
        } catch (error) {
            res.status(401).json({message: "Not Authorize"})
        }
    }else{
        res.status(401).json({message: "Not Authorize"})
    }
}


module.exports = {protect}