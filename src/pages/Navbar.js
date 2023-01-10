import React from "react";
import logo from "../images/logo.svg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav class="nav" id="nav">
      <div class="nav-center">
        {/* nav header  */}
        <div class="nav-header">
          <img src={logo} class="nav-logo" alt="" />
          <button class="nav-btn" id="nav-btn">
            <i class="fas fa-bars"></i>
          </button>
        </div>
        {/* nav links  */}
        <ul class="nav-links">
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/projects">projects</Link>
          </li>
          <li>
            <Link to="/contact">contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
