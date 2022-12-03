import React from 'react';

const product = (props) => {
  const { price, title, image, rating } = props;

  return (
    <div className="product col myCard">
      <div className="card border border-0 position-relative ">
        <img
          src={image}
          className="card-img-top h-50 position-absolute"
          alt="Product Picture"
        />
        <div className="card-body">
          <h5 className="card-title">{price}</h5>
          <h5 className="card-title">{rating.rate} </h5>

          <p className="card-text">{title}</p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
      <div>
        {' '}
        {/* <div className="myCard ">
          <img src={image} alt="" /> <p> {description} </p>
          <h3> {price} </h3>
          <h4> {rating.rate} </h4>
        </div> */}
      </div>
    </div>
  );
};

export default product;
