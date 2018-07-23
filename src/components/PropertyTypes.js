import React, { Component } from "react";
import { Link, Routes } from "react-router-dom";
import { connect } from "react-redux";
import { fetchProperty } from "../actions/index";

import NavBar from "./NavBar";

class PropertyTypes extends Component {
  componentDidMount() {
    this.props.fetchProperty();
  }

  componentDidUpdate() {
    console.log("Props", this.props);
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col">
            <h3>PropertyTypes Space</h3>
            <Link to="/">Back To Root</Link>
          </div>
          <div className="col">
            <p>Data</p>
            <p>Data</p>
            <p>Data</p>
            <p>Data</p>
            <p>Data</p>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { lattice: state.lattice };
}

export default connect(
  mapStateToProps,
  { fetchProperty }
)(PropertyTypes);
