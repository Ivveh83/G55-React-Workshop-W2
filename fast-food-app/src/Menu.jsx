const Menu = ({menuItems}) => {


  return (
    <>
      <div className="container">
        <h1 className="text-center mb-4">Fast Food Menu</h1>
        <div className="row g-4">
          {/* Menu Items */}
          {menuItems.map((item) => (
            <div key={item.id} className="col-md-4">
              <div className="card h-100">
                <img
                  src={item.image}
                  alt={item.name}
                  className="card-img-top"
                />
                <div className="card-body text-center">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{item.description}</p>
                  <p className="fw-bold">SEK {item.price}</p>
                  <button className="btn btn-primary">Add to order</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Menu;
