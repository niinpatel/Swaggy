import React, { Component } from "react";

class Registration extends Component {
  constructor() {
    super();
    this.state = {
      Customer_Name: "",
      Customer_Email: "",
      Customer_Password: "",
      Customer_Password2: ""
    };
    this.onChange = this.onChange.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div
        class="accountbox__register tab-pane fade"
        id="profile"
        role="tabpanel"
        aria-labelledby="profile-tab"
      >
        <form>
          <div class="single-input">
            <input
              class="cr-round--lg"
              type="text"
              placeholder="User name"
              name="Customer_Name"
              value={this.state.Customer_Name}
              onChange={this.onChange}
            />
          </div>
          <div class="single-input">
            <input
              class="cr-round--lg"
              type="email"
              placeholder="Email address"
              name="Customer_Email"
              value={this.state.Customer_Email}
              onChange={this.onChange}
            />
          </div>
          <div class="single-input">
            <input
              class="cr-round--lg"
              type="password"
              placeholder="Password"
              name="Customer_Password"
              value={this.state.Customer_Password}
              onChange={this.onChange}
            />
          </div>
          <div class="single-input">
            <input
              class="cr-round--lg"
              type="password"
              placeholder="Confirm password"
              name="Customer_Password2"
              value={this.state.Customer_Password2}
              onChange={this.onChange}
            />
          </div>
          <div class="single-input">
            <button type="submit" class="food__btn">
              <span>Sign Up</span>
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Registration;
