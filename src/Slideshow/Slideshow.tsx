import React, { useState, useEffect, useRef } from "react";
import './Slideshow.css';
import mahjong_img from "../assets/Mahjong_night.webp";
import brushes_img from "../assets/Brushes_blizzards.webp";
import iceskating_img from "../assets/ice_skating.webp";
import peermentoring_img from "../assets/peer_mentoring.webp";
import wingsforlife_img from "../assets/wingsforlife.webp";
import outduction_img from "../assets/outduction.webp";
import bouldering_img from "../assets/bouldering.webp";

const slides = [
  { image: peermentoring_img, title: "Peer Mentoring 2025" },
  { image: mahjong_img, title: "Mahjong Night" },
  { image: iceskating_img, title: "Ice Skating" },
  { image: bouldering_img, title: "Bouldering" },
  { image: outduction_img, title: "Peer Mentoring Outduction" },
  { image: wingsforlife_img, title: "Wings for Life" },
  { image: brushes_img, title: "Brushes and Blizzards" },
];

const Slideshow: React.FC = () => {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef<number | null>(null);

  const startAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = window.setInterval(() => {
      setIndex(prev => (prev + 1) % slides.length);
    }, 4000);
  };

  useEffect(() => {
    startAutoSlide();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const goToSlide = (i: number) => {
    setIndex(i);
    startAutoSlide();
  };

  const prevSlide = () => {
    setIndex(prev => (prev - 1 + slides.length) % slides.length);
    startAutoSlide();
  };

  const nextSlide = () => {
    setIndex(prev => (prev + 1) % slides.length);
    startAutoSlide();
  };

  return (
    <div className="slideshow-wrapper">
     
      <div className="slideshow">
        <div
          className="slideshow-track"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((slide, i) => (
            <img
              key={i}
              src={slide.image}
              alt={slide.title}
              className="slideshow-image"
            />
          ))}
        </div>

        
        <button className="arrow left-arrow" onClick={prevSlide}>
          &#10094;
        </button>
        <button className="arrow right-arrow" onClick={nextSlide}>
          &#10095;
        </button>

      
        <div className="controls">
          {slides.map((_, i) => (
            <button
              key={i}
              className={i === index ? "active" : ""}
              onClick={() => goToSlide(i)}
            />
          ))}
        </div>
      </div>

      
      <div className="slide-text">
        <h2 key={index} className="fade">{slides[index].title}</h2>
      </div>
    </div>
  );
};

export default Slideshow;