import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-aut">
            <li className="nav-item active">
              <Link className="nav-link" to="/propertytypes">
                Props!
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/entitytypes">
                Ent!
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/associationtypes">
                Ass!
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
