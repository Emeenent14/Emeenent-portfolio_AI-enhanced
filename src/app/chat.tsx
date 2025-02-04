'use client';
import { useState } from 'react';
import type { NextApiRequest, NextApiResponse } from 'next';

export default function AskMe() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleAsk = async () => {
    const response = await fetch('/api/ask', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ question }),
    });
    const data = await response.json();
    setAnswer(data.answer);
  };

  return (
    <section className="p-8 text-white w-full max-w-screen-lg mx-auto">
      <h2 className="text-2xl mb-4">Ask Me Anything</h2>
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        className="w-full p-2 mb-4 text-black"
        placeholder="Ask a question..."
      />
      <button onClick={handleAsk} className="p-2 bg-blue-500 text-white">
        Ask
      </button>
      {answer && (
        <div className="mt-4 p-4 bg-gray-800">
          <p>{answer}</p>
        </div>
      )}
    </section>
  );
}



export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { question } = req.body;

  const response = await fetch('https://api.gemini.com/v1/ask', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer YOUR_GEMINI_API_KEY`,
    },
    body: JSON.stringify({ question }),
  });

  const data = await response.json();
  res.status(200).json({ answer: data.answer });
}