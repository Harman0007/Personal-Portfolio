
import React, { useRef } from "react";
import { Link } from "react-scroll";
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
        <Link to="hero" smooth={true} duration={500} onClick={showNavbar}>
          Home
        </Link>
        <Link to="about-me" smooth={true} duration={500} onClick={showNavbar}>
          About Me
        </Link>
        <Link to="projects" smooth={true} duration={500} onClick={showNavbar}>
          Projects
        </Link>
        <Link to="skills" smooth={true} duration={500} onClick={showNavbar}>
          Skills
        </Link>
        <Link to="contact" smooth={true} duration={500} onClick={showNavbar}>
          Contact
        </Link>
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
