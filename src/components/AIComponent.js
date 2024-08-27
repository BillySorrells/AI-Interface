import React, { useState } from 'react';
import { getAIResponse } from '../services/aiService';

const AIComponent = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await getAIResponse({ data: input });
      setResult(response);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter your input"
        />
        <button type="submit">Submit</button>
      </form>
      {loading && <p>Loading...</p>}
      {result && <div>Result: {JSON.stringify(result)}</div>}
    </div>
  );
};

export default AIComponent;