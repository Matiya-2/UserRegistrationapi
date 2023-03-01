const userModel = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const SECRET_KEY = "SIGNUPAPI";

const signup = async (req , res ) =>{

    //Existing user
    //Hash password
    //User Creation
    //Token Generate

    const {firstname, lastname, email, password} = req.body;
    try{
        const existinguser = await userModel.findOne({email: email})
        if(existinguser){
            return res.status(400).json({
                message: "User already exists"
            });
        }

        const hashPassword = await bcrypt.hash(password, 10);

        const result = await userModel.create({
            email: email,
            password: hashPassword,
            firstname: firstname,
            lastname: lastname
        });

        const token = jwt.sign({
            email: result.email, 
            id: result._id
        }, SECRET_KEY);
        res.status(201).json({
            user: result, 
            token: token
        });      
    }catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Something went wrong"
        });
    }

}

const login = (req , res) =>{

}

module.exports = (signup , login);