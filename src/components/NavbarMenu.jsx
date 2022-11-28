import React from "react";
import { Link } from "react-router-dom";

const NavbarMenu = () => {
  return (
    <nav className="row d-flex p-2">
      <div className="col Link">
        <Link to="/"> Home </Link>
      </div>
      <div className="col  Link">
        <Link to="/about"> About </Link>
      </div>
      <div className="col Link ">
        <img
          src="https://raw.githubusercontent.com/Paata1987/Store/main/src/components/87f5485fd81b4c7da0f1e71b2522eee6.png"
          className="me-2"
          alt="Dinara Logo"
        />
      </div>
      <div className="col Link ">
        {" "}
        <Link to="/contacts"> Contact </Link>
      </div>
      <div className="col Link">
        <Link to="/registration"> Registration </Link>
      </div>
    </nav>
  );
};

export default NavbarMenu;
