import React, { useState, useEffect, useRef } from "react";
import './Slideshow.css';
import mahjong_img from "../assets/Mahjong_night.png";
import brushes_img from "../assets/Brushes_blizzards.png";
import iceskating_img from "../assets/ice_skating.png";
import peermentoring_img from "../assets/peer_mentoring.png";
import wingsforlife_img from "../assets/wingsforlife.png";
import outduction_img from "../assets/outduction.png";
import bouldering_img from "../assets/bouldering.png";

const images = [
  peermentoring_img,
  mahjong_img,
  iceskating_img,
  bouldering_img,
  outduction_img,
  wingsforlife_img,
  brushes_img,
];

const Slideshow: React.FC = () => {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef<number | null>(null);

  const startAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
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
    startAutoSlide(); // reset timer
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
    startAutoSlide(); // reset timer
  };

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
    startAutoSlide(); // reset timer
  };

  return (
    <div className="slideshow">
      <div
        className="slideshow-track"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((src, i) => (
          <img key={i} src={src} alt={`Slide ${i}`} className="slideshow-image" />
        ))}
      </div>

      {/* Arrows */}
      <button className="arrow left-arrow" onClick={prevSlide}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="white">
          <path d="M10 2 L4 8 L10 14" stroke="white" strokeWidth="2" fill="none"/>
        </svg>
      </button>
      <button className="arrow right-arrow" onClick={nextSlide}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M6 2 L12 8 L6 14" stroke="white" strokeWidth="2" />
        </svg>
      </button>

      {/* Dots */}
      <div className="controls">
        {images.map((_, i) => (
          <button
            key={i}
            className={i === index ? "active" : ""}
            onClick={() => goToSlide(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slideshow;

