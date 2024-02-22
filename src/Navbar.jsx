import "./Navbar.css";

const NavigationBar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        {/* Replace 'YourLogo' with your actual logo */}
        <img src="bus.svg" alt="Logo" />
      </div>
      <div className="nav-buttons">
        <button>Button 1</button>
        <button>Button 2</button>
        <button>Button 3</button>
      </div>
    </div>
  );
};

export default NavigationBar;
