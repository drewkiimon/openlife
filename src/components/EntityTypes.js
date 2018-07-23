import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

class EntityTypes extends Component {
  render() {
    return (
      <div>
        <h3>EntityTypes Space</h3>
        <Link to="/">Back To Root</Link>
      </div>
    );
  }
}

export default EntityTypes;
