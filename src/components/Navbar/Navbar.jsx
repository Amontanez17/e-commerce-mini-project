// import React from 'react'
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="Header" id="Header">
      <nav className="Navbar">
      <Link to={"/"}>
        <p className="serviceName">
          <img className="webLogo" src="../src/assets/squirrel2.png"></img>
          Squirrel e-Shop Admin
        </p> </Link>
        {/* <h1>Backmarket</h1> */}
        <div className="nav-link-container">
          <ul>
            <Link to={"/"}>
              <li>
                <img
                  className="dashboardLogo"
                  src="../src/assets/dashboardlogo.svg"
                ></img>
                Dashboard
              </li>
            </Link>
            <Link to={"/additem"}>
              <li>
                <img
                  className="manageLogo"
                  src="../src/assets/managelogo.svg"
                ></img>
                Add Item
              </li>{" "}
            </Link>
            <Link to={"/about"}>
              <li>
                <img
                  className="aboutLogo"
                  src="../src/assets/aboutlogo.svg"
                ></img>
                About
              </li>
            </Link>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
