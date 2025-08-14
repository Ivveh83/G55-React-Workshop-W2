const Menu = () => {
  const menuItems = [
    {
      id: 1,
      name: "Hamburger",
      description: "A delicious burger with all the fixings.",
      price: 99,
      image:
        "https://images.unsplash.com/photo-1678110707493-8d05425137ac?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      name: "Pizza",
      description: "Classic pizza with your favorite toppings.",
      price: 119,
      image:
        "https://plus.unsplash.com/premium_photo-1730829140510-68f7cf61d621?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      name: "Fries",
      description: "Crispy golden fries served hot and fresh.",
      price: 59,
      image:
        "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

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
