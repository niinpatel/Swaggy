const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const expressValidator = require("express-validator");
const { port, databaseUrl } = require("./config.js");
const passport = require("passport");
const cors = require("cors");

mongoose.connect(
  databaseUrl,
  err => {
    if (err) {
      throw err;
    }
    console.log("Node Server Connected to Mongo Database.");
  }
);

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(expressValidator());
app.use(cors());

app.use(passport.initialize());

require("./routes/passport")(passport);

const customerroutes = require("./routes/customer");

app.use("/customer", customerroutes);

app.listen(port, err => {
  if (err) {
    throw err;
  }
  console.log(`Server Running at port number ${port}`);
});
