import React from 'react';
import NavbarMenu from './NavbarMenu';
import SideNavBar from './SideNavBar';
import { RiSearch2Line } from 'react-icons/ri';

const Header = () => {
  return (
    <div>
      <div className="navbar fixed-top ">
        <div className="col col-2 d-block">
          <SideNavBar />
        </div>
        <div className="col col-8 d-flex justify-content-center  ">
          <NavbarMenu />
        </div>
        <div className="col col-2 ">
          <div className="row">
            <input className="col"></input>
            <button className="col">
              <RiSearch2Line />
            </button>

            <div className="avatar col d-block" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
