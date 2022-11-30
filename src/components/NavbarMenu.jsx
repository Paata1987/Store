import React from "react";
import { Link } from "react-router-dom";

const NavbarMenu = () => {
  return (
    <div className="container">
      <nav className="row ">
        <div className="col link">
          <Link to="/"> Home </Link>
        </div>
        <div className=" col link">
          <Link to="/about"> About </Link>
        </div>
        <div className="col Link">
          <img
            src="https://raw.githubusercontent.com/Paata1987/Store/main/src/components/87f5485fd81b4c7da0f1e71b2522eee6.png"
            className="col link"
            alt="Dinara Logo"
          />
        </div>
        <div className=" col Link ">
          {" "}
          <Link to="/contacts"> Contact </Link>
        </div>
        <div className="col Link">
          <Link to="/registration"> Registration </Link>
        </div>
      </nav>
    </div>
  );
};

export default NavbarMenu;
