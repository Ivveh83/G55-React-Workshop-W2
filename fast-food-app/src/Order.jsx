const Order = ({ items, setItems }) => {
  const updateQuantity = (id, change) => {
    setItems(
      (items) =>
        items
          .map((item) =>
            item.id === id
              ? { ...item, quantity: item.quantity + change }
              : item
          )
          .filter((item) => item.quantity > 0) // tar bort item om quantity är 0 eller lägre
    );
  };

  return (
    <div className="container mt-5">
      <h4>Your order</h4>
      <div className="border p-3">
        <h5 className="mb-3">Order Details</h5>
        <div className="row">
          {/* Order details */}
          <div className="col-md-4">
            {items
              ?.filter((item) => item.quantity > 0)
              .map((item) => (
                <p key={item.id}>
                  {item.quantity} x {item.name}
                </p>
              ))}
          </div>

          {/* Quantity controls */}
          <div className="col-md-4 d-flex flex-column align-items-center">
            {items
              ?.filter((item) => item.quantity > 0)
              .map((item) => (
                <div key={item.id} className="d-flex mb-2">
                  <button
                    className="btn btn-outline-secondary btn-sm me-2"
                    onClick={() => updateQuantity(item.id, -1)}
                  >
                    -
                  </button>
                  <button
                    className="btn btn-outline-secondary btn-sm"
                    onClick={() => updateQuantity(item.id, +1)}
                  >
                    +
                  </button>
                </div>
              ))}
          </div>

          {/* Prices */}
          <div className="col-md-4 text-end">
            {items
              ?.filter((item) => item.quantity > 0)
              .map((item) => (
                <p key={item.id}>{item.price * item.quantity} SEK</p>
              ))}
            <hr />
            <p className="fw-bold">
              Total:{" "}
              {items
                ?.filter((item) => item.quantity > 0)
                .reduce(
                  (acc, item) => acc + item.price * item.quantity,
                  0
                )}{" "}
              SEK
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
