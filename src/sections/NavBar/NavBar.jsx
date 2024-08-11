
import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import './NavBar.css';

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <h3>Portfolio</h3>
      <nav ref={navRef}>
        <NavLink to="/" exact onClick={showNavbar}>
          Home
        </NavLink>
        <NavLink to="/about" onClick={showNavbar}>
          About Me
        </NavLink>
        <NavLink to="/projects" onClick={showNavbar}>
          Projects
        </NavLink>
        <NavLink to="/skills" onClick={showNavbar}>
          Skills
        </NavLink>
        <NavLink to="/contact" onClick={showNavbar}>
          Contact
        </NavLink>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          &times;
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        &#9776;
      </button>
    </header>
  );
}

export default Navbar;
