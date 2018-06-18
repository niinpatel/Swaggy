const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BookmarkAddressSchema = new Schema({

Bookmark_Address_Id:{
type:Schema.Types.ObjectId,
ref:'Customer',
required:true,
index:{unique:true}
},  
Address_Type:{
type:String  
},
Landmark:{
  type:String
},
Directions:{
  type:String
},
Area:{
  type:String
},
City:{
  type:String
},
Pincode:{
  type:Number
}

});

module.exports = mongoose.model('Bookmark_Address', BookmarkAddressSchema);