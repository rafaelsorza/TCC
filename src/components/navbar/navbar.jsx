import "./navbar.css";
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Link } from 'react-router-dom'; 

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);


  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src="./public/logo.png" alt="Logo" className="logo-image" />
          <span className="site-title">Vitality Vision</span>
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/ajuda" className="site-title">
              Ajuda
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contato " className="site-title">
              Contato
            </Link>
          </li>

          </ul>

        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
