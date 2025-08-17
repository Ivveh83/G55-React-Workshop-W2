import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ToggleButton from "./ToggleButton.jsx";
import Menu from "./Menu.jsx";
import Order from "./Order.jsx";
import "./App.css";
import isEqual from "lodash/isEqual";

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
    {
      id: 4,
      name: "Soda",
      description: "Refreshing soda to quench your thirst.",
      price: 29,
      image:
        "https://images.unsplash.com/photo-1582572430474-3acf30221916?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 5,
      name: "Salad",
      description: "Fresh garden salad with a variety of vegetables.",
      price: 89,
      image:
        "https://images.unsplash.com/photo-1678831654337-79f072c7dd9f?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 6,
      name: "Ice Cream",
      description: "Creamy ice cream in various flavors.",
      price: 49,
      image:
        "https://images.unsplash.com/photo-1586917049334-0f99406d8a6e?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  // State to manage dark mode
  // Initialize darkMode state to false

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  // Start with an empty order
  const [orderItems, setOrderItems] = useState([]);

  // Function to add item to the order
  const addItemToOrder = (itemToAdd) => {
    // Using the callback form of setter method to ensure we always work with the latest state, for use of "best practice" and to prevent wrong value
    //  if multiple updates take place after each other. Setter methods are asynchronous.
    setOrderItems((prevItems) => {
      // Check if item already exists in order
      const existingItem = prevItems.find((i) => areItemsEqual(i, itemToAdd));
      if (existingItem) {
        // Increase quantity
        return prevItems.map((i) =>
          areItemsEqual(i, itemToAdd) ? { ...i, quantity: i.quantity + 1 } : i
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
  // Function to check if two items are equal, including adjustments
  // This function is used to compare items in the order to prevent duplicates
function areItemsEqual(a, b) {
  if (a.id !== b.id) return false;

  if (!a.adjustments && !b.adjustments) return true;
  if (!a.adjustments || !b.adjustments) return false;

  // Sort adjustments by stringified JSON to ensure consistent comparison
  // This is necessary because the order of adjustments may vary
  const aSorted = [...a.adjustments].sort((x,y) => JSON.stringify(x).localeCompare(JSON.stringify(y)));
  const bSorted = [...b.adjustments].sort((x,y) => JSON.stringify(x).localeCompare(JSON.stringify(y)));

  return isEqual(aSorted, bSorted);
}


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
      <Order items={orderItems} setItems={setOrderItems} />
    </div>
  );
}

export default App;
