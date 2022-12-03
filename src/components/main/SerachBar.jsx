import React from 'react';
import { BiSearchAlt } from 'react-icons/bi';
const SerachBar = () => {
  return (
    <div className="inputMyClass d-block col  d-xxl-block d-none ">
      <div className="input-group ">
        <span className="input-group-text" id="inputGroup">
          <BiSearchAlt color="blue" />
        </span>
        <input
          type="text"
          className="form-control border border-0 bg-info bg-opacity-10"
          placeholder="Search..."
          aria-label="Sizing example input"
          aria-describedby="inputGroup"
        />
      </div>
    </div>
  );
};

export default SerachBar;
