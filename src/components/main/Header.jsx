import React from 'react';
import NavbarMenu from './NavbarMenu';
import SideNavBar from './SideNavBar';
import { RiSearch2Line } from 'react-icons/ri';

const Header = () => {
  return (
    <div className="container">
      <div className="row navbar fixed-top ">
        <div className="col  d-block">
          <SideNavBar />
        </div>
        <div className="col col-8 d-flex justify-content-center  ">
          <NavbarMenu />
        </div>
        <div className="col  ">
          <div className="row"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
