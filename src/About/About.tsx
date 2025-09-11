import React from "react";
import "./About.css";
import home_image from "../assets/home_image.png";
import TypingHeader from "./TypingHeader";

const About = () => {


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
          for <strong>Co-Pres</strong> and <strong>Treasurer</strong>!
        </p>
      </div>
      <div></div>
    </div>
  );
};

export default About;
