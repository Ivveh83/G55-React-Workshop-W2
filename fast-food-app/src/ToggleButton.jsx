const ToggleButton = ({ darkMode, toggleDarkMode }) => {
  return (
    <>
      <button
        type="button"
        className={`btn ${darkMode ? "btn-light" : "btn-dark"} border m-3`}
        onClick={toggleDarkMode}
      >
        {darkMode ? "Light" : "Dark"}
      </button>
    </>
  );
};
export default ToggleButton;
