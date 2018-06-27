import React, { Component } from "react";

class Login extends Component {
  render() {
    return (
      <div
        class="accountbox__login tab-pane fade show active"
        id="log"
        role="tabpanel"
        aria-labelledby="log-tab"
      >
        <form>
          <div class="single-input">
            <input
              class="cr-round--lg"
              type="text"
              placeholder="User name or email"
            />
          </div>
          <div class="single-input">
            <input
              class="cr-round--lg"
              type="password"
              placeholder="Password"
            />
          </div>
          <div class="single-input">
            <button type="submit" class="food__btn">
              <span>Go</span>
            </button>
          </div>
          <div class="accountbox-login__others">
            <h6>Or login with</h6>
            <div class="social-icons">
              <ul>
                <li class="facebook">
                  <a href="https://www.facebook.com/">
                    <i class="fa fa-facebook" />
                  </a>
                </li>
                <li class="twitter">
                  <a href="https://twitter.com/">
                    <i class="fa fa-twitter" />
                  </a>
                </li>
                <li class="pinterest">
                  <a href="/">
                    <i class="fa fa-google-plus" />
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
