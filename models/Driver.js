const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const DriverSchema = new Schema({

Driver_Id:{
type:Schema.Types.ObjectId,
ref:'Driver_Address',
index:{unique:true},
required:true
},
Driver_Name:{
type:String  
},
Driver_Email:{
  type:String
},
Driver_Phone:{
 type:Number 
},
Driver_Password:{
 type:String 
},
Driver_Image:{
 type:String 
},
Driver_Token:{
  type:String
},
Driver_Active:{
type:Boolean
}

});

module.exports = mongoose.model('Driver', DriverSchema);