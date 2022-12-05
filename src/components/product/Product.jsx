const product = (props) => {
  const { price, title, image, rating } = props;

  return (
    <div className="col col-12 col-sm-6 col-md-3 col-lg-3">
      <div className="border border-0 position-relative ">
        <img src={image} className="card-img-top " alt="product" />
        <div className="card-body">
          <h6 className="card-text ">{title}</h6>
          <h4 className="card-title ">Price: {price} $</h4>
          <h5 className="card-title d-none d-lg-block d-lg-block d-xl-block d-xxl-block  ">
            Rate: {rating.rate}{' '}
          </h5>
        </div>
        <div className="modalButton">
          <button className="openModalButton btn btn-primary">open</button>
        </div>
      </div>
      <div> </div>
    </div>
  );
};

export default product;
