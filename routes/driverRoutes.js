var express = require('express');
var router = express.Router();
var driver = require('../models/driver');
var Restaurant = require('../models/restaurant');


router.post('/register',function(req,res){
    var driver = new driver();

    let nameRegex = /^[a-z ,.'-]{1,25}$/i;
    let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let phoneNumberRegex = /^[0-9]{10}$/;
    let addressRegex = /^[a-z 0-9,.'-]{20,300}$/i;

    driver.driverId = req.body.driverId;

    driver.driverFirstName = req.body.driverFirstName;

    if(!driver.driverFirstName.match(nameRegex)){
        if(driver.driverFirstName.length > 25) throw 'first name can\'t be more than 25 characters';
        else throw 'First name invalid, no special characters allowed';
    }

    driver.driverLastName = req.body.driverLastName;
    if(!driver.driverLastName.match(nameRegex)){
        if(driver.driverLastName.length > 25) throw 'first name can\'t be more than 25 characters';
        else throw 'Last name invalid, no special characters allowed';
    }

    driver.customerEmail = req.body.customerEmail;

    driver.find({customerEmail: driver.customerEmail}, (err, driver) => {
        if(!err && driver.length){
            throw 'Email already registered';
        }
    });

    driver.phoneNumber = req.body.phoneNumber;
    driver.find({phoneNumber: driver.phoneNumber}, (err, driver) => {
        if(!err && driver.length){
            throw 'Phone Number already registered';
        }
    });
    if(!driver.phoneNumber.match(phoneNumberRegex)) throw 'Invalid phone number, enter 10 digits, no spaces';

    driver.password = req.body.password;
    driver.confirmPassword = req.body.confirmPassword;
    driver.address = req.body.address;
    if(!driver.address.match(addressRegex)) throw 'Invalid Address';

    driver.save(function(err){
        if(err) throw err;
        res.json({"Status" : "driver Saved"});
    });

});

//Home Screen for viewing all restaurants

router.get('/home', function(req, res) {
    Restaurant.find({}, function (err, restaurants) {
        if (err) {
            console.log(err)
        } else {
            console.log(restaurants);
            res.json(restaurants);
            res.end();
        }
    })
});

//View driver for viewing all restaurants

router.get('/viewDrivers', function(req, res) {
    driver.find({}, function (err, customers) {
        if (err) {
            console.log(err)
        } else {
            console.log(customers);
            res.json(customers);
            res.end();
        }
    })
});

//On selecting restaurant :restaurantId is used to find the required restaurant

router.get('/restaurantDetails/:restaurantId', function(req, res) {
    Restaurant.find({restaurantId : req.params.restaurantId}, function (err, data) {
        if (err) {
            console.log(err)
        } else {
            res.json(data);
            res.end();
        }
    })

});

/*// TEST FOR DATA RESTAURANT DATA

router.post('/restaurantDataTest',function(req,res){
    var restaurant = new Restaurant();

    restaurant.restaurantId = req.body.restaurantId;
    restaurant.restaurantName = req.body.restaurantName;
    restaurant.restaurantEmail = req.body.restaurantEmail;
    restaurant.restaurantPhoneNumber = req.body.restaurantPhoneNumber;
    restaurant.restaurantAddress = req.body.restaurantAddress;
    restaurant.restaurantGeoLocation = req.body.restaurantGeoLocation;

    restaurant.save(function(err){
        if(err) throw err;
        res.json({"Status" : "Restaurant Saved"});
    });
});*/


module.exports = router;