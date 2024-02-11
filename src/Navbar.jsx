export default function Navbar() {
  return (
    <nav>
      <div className="logo-container">
        <img src="/bus.svg" alt="" width="40" height="36" className="logo"/>
      </div>

      <div className="buttons">
        <button type="button">Login</button>
        <button type="button">Register</button>
      </div>
    </nav>
  );
}
