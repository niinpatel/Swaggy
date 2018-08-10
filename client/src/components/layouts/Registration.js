import React, { Component } from "react";

import axios from "axios";
class Registration extends Component {
  constructor() {
    super();
    this.state = {
      Customer_Name: "",
      Customer_Email: "",
      Customer_Password: "",
      Customer_Password2: "",
      Customer_Mobile: "",
      error: "",
      done: false
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const newCustomer = {
      Customer_Name: this.state.Customer_Name,
      Customer_Email: this.state.Customer_Email,
      Customer_Password: this.state.Customer_Password,
      Customer_Password2: this.state.Customer_Password2,
      Customer_Mobile: this.state.Customer_Mobile
    };
    if (this.validationErrors(newCustomer)) {
      this.setState({
        error: this.validationErrors(newCustomer)
      });
    } else {
      axios
        .post("/customer/register", newCustomer)
        .then(res => {
          this.setState({
            done: true
          });
        })
        .catch(err => {
          this.setState({
            error: JSON.stringify(err.response.data)
          });
        });
    }
  }

  validationErrors = newCustomer => {
    if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/.test(
        newCustomer.Customer_Password
      )
    ) {
      return "Pasword should be Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character";
    }
    if (newCustomer.Customer_Password !== newCustomer.Customer_Password2) {
      return "Passwords don't match";
    }
    if (!/^(\+\d{1,3}[- ]?)?\d{10}$/.test(newCustomer.Customer_Mobile)) {
      return "Please enter a valid mobile number";
    }
    return false;
  };

  render() {
    return this.state.done ? (
      <div>
        <p>
          You have been registered. Please check your email for further
          instructions. <a href="/">Click here</a> to Login
        </p>
      </div>
    ) : (
      <div
        className="accountbox__register tab-pane fade"
        id="profile"
        role="tabpanel"
        aria-labelledby="profile-tab"
      >
        <form onSubmit={this.onSubmit}>
          <div className="single-input">
            <input
              className="cr-round--lg"
              type="text"
              placeholder="User name"
              name="Customer_Name"
              value={this.state.Customer_Name}
              onChange={this.onChange}
            />
          </div>
          <div className="single-input">
            <input
              className="cr-round--lg"
              type="email"
              placeholder="Email address"
              name="Customer_Email"
              value={this.state.Customer_Email}
              onChange={this.onChange}
              required
            />
          </div>
          <div className="single-input">
            <input
              className="cr-round--lg"
              type="password"
              placeholder="Password"
              name="Customer_Password"
              value={this.state.Customer_Password}
              onChange={this.onChange}
              required
            />
          </div>
          <div className="single-input">
            <input
              className="cr-round--lg"
              type="password"
              placeholder="Confirm password"
              name="Customer_Password2"
              value={this.state.Customer_Password2}
              onChange={this.onChange}
              required
            />
          </div>
          <div className="single-input">
            <input
              className="cr-round--lg"
              type="text"
              placeholder="Phone Number"
              name="Customer_Mobile"
              value={this.state.Customer_Mobile}
              onChange={this.onChange}
              required
            />
          </div>
          <div>{this.state.error && <p>{this.state.error}</p>}</div>
          <div className="single-input">
            <button type="submit" className="food__btn">
              <span>Sign Up</span>
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Registration;
