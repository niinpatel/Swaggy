const express = require("express");
const Router = express.Router();
const path = require("path");
const passport = require("passport");
const gravatar = require("gravatar");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const crypto = require("crypto");

const Customer = require("../models/customer");
const keys = require("../config.js");

Router.route("/register")
  .get((req, res, next) => {
    res.sendFile(path.join(__dirname + "/../views/customerregister.html"));
  })
  .post((req, res, next) => {
    Customer.findOne({ Customer_Email: req.body.Customer_Email })
      .then(user => {
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
          crypto.randomBytes(16, (err, buff) => {
            if (err) return res.status(500).json(err);
            newCustomer.Customer_Token = buff.toString("hex");
            newCustomer.save(err => {
              if (err) {
                return res.status(400).json(err);
              } else {
                res.json(newCustomer);

                // Send Confirmation Email To The Customer
                nodemailer.createTestAccount((err, account) => {
                  // create reusable transporter object using the default SMTP transport
                  let transporter = nodemailer.createTransport({
                    host: "smtp.ethereal.email",
                    port: 587,
                    secure: false, // true for 465, false for other ports
                    auth: {
                      user: account.user, // generated ethereal user
                      pass: account.pass // generated ethereal password
                    }
                  });

                  let confirmationURL =
                    keys.url + "/verify/" + newCustomer.Customer_Token;
                  let html =
                    "<p><b>Hey There, </b><p><p>Welcome to Swaggy. You are some step away from activating your account.</p><a href='" +
                    confirmationURL +
                    "'>Click Here To Confirm Your Email </a><p>Or copy-paste below link in your browser: </p><a href='" +
                    confirmationURL +
                    "'>" +
                    confirmationURL +
                    "</a>"; // html body of email
                  // setup email data with unicode symbols
                  let mailOptions = {
                    from: '"Swaggy " <noreply@swaggy.com>', // sender address
                    to: newCustomer.Customer_Email, // list of receivers
                    subject: "Welcome To Swaggy", // Subject line
                    html
                  };
                  // send mail with defined transport object
                  transporter.sendMail(mailOptions, (error, info) => {
                    if (error) {
                      return console.log(error);
                    }
                    console.log("Message sent: %s", info.messageId);
                    // Preview only available when sending through an Ethereal account
                    console.log(
                      "Preview URL: %s",
                      nodemailer.getTestMessageUrl(info)
                    );
                    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
                    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
                  });
                });
              }
            });
          });
        }
      })
      .catch(e => res.status(400).json(e));
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
  "/verify/:token",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Customer.findById(req.user.id).then(customer => {
      if (customer.Customer_Active) {
        return res
          .status(400)
          .json({ error: "No need. Your account is already active." });
      }
      const tokenIsValid = customer.Customer_Token === req.params.token;

      if (tokenIsValid) {
        customer.Customer_Active = true;
        customer
          .save()
          .then(() => res.json({ success: true }))
          .catch(e => res.status(400).json(e));
      } else {
        return res.status(401).json({ error: "Invalid Token" });
      }
    });
  }
);

Router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json(req.user);
  }
);

module.exports = Router;
