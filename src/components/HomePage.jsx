import React from "react";
import { Outlet } from "react-router-dom";
import Products from "./Products";

const HomePage = () => {
  return (
    <div>
      <h1>Home page works</h1>
      <Products />
      <Outlet />
    </div>
  );
};

export default HomePage;
