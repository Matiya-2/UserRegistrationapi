const express = require("express");
const router = express.Router();
const mongoose = require( "mongoose" );
const User = require('../models/usersSchema');
const bcrypt = require('bcrypt');

router.post('/',(req,res,next) => {
    bcrypt.hash(req.body.password, 10, (err, hash) => {
        if(err)
        {
            return res.status(500).json({
              error:err
            })
        }
        else
        {
            const user = new User({
                _id:new mongoose.Types.ObjectId,
                firstname:req.body.firstname,
                lastname:req.body.lasttname,
                email:req.body.email,
                password:hash
            })

            user.save()
            .then(result =>{
                console.log(result);
                res.status(200).json({
                    new_user:result
                })
            })
            .catch(err =>{
                console.log(err);
                res.status(500).json({
                    error:err
                })
            })
        }
    })
})

module.exports = router;