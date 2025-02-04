'use client';
import { useEffect, useState } from 'react';

interface TypingEffectProps {
  text: string;
}

const TypingEffect = ({ text }: TypingEffectProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const speed = 100; // typing speed in ms
  
  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setDisplayedText((prev) => prev + text[index]);
      index += 1;
      if (index === text.length) {
        clearInterval(intervalId);
      }
    }, speed);
    
    return () => clearInterval(intervalId);
  }, [text]);

  return <span className="relative">{displayedText}<span className="absolute right-0 top-0 animate-blink">|</span></span>;
};

export default TypingEffect;
