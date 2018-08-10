import React, { Component } from "react";
import "./App.css";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Verify from "./components/Verify";
import HomePage from "./components/HomePage";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import Login from "./components/layouts/Login";
import Registration from "./components/layouts/Registration";
import jwt_decode from "jwt-decode";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customer: null
    };
  }

  componentDidMount() {
    if (localStorage.getItem("jwt")) {
      this.setState({
        customer: jwt_decode(
          JSON.parse(localStorage.getItem("jwt")).token.split(" ")[1]
        )
      });
    }
  }

  render() {
    return (
      <BrowserRouter>
        <div className="wrapper" id="wrapper">
          <Navbar customer={this.state.customer} />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/verify/:token" component={Verify} />
          </Switch>
          <Footer />
          <div className="accountbox-wrapper">
            <div className="accountbox text-left">
              <ul className="nav accountbox__filters" id="myTab" role="tablist">
                <li>
                  <a
                    className="active"
                    id="log-tab"
                    data-toggle="tab"
                    href="#log"
                    role="tab"
                    aria-controls="log"
                    aria-selected="true"
                  >
                    Login
                  </a>
                </li>
                <li>
                  <a
                    id="profile-tab"
                    data-toggle="tab"
                    href="#profile"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                  >
                    Register
                  </a>
                </li>
              </ul>
              <div className="accountbox__inner tab-content" id="myTabContent">
                <Login />
                <Registration />
                <span className="accountbox-close-button">
                  <i className="zmdi zmdi-close" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
