/* The order schema gets
* customerId from CustomerSchema
* driverId from DriverSchema
* restaurantId from Restaurant Schema
* orderItems is a array of Id's, where the ID's are menuItemId's from restaurant Schema
* Paid Via is payment method used. On order creation this information is obtained from customerSchema
* */

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let orderSchema = new Schema ({
    customerId: {
        type: String,
        required: true,
        index: { unique: true }
    },
    restaurantId: {
        type: String,
        required: true,
        index: { unique: true }
    },
    driverId: {
        type: String,
        required: true,
        index: { unique: true }
    },
    orderItems: [{
        type : String,
    }],
    total : {type: String},
    deliveryCost : {type: String},
    paidVia : [{
        id : {type : String, required:true},
        type:{type: String, required: true}
    }],

    createdAt: {
        type: Date,
        default: new Date,
        required: true
    },
    updatedAt: {
        type: Date,
        default: new Date

    },
    deletedAt: {
        type: Date,
    },
    completed: {
        type: Boolean,
    },
    specialInstructions: {
        type: String
    }
})

module.exports = mongoose.model('Order', orderSchema);