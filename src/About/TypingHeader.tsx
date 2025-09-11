import React, { useState, useEffect } from "react";

interface MultiTypingHeaderProps {
  phrases?: string[];
  speed?: number;
  deleteSpeed?: number;
  pause?: number;
}

const TypingHeader: React.FC<MultiTypingHeaderProps> = ({
  phrases = [
    "Hey! I'm Patrick Sun",
    "你好！我是 Patrick Sun",
    "¡Hola! Soy Patrick Sun",
    "Hallo! Ich bin Patrick Sun",
    "안녕하세요! 저는 Patrick Sun",
    "Bonjour! Je suis Patrick Sun",
    "Ciao! Sono Patrick Sun",
    "Olá! Eu sou Patrick Sun",
    "こんにちは！私は Patrick Sun です",
  ],
  speed = 100,
  deleteSpeed = 60,
  pause = 1200,
}) => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const currentPhrase = phrases[phraseIndex];
  const typed = currentPhrase.slice(0, charIndex);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (!isDeleting && charIndex < currentPhrase.length) {
      timer = setTimeout(() => setCharIndex(charIndex + 1), speed);
    } else if (!isDeleting && charIndex === currentPhrase.length) {
      timer = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && charIndex > 0) {
      timer = setTimeout(() => setCharIndex(charIndex - 1), deleteSpeed);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, currentPhrase, speed, deleteSpeed, pause, phrases.length]);

  // ✅ Highlight "Patrick Sun" as soon as those characters appear
  const name = "Patrick Sun";
  const nameStart = currentPhrase.indexOf(name);
  let content;

  if (nameStart !== -1) {
    const beforeName = typed.slice(0, nameStart);
    const namePart = typed.slice(nameStart, nameStart + name.length);
    const afterName = typed.slice(nameStart + name.length);

    content = (
      <>
        {beforeName}
        <span className="name-blue">{namePart}</span>
        {afterName}
      </>
    );
  } else {
    content = typed; // no Patrick Sun in this phrase
  }

  return (
    <h1 className="home_info-title">
      {content}
      <span className="cursor">|</span>
    </h1>
  );
};

export default TypingHeader;