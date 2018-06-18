const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let restaurantsSchema = new Schema ({
    Restaurant_Id: {
        type:Schema.Types.ObjectId,
        ref:'Restaurant_Address',
        required: true,
        index: { unique: true }
    },
    Restaurant_Restaurant_Id: {
        type:Schema.Types.ObjectId,
        ref:'Restaurants'
    },
    Restaurant_Name: {
        type: String,
        required: true
    },
    Restaurant_Email: {
        type: String,
        required: true
    },
    Restaurant_Phone: {
        type: Number,
        required: true
    },
    Restaurant_Password: {
        type: String,
        required: true
      },
      Restaurant_Image: {
        type: String
      },
      Restaurant_Token: {
          type: String
      },
      Restaurant_Active: {
        type: Boolean,
      },
      Restaurant_Timings: {
          type: String
      },
      Restaurant_Delivery_Time: {
        type: String
    }
})

module.exports = mongoose.model('Restaurants', restaurantsSchema);