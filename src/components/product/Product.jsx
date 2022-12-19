const product = (props) => {
  const { price, title, image, rating, description } = props;

  return (
    <div className="col col-12 col-sm-6 col-md-3 col-lg-3 ">
      <div className="border border-0 position-relative ">
        <img
          src={image}
          className="card-img-top "
          alt="product"
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        />
        <div className="card-body">
          <h6 className="card-text ">{title}</h6>
          <h4 className="card-title ">Price: {price} $</h4>
          <h5 className="card-title d-none d-lg-block d-lg-block d-xl-block d-xxl-block  ">
            Rate: {rating.rate}{' '}
          </h5>
        </div>
      </div>
      <div>
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          open
        </button>
        <div
          className="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  {title}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>

              <div className="modal-body">
                {' '}
                <img src={image} className="card-img-top " alt="product" />
                <h2>{description}</h2>
              </div>
              <div className="modal-footer">
                Price: {price} $ Rate: {rating.rate}{' '}
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default product;
