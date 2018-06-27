import React, { Component } from "react";

export default class MainSection extends Component {
  render() {
    return (
      <section className="food__special__offer bg--white section-padding--lg">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="section__title title__style--2 service__align--center">
                <h2 className="title__line">Our Special Offer</h2>
                <p>The process of our service </p>
              </div>
            </div>
          </div>
          <div className="row mt--40">
            <div className="col-md-6 col-sm-12 col-lg-3">
              <div className="food__offer text-center foo">
                <div className="offer__thumb poss--relative">
                  <img
                    src="images/product/offer-product/1.jpg"
                    alt="offer images"
                  />
                  <div className="offer__product__prize">
                    <span>$25</span>
                  </div>
                </div>
                <div className="offer__details">
                  <h2>
                    <a href="menu-details.html">Pastry Combo Pack</a>
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor.
                  </p>
                  <div className="offer__btn">
                    <a
                      className="food__btn grey--btn mid-height"
                      href="menu-details.html"
                    >
                      Order Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 col-lg-3">
              <div className="food__offer text-center foo">
                <div className="offer__thumb poss--relative">
                  <img
                    src="images/product/offer-product/2.jpg"
                    alt="offer images"
                  />
                  <div className="offer__product__prize">
                    <span>$25</span>
                  </div>
                </div>
                <div className="offer__details">
                  <h2>
                    <a href="menu-details.html">Mixed Fruits Pie</a>
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor.
                  </p>
                  <div className="offer__btn">
                    <a
                      className="food__btn grey--btn mid-height"
                      href="menu-details.html"
                    >
                      Order Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 col-lg-3">
              <div className="food__offer text-center foo">
                <div className="offer__thumb poss--relative">
                  <img
                    src="images/product/offer-product/3.jpg"
                    alt="offer images"
                  />
                  <div className="offer__product__prize">
                    <span>$25</span>
                  </div>
                </div>
                <div className="offer__details">
                  <h2>
                    <a href="menu-details.html">Wheat Bread</a>
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor.
                  </p>
                  <div className="offer__btn">
                    <a
                      className="food__btn grey--btn mid-height"
                      href="menu-details.html"
                    >
                      Order Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 col-lg-3">
              <div className="food__offer text-center foo">
                <div className="offer__thumb poss--relative">
                  <img
                    src="images/product/offer-product/4.jpg"
                    alt="offer images"
                  />
                  <div className="offer__product__prize">
                    <span>$25</span>
                  </div>
                </div>
                <div className="offer__details">
                  <h2>
                    <a href="menu-details.html">Wheat Bread</a>
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor.
                  </p>
                  <div className="offer__btn">
                    <a
                      className="food__btn grey--btn mid-height"
                      href="menu-details.html"
                    >
                      Order Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="banner__area mt--40">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-3 col-sm-12">
                <div className="banner--2 foo">
                  <div className="banner__thumb">
                    <a href="/">
                      <img
                        src="images/banner/bann-2/1.jpg"
                        alt="banner images"
                      />
                    </a>
                  </div>
                  <div className="banner__hover__action banner__left__bottom">
                    <div className="banner__hover__inner">
                      <span>20%</span>
                      <p>off for festival</p>
                      <h2 className="coffee-text">off for festival</h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 col-sm-12">
                <div className="banner--2 foo">
                  <div className="banner__thumb">
                    <a href="/">
                      <img
                        src="images/banner/bann-2/2.jpg"
                        alt="banner images"
                      />
                    </a>
                  </div>
                  <div className="banner__hover__action banner__left__top">
                    <div className="banner__hover__inner">
                      <h4>colorful</h4>
                      <h2 className="pink-text">donut’s</h2>
                      <p>get it till the stock full</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-6 col-sm-12">
                <div className="banner--2 foo">
                  <div className="banner__thumb">
                    <a href="/">
                      <img
                        src="images/banner/bann-2/3.jpg"
                        alt="banner images"
                      />
                    </a>
                  </div>
                  <div className="banner__hover__action banner__right__bottom">
                    <div className="banner__hover__inner">
                      <h4 className="vanilla">vanilla</h4>
                      <h2 className="pink-text">MAFFIN</h2>
                      <p>Lovely Food for Food lover</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
