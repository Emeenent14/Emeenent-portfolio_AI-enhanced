import TypingEffect from './TypingEffect';

export default function About() {
  const text = "Welcome to my portfolio. I am a passionate developer with a love for technology and innovation.";
  
  return (
    <section className="p-8 pt-[calc(4rem+4vh)] text-4xl text-white">
      <h2 className="text-3xl">About Me</h2>
      <div className="font-mono text-xl mt-4">
        <TypingEffect text={text} />
      </div>
    </section>
  );
};

