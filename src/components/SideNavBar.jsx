import React from "react";

const SideNavBar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
      <div
        className="offcanvas offcanvas-start"
        id="navbarToggleExternalContent"
        data-bs-dismiss="offcanvas"
      >
        <div className="offcanvas-header m-2">
          <h5 className="offcanvas-title">Backdrop with scrolling</h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <p>
            Try scrolling the rest of the page to see this option in action.
          </p>
        </div>
      </div>
      SideNavBar
    </div>
  );
};

export default SideNavBar;
