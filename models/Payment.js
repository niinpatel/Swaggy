const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Payment = new Schema({

Payment_Id:{
type:Schema.Types.ObjectId,
ref:'Order',
required:true,
index:{unique:true}
},
Payment_Type:{
type:String  
},
Amount:{
type:Number    
}
});

module.exports = mongoose.model('Payment', PaymentSchema);