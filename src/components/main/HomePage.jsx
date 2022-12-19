import { Outlet } from 'react-router-dom';

import Products from '../product/Products';
import Carousel from './Carousel';

const HomePage = () => {
  return (
    <div
      className="mainComponentsClass
      "
    >
      <h1>Home page works</h1>
      <Carousel />
      <Products />
      <Outlet />
    </div>
  );
};

export default HomePage;
