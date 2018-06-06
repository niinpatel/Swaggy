var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var restaurantSchema = new Schema({

    restaurantId : {type : String, required: true, index: {unique : true}},
    restaurantInfo : {
        restaurantName :{ type: String, required: true},
        restaurantPhoneNumber: { type: String, required: true },
        restaurantEmail: { type: String, required: true},
        restaurantGeoLocation: { type: String},
        restaurantAddress : { type: String, required: true},
        AverageRating : { type: String},
        MinimumOrderPrice : { type: String},
        DeliveryFee : { type: String},
        AverageDeliveryTime : { type: String},
        OpenStatus : { type: Boolean},
        reviewEnabled : { type: Boolean,default: false},

        deliverable_area :  [{
            id: {type: String},
            AreaName : {type: String}
        }],
        ratings : [{type : Number}],
        restaurantTimings : [{
            day : {type : String},
            timings: {type : String}
        }],

        MenuCategories : [{
          categoryId : {type : String, required : true},
          categoryName : {type : String, required : true},
          menuItems : [{
              menuItemId : {type: String, require : true},
              menuItemName : {type : String, required: true},
              menuPrice : {type : String},
              menuItemDesc : {type : String},
              menuItemImages : [{type : String}],
              tags : [{type : String}]
          }]
        }]
    }

});

module.exports = mongoose.model('Restaurant',restaurantSchema);