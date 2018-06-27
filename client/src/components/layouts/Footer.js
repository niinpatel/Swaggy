import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="footer__area footer--2">
        <div className="copyright bg__cat--7">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="copyright__inner">
                  <div className="cpy__right--left">
                    <p>
                      @All Right Reserved.<a href="/">Swaggy</a>
                    </p>
                  </div>
                  <div className="cpy__right--right">
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
