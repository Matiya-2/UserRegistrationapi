const express = require("express");
require( "./db/connection");
const app = express();
const userRoute = require('./routes/userRoute');
const bodyParser = require('body-parser');

const port = process.env.port || 3000;

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/users' ,userRoute);

//CREATE NEW USERS
app.get("/" ,(req,res) => {
    res.send ("Hello this is SIGNUPAPI");
})

app.listen(port, () => {
    console.log (`connection is setup at ${port}` );
})