const Order = () => {
  return (
    <div className="container mt-5">
        <h4>Your order</h4>
        <div className="border p-3">
          <div className="row">
            {/*Order details*/}
            <div className="col-md-4">
              <p>Cheeseburger</p>
              <p>Pizza Slice</p>
              <p>Small Fries</p>
            </div>

            {/*Quantity controls*/}
            <div className="col-md-4 d-flex flex-column align-items-center">
              <div className="d-flex mb-2">
                <button className="btn btn-outline-secondary btn-sm me-2">
                  +
                </button>
                <button className="btn btn-outline-secondary btn-sm">-</button>
              </div>
              <div className="d-flex mb-2">
                <button className="btn btn-outline-secondary btn-sm me-2">
                  +
                </button>
                <button className="btn btn-outline-secondary btn-sm">-</button>
              </div>
              <div className="d-flex">
                <button className="btn btn-outline-secondary btn-sm me-2">
                  +
                </button>
                <button className="btn btn-outline-secondary btn-sm">-</button>
              </div>
            </div>

            {/*Prices*/}
            <div className="col-md-4 text-end">
              <p>99 SEK</p>
              <p>119 SEK</p>
              <p>59 SEK</p>
              <hr />
              <p className="fw-bold">Total: 149 SEK</p>
            </div>
          </div>
        </div>
      </div>
  );
}
export default Order;