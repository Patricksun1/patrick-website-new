import React from "react";
import "./Navbar.css";
import logo_light from "../assets/patrick-logo-black.png";
import logo_dark from "../assets/patrick-logo-white.png";
import toggle_light from "../assets/night.png";
import toggle_dark from "../assets/day.png";

const Navbar = ({ theme, setTheme }) => {
  const toggle_mode = () => {
    theme == "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <div className="navbar">
      <img
        src={theme == "light" ? logo_light : logo_dark}
        alt=""
        className="logo"
      />
      <ul>
        <li><img src="" alt="" /><a href="" className = 'link__hover-effect'>Home</a></li>
        <li><img src="" alt="" /><a href="" className = 'link__hover-effect'>About</a></li>
        <li><img src="" alt="" /><a href="" className = 'link__hover-effect'>Features</a></li>
        <li><img src="" alt="" /><a href="" className = 'link__hover-effect'>Projects</a></li>
      </ul>
      <img
        src={theme == "light" ? toggle_light: toggle_dark}
        alt=""
        className="toggle-icon"
        onClick={() => {
          toggle_mode();
        }}
      />
    </div>
  );
};

export default Navbar;
