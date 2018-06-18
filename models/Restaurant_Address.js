const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let restaurantAddressSchema = new Schema ({
    Restaurant_Address_Id: {
        type: String,
        required: true,
        index: { unique: true }
    },
    Restaurant_Restaurant_Id: {
        type:Schema.Types.ObjectId,
        ref:'Restaurants'
    },
    Address_Locality: {
        type: String
    },
    Address_City: {
        type: String
    },
    Address_Pincode: {
        type: Number
      }
})

module.exports = mongoose.model('Restaurant_Address', restaurantAddressSchema);