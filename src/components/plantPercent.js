'use client';

import axios from 'axios';
import { useState } from 'react';
const PlantPercent = () => {
    const [result, setResult] = useState('');

  const fetchData = async () => {
    try {
      const response = await axios.post('/api/chatgpt', {
        plantName: 'Aloe Vera',
        potSize: 'Small',
        sunlightLevel: 'A lot',
        airTemperature: '22',
        airMoisture: '28',
      });

      console.log('Optimal Percentage:', response.data.percentage);
      setResult(response.data.percentage);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
        <form onSubmit={fetchData}>
            <button type="submit">Submit</button>
        </form>
        {result}
    </div>
  );
};

export default PlantPercent;
