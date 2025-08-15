import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ToggleButton from "./ToggleButton.jsx";
import Menu from "./Menu.jsx";
import Order from "./Order.jsx";

function App() {
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

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  // Start with an empty order
  const [items, setItems] = useState([]);

  // Function to add item to the order
  const addItemToOrder = (itemToAdd) => {
    // Use the callback form of setItems to ensure we always work with the latest state
    setItems((prevItems) => {
      // Check if item already exists in order
      const existingItem = prevItems.find((i) => i.id === itemToAdd.id);
      if (existingItem) {
        // Increase quantity
        return prevItems.map((i) =>
          i.id === itemToAdd.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        // Add new item with quantity 1
        // Destructure itemToAdd to get id, name, price
        const { id, name, price } = itemToAdd;
        // Ensure the new item has a quantity property
        return [...prevItems, { id, name, price, quantity: 1 }];
      }
    });
  };

  return (
    <div
      className={
        darkMode
          ? "bg-dark text-white min-vh-100"
          : "bg-light text-dark min-vh-100"
      }
    >
      <ToggleButton darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Menu menuItems={menuItems} addItemToOrder={addItemToOrder} />
      <Order items={items} setItems={setItems} />
    </div>
  );
}

export default App;
