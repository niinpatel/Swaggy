const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CategorySchema = new Schema({
 Category_ID:{
 type:Schema.Types.ObjectId,
 ref:'Menu_Items' 
 },
 Category_Name:{
 type:String
 } 
});

module.exports = mongoose.model('Category', CategorySchema);