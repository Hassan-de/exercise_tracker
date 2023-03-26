import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../images/logo1.png"

const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
      <NavLink className="navbar-brand" to="#">
        <img src={logo} alt="Logo" width="30" height="30" class="d-inline-block align-text-top"></img>
      </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link active nav-link-gap" aria-current="page" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link nav-link-gap" to="/Signin">Sign in</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link nav-link-gap" to="/Signup">Sign up</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  );
}

export default Navbar;


