import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <header class="htc__header bg--white">
        <div
          id="sticky-header-with-topbar"
          class="mainmenu__wrap sticky__header"
        >
          <div class="container">
            <div class="row">
              <div class="col-lg-2 col-sm-4 col-md-6 order-1 order-lg-1">
                <div class="logo">
                  <a href="index.html">
                    <img src="images/logo/foody.png" alt="logo images" />
                  </a>
                </div>
              </div>
              <div class="col-lg-9 col-sm-4 col-md-2 order-3 order-lg-2">
                <div class="main__menu__wrap">
                  <nav class="main__menu__nav d-none d-lg-block">
                    <ul class="mainmenu">
                      <li class="drop">
                        <a href="index.html">Home</a>
                      </li>
                      <li>
                        <a href="/">Menu 1</a>
                      </li>
                      <li class="drop">
                        <a href="/">Menu 2</a>
                      </li>
                      <li>
                        <a href="/">Menu 3</a>
                      </li>
                      <li class="drop">
                        <a href="/">Menu 4</a>
                      </li>
                      <li class="drop">
                        <a href="/">Menu 5</a>
                      </li>
                      <li>
                        <a href="/">Menu 6</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div class="col-lg-1 col-sm-4 col-md-4 order-2 order-lg-3">
                <div class="header__right d-flex justify-content-end">
                  <div class="log__in">
                    <a class="accountbox-trigger" href="/">
                      <i class="zmdi zmdi-account-o" />Sign Up
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="mobile-menu d-block d-lg-none" />
          </div>
        </div>
      </header>
    );
  }
}

export default Navbar;
