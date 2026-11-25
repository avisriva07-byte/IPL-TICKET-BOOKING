import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header>
      <h2 className="logo">IPL 2026</h2>

      <button
        className="menu-toggle"
        aria-label="Toggle menu"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        &#9776;
      </button>

      <nav className={menuOpen ? "open" : ""}>
        <a href="#matches" onClick={closeMenu}>Matches</a>
        <a href="#booking" onClick={closeMenu}>Book Ticket</a>
        <a href="#mybookings" onClick={closeMenu}>My Bookings</a>
        <a href="#guidelines" onClick={closeMenu}>Guidelines</a>
      </nav>
    </header>
  );
}

export default Navbar;
