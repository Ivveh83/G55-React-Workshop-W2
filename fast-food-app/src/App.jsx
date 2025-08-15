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

  const toggleDarkMode = () => {
    if (darkMode) setDarkMode(false);
    else setDarkMode(true);
  };

  const [items, setItems] = useState(
    menuItems.map((item) => ({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: item.quantity || 1, // Ensure quantity is initialized
    }))
  );

  return (
    <>
      <div
        className={
          darkMode
            ? "bg-dark text-white min-vh-100"
            : "bg-light text-dark min-vh-100"
        }
      >
        {/*Toggle Button Dark/Light Mode*/}
        <ToggleButton darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        {/*Menu*/}
        <Menu menuItems={menuItems} />
        {/*The Order*/}
        <Order items={items} setItems={setItems} />
      </div>
    </>
  );
}

export default App;
