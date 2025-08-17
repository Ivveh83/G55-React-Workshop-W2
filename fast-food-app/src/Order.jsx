const Order = ({ items, setItems }) => {
  // Function to update item quantity
  // This function will be used to increase or decrease the quantity of an item in the order
  const updateQuantity = (id, change) => {
    setItems((prevItems) => {
      const updatedItems = prevItems
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + change } : item
        )
        .filter((item) => item.quantity > 0); // Remove items with quantity 0

      console.log("Updated items:", updatedItems);
      return updatedItems;
    });
  };

  return (
    <div className="container mt-5">
      <h4>Your order</h4>
      <div className="border p-3">
        <h5 className="mb-3">Order Details</h5>
        {items.map((item) => (
          <div className="row" key={item.id}>
            {/* Order details */}
            <div className="col-md-4">
              <p>
                {item.quantity} x {item.name}
              </p>
            </div>

            {/* Quantity controls */}
            <div className="col-md-4 d-flex flex-column align-items-center">
              <div className="d-flex">
                <button
                  className="btn btn-outline-secondary btn-sm border-2 me-2"
                  onClick={() => updateQuantity(item.id, -1)}
                >
                  -
                </button>
                <button
                  className="btn btn-outline-secondary btn-sm border-2"
                  onClick={() => updateQuantity(item.id, +1)}
                >
                  +
                </button>
              </div>
            </div>

            {/* Prices */}
            <div className="col-md-4 text-end">
              <p>{item.price * item.quantity} SEK</p>
            </div>
          </div>
        ))}

        <hr className="w-25 ms-auto" />
        {/* Total price */}
        <div className="text-end">
          <p className="fw-bold">
            Total:{" "}
            {/*Accumulator (acc) starts at 0 and adds the total price for each item in the array "items"*/}
            {items.reduce((acc, item) => acc + item.price * item.quantity, 0)}{" "} 
            SEK
          </p>
        </div>
      </div>
    </div>
  );
};

export default Order;
