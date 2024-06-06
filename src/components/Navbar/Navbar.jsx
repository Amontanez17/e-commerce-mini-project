// import React from 'react'
// import "./Navbar.css";

function Navbar() {
  return (
    <header className="Header" id="Header">
      <nav className="Navbar">
        <img className="webLogo" src="../src/assets/Back_Market.png"></img>
        {/* <h1>Backmarket</h1> */}
        <ui>
          <li>
            <a href="#home"></a>
          </li>
          <li>
            <a href="#inventory"></a>
          </li>
          <li>
            <a href="#about"></a>
          </li>
        </ui>
      </nav>
    </header>
  );
}

export default Navbar;
