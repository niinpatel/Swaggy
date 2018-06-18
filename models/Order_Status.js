const mongoose =  require('mongoose');

const Schema = mongoose.Schema;

const Order_Status = new status({

Status_ID:{
type:Schema.Types.ObjectId,
ref:'Order'
},
Status:{
 type:String 
},  
Time:{
  type:Date
}
});

module.exports = mongoose.model('Order_Address', OrderAddressSchema);