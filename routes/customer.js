const express = require("express");
const Router = express.Router();
const path = require("path");
const passport = require("passport");
const gravatar = require("gravatar");
const passportConfig = require("./CustomerPassport.js");
const Customer = require("../models/customer");

Router.route("/register")
  .get((req, res, next) => {
    res.sendFile(path.join(__dirname + "/../views/customerregister.html"));
  })
  .post((req, res, next) => {
    Customer.findOne({ Customer_Email: req.body.Customer_Email }).then(user => {
      if (user) {
        return res
          .status(400)
          .json({ "Error Message": "Email Already Exists" });
      } else {
        const avatar = gravatar.url(req.body.Customer_Email, {
          s: "200", //size
          r: "pg", // Rating
          d: "mm" //Default
        });
        const newCustomer = new Customer();
        newCustomer.Customer_Name = req.body.Customer_Name;
        newCustomer.Customer_Email = req.body.Customer_Email;
        newCustomer.Customer_Mobile = req.body.Customer_Mobile;
        newCustomer.Customer_Password = req.body.Customer_Password;
        newCustomer.Customer_Image = avatar;
        newCustomer.save(err => {
          if (err) {
            throw err;
          } else {
            res.json(newCustomer);
          }
        });
      }
    });
  });

Router.route("/login")
  .get((req, res, next) => {
    res.sendFile(path.join(__dirname + "/../views/customerlogin.html"));
  })
  .post(
    passport.authenticate("local-login", {
      successRedirect: "/customer/register",
      failureRedirect: "/customer/login"
    })
  );

module.exports = Router;
