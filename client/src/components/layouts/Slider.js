import React, { Component } from "react";

class Slider extends Component {
  render() {
    return (
      <div class="slider__area slider--three">
        <div class="slider__activation--1">
          <div class="slide slider__fixed--height bg-image--11 poss--relative">
            <div class="container">
              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12">
                  <div class="slider__content">
                    <div class="slider__inner">
                      <h1>“Swaggy”</h1>
                      <div class="slider__btn">
                        <a class="food__btn" href="/">
                          Learn More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="slide__pizza--2 wow fadeInLeft" data-wow-delay="0.4s">
              <img src="images/shape/sli-2.png" alt="pizza images" />
            </div>
            <div class="slide__pizza--3 wow fadeInRight" data-wow-delay="0.4s">
              <img src="images/shape/sli-3.png" alt="pizza images" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Slider;
