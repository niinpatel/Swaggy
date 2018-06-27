import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/layouts/Navbar";
import Slider from "./components/layouts/Slider";
import MainSection from "./components/layouts/MainSection";
import Footer from "./components/layouts/Footer";
import Login from "./components/layouts/Login";
import Registration from "./components/layouts/Registration";

class App extends Component {
  render() {
    return (
      <div className="wrapper" id="wrapper">
        <Navbar />
        <Slider />
        <MainSection />
        <Footer />
        <div class="accountbox-wrapper">
          <div class="accountbox text-left">
            <ul class="nav accountbox__filters" id="myTab" role="tablist">
              <li>
                <a
                  class="active"
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
            <div class="accountbox__inner tab-content" id="myTabContent">
              <Login />
              <Registration />
              <span class="accountbox-close-button">
                <i class="zmdi zmdi-close" />
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;