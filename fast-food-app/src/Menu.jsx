import { useState } from "react";
import AdjustmentsModal from "./AdjustmentsModal.jsx";

const Menu = ({ menuItems, addItemToOrder }) => {

  // Array of pizza ingredients with prices
  // This array is used to create a list of toppings that can be added to pizza items
  const pizzaIngredients = [
    { id: 1, ingredient: "Extra Cheese", price: 5 },
    { id: 2, ingredient: "Pineapple", price: 10 },
    { id: 3, ingredient: "Olives", price: 7 },
    { id: 4, ingredient: "Mushrooms", price: 6 },
    { id: 5, ingredient: "Pepperoni", price: 8 },
    { id: 6, ingredient: "Bacon", price: 9 },
  ];

  // State to control the visibility of the adjustments modal
  // This modal is used to select extra toppings for pizza items
  const [showModal, setShowModal] = useState(false);
  // State to keep track of the currently active item for adjustments, for instance, a pizza item from the menu
  // This is used to pass the selected adjustments back to the order
  const [activeItem, setActiveItem] = useState(null);

  // Function to open the adjustments modal and put the selected item into it, for instance, a pizza, set the active item, so that 
  // This function is called when the user clicks the "Adjustments To Order" button
  const openAdjustmentsModal = (item) => {
    setActiveItem(item);
    setShowModal(true);
  };

  // Function to handle saving adjustments from the modal
  // This function is called when the user clicks the "Save" button in the modal
  const handleSavingAdjustments = (adjustments) => {
    // If no active item is set, do nothing
    // This is a safety check to ensure we don't try to add adjustments to a null item
    if (!activeItem) return;
    // If no adjustments are selected, close the modal and return
    if (adjustments.length === 0) {
      setShowModal(false);
      setActiveItem(null);
      return;
    }
    // Add adjustments to the active item and call the addItemToOrder function
    // This will add the item with the selected adjustments to the order
    // The adjustments are passed as an array of objects, each containing id, ingredient, and price
    // The addItemToOrder function will handle adding the item to the order state
    addItemToOrder({
      ...activeItem,
      adjustments });
    setShowModal(false);
    setActiveItem(null);
  };

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
                <div id="card-body" className="card-body text-center">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{item.description}</p>
                  <p className="fw-bold">SEK {item.price}</p>
                  <button
                    className="btn btn-primary"
                    onClick={() => addItemToOrder(item)}
                  >
                    Add to order
                  </button>
                  {/* Adjustments button for pizza items */}
                  {item.name.toLowerCase() === "pizza" && (
                    <button
                      className="btn btn-secondary ms-2"
                      onClick={() =>
                        openAdjustmentsModal(item)
                      }
                    >
                      Adjustments To Order
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Pizza Ingredients Modal */}
      <AdjustmentsModal
      show={showModal}
        onClose={() => {
          setShowModal(false);
          setActiveItem(null);
        }}
        onSave={handleSavingAdjustments}
        ingredients={pizzaIngredients}
      />
    </>
  );
};
export default Menu;
