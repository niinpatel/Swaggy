var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var driverSchema = new Schema({
    driverId: {
        type: String,
        required: true,
        index: { unique: true }
    },
    driverEmail : {
        type: String,
        require: 'Email Address is required',
    },
    driverFirstName: {
        type: String,
        required: true,
        match : /^[a-z ,.'-]{1,25}$/i
    },
    driverLastName: {
        type: String,
        required: true,
        match : /^[a-z ,.'-]{1,25}$/i
    },
    driverPhoneNumber: {
        type: String,
        required: true,
        index: { unique: true },
        match : /^[0-9]{10}$/
    },
    password: {
        type: String,
        required: true
    },
    confirmPassword: {
        type: String,
        required: true
    },
    driverAddress: {
        type: String,
        required: true,
        match : /^[a-z 0-9,.'-]{20,300}$/i
    },
    preferedDeliveryArea :  [{
        id: {type: String, required : true},
        AreaName : {type: String, required : true}
    }],
    isOnline : {type : Boolean}
});

module.exports = mongoose.model('driver',driverSchema);