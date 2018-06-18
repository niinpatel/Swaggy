const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const WalletSchema = new Schema({

Wallet_ID:{
type:String,
required:true,
unique:{index:true}  
},
Customer_ID:{
type:Schema.Types.ObjectId,
ref:'Customer'
},
Amount:{
type:int
}  
});

module.exports = mongoose.model('WalletSchema', WalletSchema);