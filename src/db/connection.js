const express = require("express");
const mongoose = require( "mongoose" );

mongoose.set('strictQuery', true);
mongoose.connect("mongodb://localhost:27017/signupapi" , {
    useNewUrlParser:true
}).then( () => {
    console.log( "connection is Successful");
}).catch( (e) => {
    console.log( "No connection");
})