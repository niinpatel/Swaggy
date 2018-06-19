const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();

router.use(body.json());
router.use(body.urlencoded({extended:false}));

const Customer = require('../models/Customer');
const CustomerAddress = require('../models/Customer_Address');
const Order = require('../models/Order');



//To register the customer
router.use('/register',function(req,res){
req.body = sanitize(req.body);
var customer = new Customer(req.body);    
customer.save()
.then((result) => {
  res.send("Item saved into the database");
}).catch((err) => {
  res.status(400).send("Could not save the customer onto the database");
});
});

//To Login 

//To place orders
