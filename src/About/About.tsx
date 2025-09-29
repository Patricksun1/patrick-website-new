import "./About.css";
import home_image from "../assets/home_image.png";
import TypingHeader from "./TypingHeader";
import { useNavigate } from "react-router-dom";

const About = () => {
    const navigate = useNavigate();

  return (
    <div className="about">
      <div className="home__info--container">
        <figure className="home__img--mask">
          <img src={home_image} alt="picture of me" />
        </figure>
        <h1 className="home_info-title">
          <TypingHeader />
          <span className="wave">👋</span>
        </h1>
        <p className="home__para">
          I'm a Second Year Engineering/Computer Science Student @ UNSW running
          for Co-Pres and Treasurer!
        </p>

      </div>
      <div className="info-buttons">
        <a href="" className="btn btn--experience" onClick={() => navigate("/experience")}>Experience</a>
        <a href="" className="btn btn--visions" onClick={() => navigate("/visions")}>Visions</a>
        <a href="" className="btn btn--contact" onClick={() => navigate("/contact")}>Contact</a>
      </div>
    </div>
  );
};

export default About;
