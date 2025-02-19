'use client';
import { useState } from 'react';

export default function Chat() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    setLoading(true);
    setAnswer('');
    try {
      const response = await fetch('/api/ask', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setAnswer(data.answer);
    } catch (error) {
      console.error('Error:', error);
      setAnswer('Sorry, something went wrong. Please try again later.');
    } finally {
      setLoading(false);
      setQuestion('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleAsk();
    }
  };

  return (
    <section className="p-8 text-white w-full max-w-screen-lg mx-auto">
      <p className='p-4'>Do you wish to know anything about me? Then ask me here 👇 </p>
      <input
        type="text"
        id="chatinput"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        onKeyDown={handleKeyPress}
        className="w-full p-4 mb-4 h-20 text-green-500 placeholder-green-500 border-green-500 border-solid rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-black"
        placeholder="What do you want to know about me?"
      />
      {loading && (
        <div className="mt-4 p-4 bg-gray-800 rounded-lg text-green-500 animate-pulse">
          Loading...
        </div>
      )}
      {answer && (
        <div className="mt-4 p-4 bg-gray-800 rounded-lg">
          <p>{answer}</p>
        </div>
      )}
    </section>
  );
}

