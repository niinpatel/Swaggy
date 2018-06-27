import React, { Component } from "react";

class Slider extends Component {
  render() {
    return (
      <div className="slider__area slider--three">
        <div className="slider__activation--1">
          <div className="slide slider__fixed--height bg-image--11 poss--relative">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <div className="slider__content">
                    <div className="slider__inner">
                      <h1>“Swaggy”</h1>
                      <div className="slider__btn">
                        <a className="food__btn" href="/">
                          Learn More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="slide__pizza--2 wow fadeInLeft"
              data-wow-delay="0.4s"
            >
              <img src="images/shape/sli-2.png" alt="pizza images" />
            </div>
            <div
              className="slide__pizza--3 wow fadeInRight"
              data-wow-delay="0.4s"
            >
              <img src="images/shape/sli-3.png" alt="pizza images" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Slider;
