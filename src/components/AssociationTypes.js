import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

class AssociationTypes extends Component {
  render() {
    return (
      <div>
        <h3>AssociationTypes Space</h3>
        <Link to="/">Back To Root</Link>
      </div>
    );
  }
}

export default AssociationTypes;
