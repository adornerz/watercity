// pages/api/openai.js

import fetch from 'node-fetch';
export default async (req, res) => {
    try {
      const { prompt } = req.body;
      if (!prompt) {
        res.status(400).json({ error: 'Prompt is required' });
        return;
      }
  
      const OPENAI_API_KEY = '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'; // Replace with your actual API key
  
      const response = await fetch('https://api.openai.com/v1/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo-instruct',
          prompt: prompt, // Use the prompt from the request
          max_tokens: 5,
          temperature: 0.8,
        }),
      });
  
      if (!response.ok) {
        throw new Error('Request to OpenAI API failed');
      }
  
      const data = await response.json();
      const re = '\d+(\.\d+)?%'
      console.log("Percentage:", data.choices[0].text.trim().match(re))
      res.status(200).json(data.choices[0].text.trim());
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };  