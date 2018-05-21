var express = require('express');
var bodyParser = require('body-parser');
var db = require('./dbconnect');
var Order = require('./models/order');
var order = require('./routes/order');
var router = express.Router();

var app = express();

//middleware
app.use(bodyParser.json());

app.use(bodyParser.text());
app.use(bodyParser.urlencoded({extended: true}));

/* app.put('/:id', function (req, res) {
    Order.findById(req.params.id, function(err, user) {
        if (err) throw err;

        order.customerId = req.body.customerId;
        order.driverId = req.body.driverId;
        order.orderItems = req.body.orderItems;
        order.selectedRestaurant = req.body.selectedRestaurant;
        order.createdAt = req.body.createdAt;
        order.updatedAt = req.body.updatedAt;
        order.deletedAt = req.body.deletedAt;
        order.completed = req.body.completed;
        order.specialInstructions = req.body.specialInstructions;

            order.save(function(err) {
                if(err) throw err;
                res.json(user);
            })

    })
}) */

// In the below, in Order.remove() I have to select one of the schema property to delete an entire order
app.delete('/:id', function(req, res) {
    Order.remove({createdAt: req.params.id}, function(err) {
        if(err) {
            throw err;
        }
        res.json({"Status" : "Successfully Deleted"});
    });
});

// Use Routes
app.use('/', order);

/* app.get('/', function(req, res) {
    Order.find({}, function(err, orders) {
        if(err) throw err;
        res.json(orders);
    });
});
 */

app.listen(3232, function(err){
    if(err) throw err;
    console.log("Magic is on the way on route 3232");
});