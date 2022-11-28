import React from "react";
import NavbarMenu from "./NavbarMenu";
import SideNavBar from "./SideNavBar";

const Header = () => {
  return (
    <div>
      <div className="row navbar">
        <div className="col col-2">
          <SideNavBar />
        </div>
        <div className="col col-8">
          <nav className="navbar d-flex justify-content-center   ">
            <NavbarMenu />
          </nav>
        </div>
        <div className="col col-2">sdsdsdsd</div>
      </div>
    </div>
  );
};

export default Header;
