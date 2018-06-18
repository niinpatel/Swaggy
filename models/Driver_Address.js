const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const driverSchema = new Schema({

Driver_Address_Id:{
type:String,
required:true,
index:{unique:true}
},
Driver_Driver_Id:{
type:Schema.Types.ObjectId,
ref:'Driver'
},
Driver_Locality:{
  type:String
},
Driver_City:{
  type:String
},
Driver_Pincode:{
  type:Number
}





});

module.exports = mongoose.model('Driver_Address', DriverAddressSchema);