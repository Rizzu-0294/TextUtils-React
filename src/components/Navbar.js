import React from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className={` navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item active">
              <a className="nav-link" href="#" aria-current="page">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                {props.about}
              </a>
            </li>
          </ul>

          {/* <form classNameName="form-inline my-2 my-lg-0">
      <input classNameName="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button classNameName="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form> */}
          <div
            className={` d-flex ml-auto custom-control custom-switch text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            <input
              type="checkbox"
              className="custom-control-input"
              onClick={props.togglemode}
              id="customSwitch1"
            />
            <label
              className="custom-control-label"
              htmlFor="customSwitch1"
            ></label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
};
// isrequired when we mention in proptype that  this value is required to be mentioned but i didn't send it then it will throw error
Navbar.defaultProps = {
  title: "TextUtils",
  about: "About Us",
};
