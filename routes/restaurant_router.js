var express = require('express');
var router = express.Router();

var Restaurant = require('../models/Restaurants');
var Restaurant_address = require('../models/Restaurant_Address');
var sanitize = require("mongo-sanitize");
var bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended:false}));


// list of all Restaurants
router.get('/',function(req,res){
Restaurant.find({},function(err,listOfRestaurants){
if(err) throw err;
res.json(listOfRestaurants);
});
});



//To add or register a Restaurant
router.post('/addRestaurant',function(req,res){
req.body = sanitize(req.body);
var restaurant  = new Restaurant(req.body);
restaurant.save()
.then(item=>{
  res.send("Item saved into the database");
}).catch(err=>{
  res.status(400).send("Unable to save the data into the database");
});
});

// To find a Particular Restaurant
router.get('/:id',function(req,res){
Restaurant.findById(req.body.id)
.then(Restaurant=>res.json(Restaurant))
.catch(err=>res.status(400).json({ nopostfound: 'No post found with that ID' })
);
});

//Login Restaurant Owner
router.post('/Login',function(req,res){
 
});

//delete the Restaurant
router.delete('/delete/:id',function(res,req){
Restaurant.remove({Restaurant_Id:req.body.id},function(err) {
if(err) throw err;
res.status(200).json("Restaurant Sucessfully Deleted");  
});
});

module.exports = router;