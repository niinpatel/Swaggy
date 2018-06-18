const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const DeliveryAddressSchema = new Schema ({
Delivery_Address_Id:{
 type:Schema.Types.ObjectId,
 ref:'Order',
 required:true,
 index:{unique:true}
},
Landmark:{
  type:String
},
Locality:{
  type:String
},
Directions:{
  type:String
},
City:{
  type:String
},
Pincode:{
  type:Number
}
});

module.exports = mongoose.model('Delivery_Address', DeliveryAddressSchema);