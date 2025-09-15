import "./Navbar.css";
import logo_light from "../assets/patrick-logo-black.png";
import logo_dark from "../assets/patrick-logo-white.png";
import toggle_light from "../assets/night.png";
import toggle_dark from "../assets/day.png";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

interface NavbarProps {
  theme: string;
  setTheme: (theme: string) => void;
}

const Navbar = ({ theme, setTheme }: NavbarProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggle_mode = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const handleNavigate = (path: string) => {
    navigate(path);
    setMenuOpen(false); // close mobile menu after click
  };

  // Prevent horizontal scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflowX = "hidden";
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowX = "";
      document.body.style.overflowY = "";
    }
  }, [menuOpen]);

  return (
    <nav className="navbar">
      <img
        src={theme === "light" ? logo_light : logo_dark}
        alt="Logo"
        className="logo"
        onClick={() => handleNavigate("/")}
      />

      {/* Hamburger button (mobile only) */}
      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Nav links */}
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li>
          <a
            href="#"
            className="link__hover-effect"
            onClick={() => handleNavigate("/")}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#"
            className="link__hover-effect"
            onClick={() => handleNavigate("/Experience")}
          >
            Experience
          </a>
        </li>
        <li>
          <a
            href="#"
            className="link__hover-effect"
            onClick={() => handleNavigate("/Visions")}
          >
            Visions
          </a>
        </li>
        <li>
          <a
            href="#"
            className="link__hover-effect"
            onClick={() => handleNavigate("/Contact")}
          >
            Contact
          </a>
        </li>
      </ul>

      {/* Theme toggle */}
      <img
        src={theme === "light" ? toggle_light : toggle_dark}
        alt="Toggle Theme"
        className="toggle-icon"
        onClick={toggle_mode}
      />
    </nav>
  );
};

export default Navbar;