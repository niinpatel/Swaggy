const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CustomerSchema = new Schema({
Customer_ID:{
type:Schema.Types.ObjectId,
ref:'Customer_Address',
ref:'Wallet'
},
Customer_Name:{
  type:String
},
Customer_Email:{
  type:String
},
Customer_Phone:{
  type:Number
},
Customer_Password:{
  type:String
},
Customer_Image:{
  type:String
},
Customer_Token:{
  type:String
},
Customer_Active:{
  type:Boolean
},
Bookmark_Address:{
type:Schema.Types.ObjectId,
ref:'Bookmark_Address'
}
});

module.exports = mongoose.model('Customer', CustomerSchema);