import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ToggleButton from "./ToggleButton.jsx";
import Menu from "./Menu.jsx";
import Order from "./Order.jsx";

function App() {
  const [count, setCount] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    if (darkMode) setDarkMode(false);
    else setDarkMode(true);
  };

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
        <Menu />
        {/*The Order*/}
        <Order />
      </div>
    </>
  );
}

export default App;
