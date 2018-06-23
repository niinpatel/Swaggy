const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const customerSchema = new Schema({
  Customer_Name: {
    type: String,
    required: [true, "Name is required"]
  },
  Customer_Email: {
    type: String,
    required: [true, "Email is required"],
    unique: [true, "Email already exists"],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please enter a valid email address"
    ]
  },
  Customer_Mobile: {
    type: String,
    required: [true, "Mobile number is required"],
    match: [/^(\+\d{1,3}[- ]?)?\d{10}$/, "Please enter a valid mobile number"]
  },
  Customer_Password: {
    type: String,
    required: [true, "Password is required"],
    match: [
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/,
      "Pasword should be Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character"
    ]
  },
  Customer_Image: {
    type: String
  },
  Customer_Address: {
    type: Schema.Types.ObjectId,
    ref: 'Customer_Address'
  },
  Customer_Token: {
    type: String
  },
  Customer_Active: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model("Customer", customerSchema,'Customer_Collection');