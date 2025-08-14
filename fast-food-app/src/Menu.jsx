const Menu = () => {
return(
    <>
    <div className="container">
        <h1 className="text-center mb-4">Fast Food Menu</h1>
        <div className="row g-4">
          {/* Burger */}
          <div className="col-md-4">
            <div className="card h-100">
              <img
                src="https://images.unsplash.com/photo-1678110707493-8d05425137ac?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Hamburger"
                className="card-img-top"
              />
              <div className="card-body text-center">
                <h5 className="card-title">Hamburger</h5>
                <p className="card-text">
                  A delicious burger with all the fixings.
                </p>
                <p className="fw-bold">SEK 99</p>
                <button className="btn btn-primary">Add to order</button>
              </div>
            </div>
          </div>
          {/*Pizza*/}
          <div className="col-md-4">
            <div className="card h-100">
              <img
                src="https://plus.unsplash.com/premium_photo-1730829140510-68f7cf61d621?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="card-img-top"
                alt="Pizza"
              />
              <div className="card-body text-center">
                <h5 className="card-title">Pizza</h5>
                <p className="card-text">
                  Classic pizza with your favorite toppings.
                </p>
                <p className="fw-bold">SEK 119</p>
                <button className="btn btn-primary">Add to order</button>
              </div>
            </div>
          </div>
          {/*Fries*/}
          <div className="col-md-4">
            <div className="card h-100">
              <img
                src="https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="card-img-top"
                alt="Fries"
              />
              <div className="card-body text-center">
                <h5 className="card-title">Fries</h5>
                <p className="card-text">
                  Crispy golden fries served hot and fresh.
                </p>
                <p className="fw-bold">SEK 59</p>
                <button className="btn btn-primary">Add to order</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
)
}
export default Menu;