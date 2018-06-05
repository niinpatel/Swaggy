var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var restaurantSchema = new Schema({

    restaurantId : {type : String, required: true, index: {unique : true}},
    restaurantInfo : {
        restaurantName :{ type: String, required: true},
        restaurantPhoneNumber: { type: String, required: true },
        restaurantEmail: { type: String, required: true},
        restaurantGeoLocation: { type: String, required: true },
        restaurantAddress : { type: String, required: true},
        AverageRating : { type: String},
        MinimumOrderPrice : { type: String},
        DeliveryFee : { type: String, required: true},
        AverageDeliveryTime : { type: String},
        OpenStatus : { type: Boolean, required: true},
        reviewEnabled : { type: Boolean,default: false},

        deliverable_area :  [{
            id: {type: String, required : true},
            AreaName : {type: String, required : true}
        }],
        ratings : [{type : Number}],
        restaurantTimings : [{
            day : {type : String, required: true},
            timings: {type : String, required: true}
        }],

        MenuCategories : [{
          categoryId : {type : String, required : true},
          categoryName : {type : String},
          menuItems : [{
              menuItemId : {type: String, require : true},
              menuItemName : {type : String},
              menuItemDesc : {type : String},
              menuItemImages : [{type : String}],
              tags : [{type : String}]
          }]
        }]
    }

});

module.exports = mongoose.model('Restaurant',restaurantSchema);