import React, { Component } from "react";
import loading from "./loading.gif";
class Spinner extends Component {
  state = {};
  render() {
    return (
      <div className="text-center">
        <img src={loading} className="my-3" alt="" />
      </div>
    );
  }
}

export default Spinner;
