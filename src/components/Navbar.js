import React from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="/about">
                {props.about}
              </a>
            </li> */}
          </ul>
          {/* <div className="mx-2 my-2">
            <button
              className="bg-primary border border-0 rounded-circle mx-1"  onClick={()=>props.toggleMode('primary')}
            style={{width:'20px',height:'20px'}}></button>
            <button
              className="bg-success border border-0 rounded-circle mx-1"  onClick={()=>props.toggleMode('success')}
            style={{width:'20px',height:'20px'}}></button>
            <button
              className="bg-danger border border-0 rounded-circle mx-1"  onClick={()=>props.toggleMode('danger')}
            style={{width:'20px',height:'20px'}}></button>
            <button
              className="bg-warning border border-0 rounded-circle mx-1"  onClick={()=>props.toggleMode('warning')}
            style={{width:'20px',height:'20px'}}></button>
          </div>
          <h6 className={` text-${
              props.mode === "light" ? "dark" : "light"
            }`}>Change Theme</h6> */}
          <div
            className={`form-check form-switch text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            <input
              className="form-check-input"
              type="checkbox"
              id="flexSwitchCheckDefault"
              onClick={props.toggleMode}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              {props.btnText}
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string,
};
Navbar.defaultProps = {
  title: "Title Here",
  about: "About Us",
};
