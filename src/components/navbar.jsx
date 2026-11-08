import { useState } from "react";
import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/projects", label: "Selected work" },
  { to: "/skills", label: "Toolkit" },
  { to: "/about", label: "About" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className="site-header">
        <nav className="navbar navbar-expand-lg container" aria-label="Main navigation">
          <NavLink className="navbar-brand wordmark" to="/" onClick={closeMenu}>
            ziyad<span>.</span>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen((isOpen) => !isOpen)}
          >
            <span className="menu-icon" aria-hidden="true">{menuOpen ? "×" : "+"}</span>
          </button>
          <div
            className={`collapse navbar-collapse${menuOpen ? " show" : ""}`}
            id="primary-navigation"
          >
            <div className="navbar-nav ms-auto align-items-lg-center">
              {links.map(({ to, label, end }) => (
                <NavLink
                  className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
                  end={end}
                  key={to}
                  onClick={closeMenu}
                  to={to}
                >
                  {label}
                </NavLink>
              ))}
              <a className="nav-contact" href="tel:+917037941256">
                Let’s talk <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
