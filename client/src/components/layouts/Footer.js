import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer class="footer__area footer--2">
        <div class="copyright bg__cat--7">
          <div class="container">
            <div class="row">
              <div class="col-lg-12 col-md-12 col-sm-12">
                <div class="copyright__inner">
                  <div class="cpy__right--left">
                    <p>
                      @All Right Reserved.<a href="/">Swaggy</a>
                    </p>
                  </div>
                  <div class="cpy__right--right">
                    <a href="/">
                      <img src="images/icon/shape/2.png" alt="payment images" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
export default Footer;
