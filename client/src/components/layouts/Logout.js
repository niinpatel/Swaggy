import React, { Component } from "react";

class Logout extends Component {
  logout = () => {
    localStorage.removeItem("jwt");
  };
  render() {
    return (
      <a onClick={this.logout} href="/">
        <i className="zmdi zmdi-account-o" />
        Logout
      </a>
    );
  }
}

export default Logout;
