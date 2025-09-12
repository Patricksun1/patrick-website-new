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
  const toggle_mode = () => {
    theme == "light" ? setTheme("dark") : setTheme("light");
  };
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <img
        src={theme == "light" ? logo_light : logo_dark}
        alt=""
        className="logo"
      />
      <ul>
        <li><img src="" alt="" /><a href="" className = 'link__hover-effect' onClick={() => navigate("/")}>Home</a></li>
        <li><img src="" alt="" /><a href="" className = 'link__hover-effect' onClick={() => navigate("/Experience")}>Experience</a></li>
        <li><img src="" alt="" /><a href="" className = 'link__hover-effect' onClick={() => navigate("/Visions")}>Visions</a></li>
        <li><img src="" alt="" /><a href="" className = 'link__hover-effect' onClick={() => navigate("/Contact")}>Contact</a></li>
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
