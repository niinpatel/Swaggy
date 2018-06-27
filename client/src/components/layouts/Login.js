import React, { Component } from "react";

class Login extends Component {
  render() {
    return (
      <div
        className="accountbox__login tab-pane fade show active"
        id="log"
        role="tabpanel"
        aria-labelledby="log-tab"
      >
        <form>
          <div className="single-input">
            <input
              className="cr-round--lg"
              type="text"
              placeholder="User name or email"
            />
          </div>
          <div className="single-input">
            <input
              className="cr-round--lg"
              type="password"
              placeholder="Password"
            />
          </div>
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
