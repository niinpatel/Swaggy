const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AdminSchema = new Schema ({

Admin_Id:{
type:Number,
required:true,
index:{unique:true},
},
Admin_Email:{
  type:String
},
Admin_Password:{
  type:String
},
Order_Order_Id:{
type:Schema.Types.ObjectId,
refer:'Order'
}
});

module.exports = mongoose.model('Admin', AdminSchema);