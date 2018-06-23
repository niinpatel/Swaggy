const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const config = require('./config.json');
const expressValidator = require('express-validator');

mongoose.connect(config.databaseUrl,(err)=>{
    if(err){
        throw err;
    }
    console.log("Node Server Connected to Mongo Database")
});

const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(expressValidator());



const customerroutes = require('./routes/customer');

app.use('/customer', customerroutes);



const port = process.env.port || 1234;
app.listen(port,(err)=>{
    if(err){
        throw err;
    }    console.log(`Server Running at port number ${port}`);
});





