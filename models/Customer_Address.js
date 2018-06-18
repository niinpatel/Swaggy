const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CustomerAddressSchema = new Schema ({

Customer_Address_ID:{
type:String,
required:true,
index:{unique:true}
},
Customer_Customer_ID:{
  type:Schema.Types.ObjectId,
  ref:'Customer'
},
Address_Locality:{
  type:String
},
Address_City:{
  type:String
},
Address_Pincode:{
  type:Number
}
});

module.exports = mongoose.model('Customer_Address', CustomerAddressSchema);