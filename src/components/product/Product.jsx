import React from 'react';

const product = (props) => {
  const { price, title, image, rating } = props;

  return (
    <div className="col col-12 col-sm-6 col-md-3 col-lg-3">
      <div className="border border-0 position-relative ">
        <img src={image} className="card-img-top " alt="Product Picture" />
        <div className="card-body">
          <h6 className="card-text ">{title}</h6>
          <h4 className="card-title ">Price: {price} $</h4>
          <h5 className="card-title d-none d-lg-block d-lg-block d-xl-block d-xxl-block  ">
            Rate: {rating.rate}{' '}
          </h5>

          <button href="#" className="btn btn-primary">
            Go somewhere
          </button>
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
