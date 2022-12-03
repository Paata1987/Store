import React from 'react';
import { Outlet } from 'react-router-dom';

const AboutInfo = () => {
  return (
    <div className="mainComponentsClass">
      AboutInfo
      <Outlet />
    </div>
  );
};

export default AboutInfo;
