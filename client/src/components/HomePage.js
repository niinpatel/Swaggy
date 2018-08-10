import React, { Component } from "react";
import Slider from "./layouts/Slider";
import MainSection from "./layouts/MainSection";

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <Slider />
        <MainSection />
      </div>
    );
  }
}
