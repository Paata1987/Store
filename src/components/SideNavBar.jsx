import { Link } from "react-router-dom";
import React from "react";

const SideNavBar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="container-fluid">
          <button
            className="sidenav-toggle rounded  m-2 border-0"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon "></span>
          </button>
        </div>
      </nav>
      <div
        className="offcanvas offcanvas-start"
        id="navbarToggleExternalContent"
        data-bs-dismiss="offcanvas"
      >
        <button
          type="button "
          className="btn-close "
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
        <div className="offcanvas-header m-2">
          <h5 className="offcanvas-title row menu">
            <img
              src="https://raw.githubusercontent.com/Paata1987/Store/main/src/components/87f5485fd81b4c7da0f1e71b2522eee6.png"
              className="logo"
              alt="Dinara Logo"
            />
            <Link
              className="m-2 p-2"
              to="/registration"
            >
              {" "}
              Registration{" "}
            </Link>
            <Link
              className="m-2 p-2"
              to="/"
            >
              {" "}
              Home{" "}
            </Link>
            <Link
              className="m-2 p-2"
              to="/about"
            >
              {" "}
              About{" "}
            </Link>
            <Link
              className="m-2 p-2"
              to="/contacts"
            >
              {" "}
              Contact{" "}
            </Link>
            <Link
              className="m-2 p-2"
              to="/logaut"
            >
              {" "}
              Logout{" "}
            </Link>
          </h5>
        </div>
        <div className="offcanvas-body">
          <p>
            Try scrolling the rest of the page to see this option in action.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SideNavBar;
