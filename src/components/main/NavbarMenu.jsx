import React from 'react';
import { Link } from 'react-router-dom';
import SerachBar from './SerachBar';

const NavbarMenu = () => {
  return (
    <nav className="nav nav-tabs ">
      <Link className="nav-link Link" to="/">
        {' '}
        <h5 className="menu  d-block d-lg-block d-xl-block  d-xxl-block d-none ">
          Home
        </h5>
      </Link>
      <Link className="nav-item nav-link  Link" to="/about">
        {' '}
        <h5 className="menu  d-block    d-xxl-block d-none">About</h5>
      </Link>
      <img
        src="https://raw.githubusercontent.com/Paata1987/Store/main/src/components/87f5485fd81b4c7da0f1e71b2522eee6.png"
        className="logo d-block "
        alt="Dinara Logo"
      />{' '}
      <Link className="nav-item nav-link Link" to="/contacts">
        {' '}
        <h5 className="menu d-block d-xxl-block   d-none ">Contact</h5>
      </Link>
      <Link className="nav-item nav-link Link " to="/registration">
        {' '}
        <h5 className="menu d-block d-lg-block d-xl-block  d-xxl-block d-none ">
          Registration
        </h5>
      </Link>
      <SerachBar />
    </nav>
  );
};

export default NavbarMenu;
