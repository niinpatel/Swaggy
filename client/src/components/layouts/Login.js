import React, { Component } from "react";
import Axios from "axios";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false,
      error: "",
      Customer_Email: "",
      Customer_Password: ""
    };
  }

  onChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    Axios.post("/customer/login", this.state)
      .then(res => {
        localStorage.setItem("jwt", JSON.stringify(res.data));
        this.setState({ done: true });
      })
      .catch(err =>
        this.setState({ error: JSON.stringify(err.response.data) })
      );
  };

  render() {
    return this.state.done ? (
      window.location.reload()
    ) : (
      <div
        className="accountbox__login tab-pane fade show active"
        id="log"
        role="tabpanel"
        aria-labelledby="log-tab"
      >
        <form onSubmit={this.onSubmit}>
          <div className="single-input">
            <input
              className="cr-round--lg"
              type="email"
              placeholder="User name or email"
              value={this.state.Customer_Email}
              name="Customer_Email"
              onChange={this.onChange}
              required
            />
          </div>
          <div className="single-input">
            <input
              className="cr-round--lg"
              type="password"
              placeholder="Password"
              value={this.state.Customer_Password}
              name="Customer_Password"
              onChange={this.onChange}
              required
            />
          </div>
          <div>{this.state.error && <p>{this.state.error}</p>}</div>
          <div className="single-input">
            <button type="submit" className="food__btn">
              <span>Go</span>
            </button>
          </div>
          <div className="accountbox-login__others">
            <h6>Or login with</h6>
            <div className="social-icons">
              <ul>
                <li className="facebook">
                  <a href="https://www.facebook.com/">
                    <i className="fa fa-facebook" />
                  </a>
                </li>
                <li className="twitter">
                  <a href="https://twitter.com/">
                    <i className="fa fa-twitter" />
                  </a>
                </li>
                <li className="pinterest">
                  <a href="/">
                    <i className="fa fa-google-plus" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
