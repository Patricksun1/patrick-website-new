import { useRef, useState, useEffect } from "react";
import "./Navbar.css";
import logo_light from "../assets/patrick-logo-black.png";
import logo_dark from "../assets/patrick-logo-white.png";
import toggle_light from "../assets/night.png";
import toggle_dark from "../assets/day.png";
import { useNavigate } from "react-router-dom";

interface NavbarProps {
  theme: string;
  setTheme: (theme: string) => void;
}

const Navbar = ({ theme, setTheme }: NavbarProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hintPos, setHintPos] = useState({ top: 0, left: 0 });
  const toggleRef = useRef<HTMLImageElement>(null);
  const navigate = useNavigate();
  const showHint = location.pathname === "/";

  const toggle_mode = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const handleNavigate = (path: string) => {
    navigate(path);
    setMenuOpen(false);
  };
  useEffect(() => {
  const updateHintPos = () => {
    if (toggleRef.current) {
      
      setHintPos({
        top: toggleRef.current.offsetTop + toggleRef.current.offsetHeight + 20, // below toggle
        left: toggleRef.current.offsetLeft + toggleRef.current.offsetWidth / 2, // center
      });
    }
  };

  updateHintPos();
  window.addEventListener("resize", updateHintPos);
  return () => window.removeEventListener("resize", updateHintPos);
}, []);

  // Prevent scrolling when mobile menu open
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

      {/* Hamburger */}
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
          <a className="link__hover-effect" onClick={() => handleNavigate("/")}>Home</a>
        </li>
        <li>
          <a className="link__hover-effect" onClick={() => handleNavigate("/Experience")}>Experience</a>
        </li>
        <li>
          <a className="link__hover-effect" onClick={() => handleNavigate("/Visions")}>Visions</a>
        </li>
        <li>
          <a className="link__hover-effect" onClick={() => handleNavigate("/Contact")}>Contact</a>
        </li>
      </ul>

      {/* Theme toggle */}
      <img
        ref={toggleRef}
        src={theme === "light" ? toggle_light : toggle_dark}
        alt="Toggle Theme"
        className="toggle-icon"
        onClick={toggle_mode}
      />

      {/* Hint */}
      
      { showHint && (
        <div
        className="toggle-hint-wrapper"
        style={{ top: hintPos.top, left: hintPos.left }}
      >
        <div className="toggle-hint">
          <div className="arrow-up"></div>
          <div className="hint-text">Try switching modes!</div>
        </div>
      </div>)
      }
    </nav>
  );
};

export default Navbar;