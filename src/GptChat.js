// src/GptChat.js
import React, { useState } from 'react';
import axios from 'axios';

const GptChat = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const result = await axios.post('https://api.openai.com/v1/chat/completions', {
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: input }],
        max_tokens: 150,
      }, {
        headers: {
          'Authorization': `Bearer YOUR_API_KEY`, // Replace YOUR_API_KEY with your actual OpenAI API key
          'Content-Type': 'application/json',
        }
      });

      setResponse(result.data.choices[0].message.content);
    } catch (error) {
      console.error('Error:', error);
      setResponse('There was an error communicating with GPT.');
    }
  };

  return (
    <div>
      <h1>Chat with GPT</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={input}
          onChange={handleInputChange}
          rows="4"
          cols="50"
          placeholder="Type your message here..."
        />
        <br />
        <button type="submit">Send</button>
      </form>
      <div>
        <h2>Response:</h2>
        <p>{response}</p>
      </div>
    </div>
  );
};

export default GptChat;
