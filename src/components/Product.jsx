import React from "react";

const product = (props) => {
  const { price, description, image, rating } = props;

  return (
    <div className="product">
      <div>
        {" "}
        <div className="myCard ">
          <img
            src={image}
            alt=""
          />{" "}
          <p> {description} </p>
          <h3> {price} </h3>
          <h4> {rating.rate} </h4>
        </div>
      </div>
    </div>
  );
};

export default product;
