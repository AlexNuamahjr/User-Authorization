const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const sequelize = require('./database/dbConnect');
const userRoute = require('./routes/userRoute');



// Express application
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Port
const port = process.env.PORT || 7678;

app.use('/users', userRoute);

// Running server


const startServer = async()=>{
    try {
        await sequelize.authenticate();
        app.listen(port, ()=>{
            console.log(`Server is running on http://localhost:${port}`);
        })
    } catch (e) {
        console.log(e);
    }
};

startServer();