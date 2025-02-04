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
    const typeText = () => {
      if (index < text.length) {
        setDisplayedText((prev) => prev.concat(text.charAt(index)));
        index += 1;
        setTimeout(typeText, speed);
      } else {
        setTimeout(() => {
          setDisplayedText('');
          index = 0;
          setTimeout(typeText, speed);
        }, 100000); // delay before restarting
      }
    };
    typeText();

    return () => {
      setDisplayedText('');
    };
  }, [text]);

  return (
    <span className="relative">
      {displayedText}
      <span className=" -right-1 top-0 animate-blink bg-green-500  text-green-500 text-4xl font-bold" >|</span>
    </span>
  );
};

export default TypingEffect;