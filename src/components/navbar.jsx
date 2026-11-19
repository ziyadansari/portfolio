import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">ZIYAD ANSARI</div>

      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/skills">Skills</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/about">About Me</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;