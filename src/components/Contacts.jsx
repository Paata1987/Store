import React from 'react';
import { Outlet } from 'react-router-dom';

const Contacts = () => {
  return (
    <div className="mainComponentsClass">
      <h1>Contacts</h1>
      <Outlet />
    </div>
  );
};

export default Contacts;
