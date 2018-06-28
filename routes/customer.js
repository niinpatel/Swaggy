const express = require("express");
const Router = express.Router();
const path = require("path");
const passport = require("passport");
const gravatar = require("gravatar");
const jwt = require("jsonwebtoken");

const Customer = require("../models/customer");
const keys = require("../config.json");

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
  .post((req, res, next) => {
    const Customer_Email = req.body.Customer_Email;
    const Customer_Password = req.body.Customer_Password;

    Customer.findOne({ Customer_Email }).then(user => {
      if (!user) {
        return res.status(400).json({ "Error Message": "Email ID not found " });
      } else if (user.comparePassword(Customer_Password)) {
        const payload = {
          id: user.id,
          Customer_Name: user.Customer_Name,
          Customer_Image: user.Customer_Image
        };
        jwt.sign(
          payload,
          keys.secret,
          {
            expiresIn: 3600
          },
          (err, token) => {
            res.json({ Success: true, token: "Bearer " + token });
          }
        );
      } else {
        return res.status(400).json({ "Error Message": "Password Incorrect" });
      }
    });
  });

Router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json(req.user);
  }
);

module.exports = Router;
