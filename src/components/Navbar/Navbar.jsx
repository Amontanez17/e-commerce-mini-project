// import React from 'react'
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="Header" id="Header">
      <nav className="Navbar">
        <img className="webLogo" src="../src/assets/Back_Market.png"></img>
        {/* <h1>Backmarket</h1> */}
        <div className="nav-link-container">
          <ul>
            <Link to={"/"}>
              <li>Dashboard</li>
            </Link>
            <li>
              <a href="#inventory">Manage</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
