import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <header className="htc__header bg--white">
        <div
          id="sticky-header-with-topbar"
          className="mainmenu__wrap sticky__header"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-2 col-sm-4 col-md-6 order-1 order-lg-1">
                <div className="logo">
                  <a href="index.html">
                    <img src="images/logo/foody.png" alt="logo images" />
                  </a>
                </div>
              </div>
              <div className="col-lg-9 col-sm-4 col-md-2 order-3 order-lg-2">
                <div className="main__menu__wrap">
                  <nav className="main__menu__nav d-none d-lg-block">
                    <ul className="mainmenu">
                      <li className="drop">
                        <a href="index.html">Home</a>
                      </li>
                      <li>
                        <a href="/">Menu 1</a>
                      </li>
                      <li className="drop">
                        <a href="/">Menu 2</a>
                      </li>
                      <li>
                        <a href="/">Menu 3</a>
                      </li>
                      <li className="drop">
                        <a href="/">Menu 4</a>
                      </li>
                      <li className="drop">
                        <a href="/">Menu 5</a>
                      </li>
                      <li>
                        <a href="/">Menu 6</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-lg-1 col-sm-4 col-md-4 order-2 order-lg-3">
                <div className="header__right d-flex justify-content-end">
                  <div className="log__in">
                    <a className="accountbox-trigger" href="/">
                      <i className="zmdi zmdi-account-o" />Sign Up
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mobile-menu d-block d-lg-none" />
          </div>
        </div>
      </header>
    );
  }
}

export default Navbar;
