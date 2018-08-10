import React, { Component } from "react";
import Axios from "axios";

class Verify extends Component {
  constructor(props) {
    super(props);

    this.state = {
      verified: false,
      error: ""
    };
  }
  componentDidMount() {
    let token = this.props.match.params.token;
    let authentication = JSON.parse(localStorage.getItem("jwt"));
    if (authentication) {
      Axios.get("/customer/verify/" + token, {
        headers: { Authorization: authentication.token }
      })
        .then(() => {
          this.setState({
            verified: true
          });
        })
        .catch(err => {
          this.setState({
            error: err.response.data.error
          });
        });
    } else {
      this.setState({
        error: "Please Log In First"
      });
    }
  }

  render() {
    return (
      <div className="container">
        {(this.state.error && (
          <p className="text-danger">{this.state.error}</p>
        )) ||
          (this.state.verified && (
            <p className="text-dark">Awesome! Your account is now active.</p>
          ))}
      </div>
    );
  }
}

export default Verify;
