const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const menuItemsSchema = new Schema({

  Menu_ID:{
  type:String,
  required:true, 
  index:{unique:true}
 },
  Item_Name:{
    type:String
  },
Category_Category_ID:{
  type:Schema.Types.ObjectId,
  ref:'Category'
},
Description:{
  type:String
},
Item_Price:{
  type:Number
},
Item_Active:{
  type:Boolean
},
Restaurant_Restaurant_ID:{
  type:Schema.Types.ObjectId,
  ref:'Restaurants'
}





});

module.exports = mongoose.model('Menu_Items', MenuItemsSchema);