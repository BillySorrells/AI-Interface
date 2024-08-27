import axios from 'axios';

const API_URL = 'https://api.example.com'; // Replace with your API endpoint
const API_KEY = 'your-api-key'; // Replace with your API key

export const getAIResponse = async (inputData) => {
  try {
    const response = await axios.post(`${API_URL}/predict`, inputData, {
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching AI response:', error);
    throw error;
  }
};