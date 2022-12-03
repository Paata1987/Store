import React from 'react';
import { Outlet } from 'react-router-dom';
import Products from '../product/Products';
import Headers from '../main/Header';
import Footer from '../main/Footer';

const HomePage = () => {
  return (
    <div>
      <Headers />

      <h1>Home page works</h1>
      <Products />
      <Footer />
      <Outlet />
    </div>
  );
};

export default HomePage;
