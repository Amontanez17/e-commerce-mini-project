// import React from 'react'
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="Header" id="Header">
      <nav className="Navbar">
        <p className="serviceName">
          <img className="webLogo" src="../src/assets/squirrel1.png"></img>
        Squirrel e-Shop Admin</p>
        {/* <h1>Backmarket</h1> */}
        <div className="nav-link-container">
          <ul>
            <Link to={"/"}>
            
              <li>
                <img className="dashboardLogo" src="../src/assets/dashboardlogo.svg"></img>
                Dashboard</li>
            </Link>
            <li>
            <img className="manageLogo" src="../src/assets/managelogo.svg"></img>
              <a href="#inventory">Manage</a>

            </li>
            <li>
            <img className="aboutLogo" src="../src/assets/aboutlogo.svg"></img>
              <a href="#about">About</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
