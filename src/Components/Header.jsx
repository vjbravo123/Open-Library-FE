import React, { useState } from "react";
import "../css/Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <div className="logo">
        <i className="fa-solid fa-ghost"></i>
        <h2>Bloopers</h2>
      </div>

      <div className="search">
        <input type="text" placeholder="Search" />
        <i className="fa-sharp fa-solid fa-magnifying-glass searchicon"></i>
      </div>

      {/* Hamburger / Close Icon */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <i className={menuOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
      </div>

      {/* Nav Links */}
      <div className={`links ${menuOpen ? "open" : ""}`}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
