const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const OrderSchema  = new Schema({

Order_Id:{
type:Schema.Types.ObjectId,
ref:'Admin',
required:true,
index:{unique:true} 
},
Customer_Customer_Id:{
  type:Schema.Types.ObjectId,
  ref:'Customer' 
  },
Driver_Driver_Id:{
    type:Schema.Types.ObjectId,
    ref:'Driver' 
    },
Order_Id:{
      type:Schema.Types.ObjectId,
      ref:'Restaurant' 
      },
Order_Items:{

  type:Array  
},
Order_Amount:{
type:Number
},
Delivery_Charges:{
type:Number
},
Discount:{

type:Number  
  
},
Final_Amount:{
 type:Number 
},
Payment_Status:{
  type:String
},
Delivery_Address_ID:{
  type:Schema.Types.ObjectId,
  ref:'Delivery'
},
Order_Status_ID:{
  type:Schema.Types.ObjectId,
  ref:'Order_Status'
},
Payment_Payment_ID:{
  type:Schema.Types.ObjectId,
  ref:'Payment'
}
});