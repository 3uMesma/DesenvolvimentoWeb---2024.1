import "./Navbar.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import astrocariri_logo from "../../../images/astrocariri-logo.png";

function NavbarPDF() {
  return (
    <div className="header-pdf">
      <div className="navbar-header-pdf">
        <div className="navbar-left-header-pdf">
          <Link to="/" className="navbar-link-pdf">
            <img
              src={astrocariri_logo}
              alt="astrocariri logo que é o símbolo do Cariri, com várias estrelas dentro e um anel de saturno ao redor"
              className="navbar-icon-main-pdf"
            ></img>
          </Link>
          <Link to="/" className="navbar-link-pdf">
            <div className="navbar-title-pdf">ASTROCARIRI</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavbarPDF;
