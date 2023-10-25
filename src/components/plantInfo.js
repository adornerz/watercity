'use client';

import { useState } from 'react';
import axios from 'axios';

export default function ChatGPT() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('/api/chatgpt', { input });
      setOutput(response.data.output);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2>ChatGPT</h2>
      <div>
        <textarea
          rows="4"
          cols="50"
          placeholder="Ask a question..."
          value={input}
          onChange={handleInputChange}
        ></textarea>
      </div>
      <div>
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <div>
        <h3>Response:</h3>
        <p>{output}</p>
      </div>
    </div>
  );
}